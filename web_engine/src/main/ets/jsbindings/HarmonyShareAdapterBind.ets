// Copyright (c) 2024 Huawei Device Co., Ltd. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import Inject from '../common/InjectModule';
import lazy { HarmonyShareAdapter } from '../adapter/HarmonyShareAdapter';
import JsBindingUtils from '../utils/JsBindingUtils';

function implHarmonyShareAdapter(): HarmonyShareAdapter {
  return Inject.getOrCreate(HarmonyShareAdapter);
}

function registerDataReceive(internalWindowId: number, callback: (uri: string) => void): void {
  implHarmonyShareAdapter().registerDataReceive(internalWindowId, callback);
}

function unregisterDataReceive(internalWindowId: number): void {
  implHarmonyShareAdapter().unregisterDataReceive(internalWindowId);
}

export class HarmonyShareAdapterBind {
  static bind() {
    JsBindingUtils.bindFunction('HarmonyShare.RegisterDataReceive', registerDataReceive);
    JsBindingUtils.bindFunction('HarmonyShare.UnregisterDataReceive', unregisterDataReceive);
  }
}
