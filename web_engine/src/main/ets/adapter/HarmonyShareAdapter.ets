// Copyright (c) 2024 Huawei Device Co., Ltd. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import { injectable, inject } from 'inversify';
import { common } from '@kit.AbilityKit';
import harmonyShare from '@hms.collaboration.harmonyShare';
import { systemShare } from '@kit.ShareKit';
import { fileUri } from '@kit.CoreFileKit';
import { image } from '@kit.ImageKit';
import { fileIo as fs } from '@kit.CoreFileKit';
import { BusinessError } from '@ohos.base';

import { BaseAdapter } from '../common/BaseAdapter';
import LogMethod from '../common/LogDecorator';
import LogUtil from '../utils/LogUtil';
import { AbilityManager } from '../common/AbilityManager';
import { ContextAdapter } from './ContextAdapter';

const TAG: string = 'HarmonyShareAdapter';

const KNOCK_CAPABILITY_UTD: string = 'general.image';

@injectable()
export class HarmonyShareAdapter extends BaseAdapter {
  private abilityManager: AbilityManager;
  private ctxAdapter: ContextAdapter;
  private registeredWindowIds: number[] = [];

  constructor(@inject(AbilityManager) abilityManager: AbilityManager,
    @inject(ContextAdapter) ctxAdapter: ContextAdapter) {
    super();
    this.abilityManager = abilityManager;
    this.ctxAdapter = ctxAdapter;
  }

  /**
   * Register a "knock to share" dataReceive listener for the given editor window.
   * The incoming image file is written into the app sandbox (filesDir); on arrival
   * the received file URI is reported back to the JS main process via callback.
   *
   * @param internalWindowId the web_engine internal window id (same as BrowserWindow.id)
   * @param callback receives the sandbox file:// URI of the received image
   */
  @LogMethod
  registerDataReceive(internalWindowId: number, callback: (uri: string) => void): void {
    if (!canIUse('SystemCapability.Collaboration.HarmonyShare')) {
      LogUtil.error(TAG, 'HarmonyShare capability is not available on this device.');
      return;
    }
    if (this.registeredWindowIds.includes(internalWindowId)) {
      LogUtil.info(TAG, `dataReceive already registered for window ${internalWindowId}`);
      return;
    }

    let proxy = this.abilityManager.getProxy(internalWindowId);
    if (!proxy) {
      LogUtil.error(TAG, `registerDataReceive failed: no proxy for window ${internalWindowId}`);
      return;
    }
    let windowClass = proxy.getWindow();
    if (!windowClass) {
      LogUtil.error(TAG, `registerDataReceive failed: no window for ${internalWindowId}`);
      return;
    }
    let systemWindowId = windowClass.getWindowProperties().id;
    let context = this.ctxAdapter.getActiveContext() as common.UIAbilityContext;
    if (!context) {
      LogUtil.error(TAG, 'registerDataReceive failed: no active UIAbility context.');
      return;
    }
    let receiveUri = fileUri.getUriFromPath(context.filesDir);

    let capability: harmonyShare.RecvCapabilityRegistry = {
      windowId: systemWindowId,
      capabilities: [
        {
          utd: KNOCK_CAPABILITY_UTD,
          maxSupportedCount: 1
        }
      ]
    };

    try {
      harmonyShare.on('dataReceive', capability, (receiveTarget: harmonyShare.ReceivableTarget) => {
        receiveTarget.receive(receiveUri, {
          onDataReceived: (shareData: systemShare.SharedData) => {
            let records = shareData.getRecords();
            if (records.length > 0) {
              let uri = records[0].uri;
              if (uri && uri.length > 0) {
                LogUtil.info(TAG, `knock image received: ${uri}`);
                // Notify the renderer right away so a loading placeholder can be
                // inserted before the (slow) HEIC->JPEG conversion finishes.
                callback('pending:');
                this.convertAndReport(uri, context.filesDir, callback);
              } else {
                LogUtil.error(TAG, 'knock image record has no uri.');
              }
            } else {
              LogUtil.error(TAG, 'knock image received but no records.');
            }
          },
          onResult: (resultCode: harmonyShare.ShareResultCode) => {
            LogUtil.info(TAG, `knock receive result code: ${resultCode}`);
          }
        }).catch((err: BusinessError) => {
          LogUtil.error(TAG, 'knock receive failed: ' + JSON.stringify(err));
        });
      });
      this.registeredWindowIds.push(internalWindowId);
      LogUtil.info(TAG, `dataReceive registered for window ${internalWindowId}, systemWindowId ${systemWindowId}`);
    } catch (err) {
      LogUtil.error(TAG, 'registerDataReceive failed: ' + JSON.stringify(err));
    }
  }

  /**
   * Decode the received image (any supported format, incl. HEIC), re-encode it
   * as a browser-friendly PNG in the app sandbox and report the sandbox file
   * path back to the JS main process. The web engine can serve a plain
   * file:// path, but not the HarmonyOS `file://com.sddswsf.marktext/...` URI
   * nor HEIC itself.
   */
  private convertAndReport(sourceUri: string, filesDir: string, callback: (uri: string) => void): void {
    if (!filesDir || filesDir.length === 0) {
      LogUtil.error(TAG, 'convertAndReport failed: no filesDir.');
      return;
    }
    let source: image.ImageSource | undefined = undefined;
    try {
      // `createImageSource(uri)` rejects the `file://com.sddswsf.marktext/...`
      // URIs HarmonyShare delivers, so read the bytes first and decode from the
      // buffer instead.
      let file = fs.openSync(sourceUri, fs.OpenMode.READ_ONLY);
      let stat = fs.statSync(file.fd);
      let buffer = new ArrayBuffer(stat.size);
      fs.readSync(file.fd, buffer);
      fs.closeSync(file.fd);
      source = image.createImageSource(buffer);
      // Scale the decoded bitmap down to a max edge of 1280px while preserving
      // the aspect ratio. HEIC photos are typically 3000-4000px; packing them
      // is what made the original ~8s. A fixed square desiredSize would squash
      // the image, so compute the proportional size from the source info first.
      let targetSize: image.Size = { width: 1280, height: 1280 };
      try {
        let info: image.ImageInfo = source.getImageInfoSync();
        let srcW = info.size.width;
        let srcH = info.size.height;
        if (srcW > 0 && srcH > 0) {
          let maxEdge = Math.max(srcW, srcH);
          if (maxEdge > 1280) {
            let ratio = 1280 / maxEdge;
            targetSize = {
              width: Math.round(srcW * ratio),
              height: Math.round(srcH * ratio)
            };
          } else {
            targetSize = { width: srcW, height: srcH };
          }
        }
      } catch (err) {
        LogUtil.warn(TAG, 'knock getImageInfoSync failed, keep default: ' + JSON.stringify(err));
      }
      LogUtil.info(TAG, `knock image target size: ${targetSize.width}x${targetSize.height}`);
      let decodeOptions: image.DecodingOptions = {
        desiredSize: targetSize
      };
      source.createPixelMap(decodeOptions)
        .then((pixelMap: image.PixelMap) => {
          let packer: image.ImagePacker = image.createImagePacker();
          let option: image.PackingOption = {
            format: 'image/jpeg',
            quality: 90
          };
          packer.packing(pixelMap, option)
            .then((data: ArrayBuffer) => {
              let fileName = `knock_${Date.now()}.jpg`;
              let outPath = `${filesDir}/${fileName}`;
              let outFile = fs.openSync(outPath, fs.OpenMode.CREATE | fs.OpenMode.READ_WRITE | fs.OpenMode.TRUNC);
              fs.writeSync(outFile.fd, data);
              fs.closeSync(outFile.fd);
              pixelMap.release();
              source?.release();
              LogUtil.info(TAG, `knock image converted: ${outPath} (${data.byteLength} bytes)`);
              callback(outPath);
            })
            .catch((err: BusinessError) => {
              LogUtil.error(TAG, 'knock image packing failed: ' + JSON.stringify(err));
              pixelMap.release();
              source?.release();
            })
        })
        .catch((err: BusinessError) => {
          LogUtil.error(TAG, 'knock image decode failed: ' + JSON.stringify(err));
          source?.release();
        });
    } catch (err) {
      LogUtil.error(TAG, 'convertAndReport failed: ' + JSON.stringify(err));
    }
  }

  /**
   * Unregister the dataReceive listener for the given window.
   */
  @LogMethod
  unregisterDataReceive(internalWindowId: number): void {
    if (!canIUse('SystemCapability.Collaboration.HarmonyShare')) {
      return;
    }
    let index = this.registeredWindowIds.indexOf(internalWindowId);
    if (index < 0) {
      return;
    }
    let proxy = this.abilityManager.getProxy(internalWindowId);
    let systemWindowId = proxy?.getWindow()?.getWindowProperties().id;
    if (systemWindowId === undefined) {
      LogUtil.error(TAG, `unregisterDataReceive failed: no window for ${internalWindowId}`);
      return;
    }
    let capability: harmonyShare.RecvCapabilityRegistry = {
      windowId: systemWindowId,
      capabilities: [
        {
          utd: KNOCK_CAPABILITY_UTD,
          maxSupportedCount: 1
        }
      ]
    };
    try {
      harmonyShare.off('dataReceive', capability);
      this.registeredWindowIds.splice(index, 1);
      LogUtil.info(TAG, `dataReceive unregistered for window ${internalWindowId}`);
    } catch (err) {
      LogUtil.error(TAG, 'unregisterDataReceive failed: ' + JSON.stringify(err));
    }
  }
}
