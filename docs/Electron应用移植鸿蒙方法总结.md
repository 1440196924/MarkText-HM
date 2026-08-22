# Electron 应用移植鸿蒙方法总结

> 以 Bruno（开源 API 客户端，v4.0.0，Electron 37 + React 19 + Node.js monorepo）为例，
> 完整记录将 Electron 桌面应用移植到 HarmonyOS（鸿蒙 PC / 2in1）的流程、命令与踩坑。
> 本文可复用于其他 Electron 应用的鸿蒙移植。

---
鸿蒙版Electron地址：https://github.com/electron/electron/

## 一、结论与整体思路

**可行，主进程代码可基本原样运行**。华为提供了一套"鸿蒙版 Electron 运行时"（`libelectron.so` + `libadapter.so`），
在鸿蒙上原生实现了 Chromium + Node.js + Electron 主进程 API（`app`/`BrowserWindow`/`ipcMain`/`Menu`/`shell`/`dialog`/`session`/`safeStorage`…全可用）。

移植的本质是 **把 Electron 应用的产物塞进鸿蒙 HAP 的资源目录，并处理好平台差异**：

| 层 | 产物 | 位置 |
|----|------|------|
| 渲染层（React/Web） | 静态 web 资源（`dist/`） | `resources/resfile/resources/app/web/` |
| 主进程（Node.js） | esbuild 打包的单文件 `main.js` | `resources/resfile/resources/app/main.js` |
| preload | `preload.js` | `resources/resfile/resources/app/preload.js` |
| worker 脚本 | 单独打包的 `worker.js` / `workers/*.js` | `resources/resfile/resources/app/` |
| package.json | `{"main": "main.js"}` | `resources/resfile/resources/app/package.json` |

> 关键路径：**`web_engine/src/main/resources/resfile/resources/app/`**（不是 `rawfile/`）。

---

## 二、前置准备

1. **DevEco Studio + HarmonyOS SDK**（API ≥ 20，目标 2in1/PC），工程结构：
   ```
   工程/
   ├── AppScope/          # 应用级资源（bundleName、图标、启动图标）
   ├── electron/          # entry HAP（Ability、页面）
   └── web_engine/        # HAR：鸿蒙 Electron 运行时适配层 + 应用产物放置处
   ```
2. **签名**：`build-profile.json5` 配置 `signingConfigs`（debug profile）。
3. **bundleName 对齐**：`AppScope/app.json5` 的 `bundleName` 必须与签名 profile 中的一致，
   否则 `SignHap` 报 `00303074 Configuration Error`。
4. **权限精简**：`web_engine/src/main/module.json5` 中，调试签名 profile 未授权的敏感权限
   （`READ_PASTEBOARD`/`LOCATION`/`CAMERA`/`MIC`/`BLUETOOTH`/受限目录等）会导致**安装失败**
   （`grant request permissions failed`）。Stage/调试阶段需移除，仅保留基础权限。

---

## 三、移植主流程

### Step 1 构建渲染层（web 静态包）

```bash
# 在 Electron 应用仓库根目录
npm install
# 内部 workspace 依赖需先构建（依应用而定）
npm run build --workspace=packages/bruno-common
npm run build --workspace=packages/bruno-schema-types
npm run build --workspace=packages/bruno-sqlite
npm run build --workspace=packages/bruno-graphql-docs
npm run build --workspace=packages/bruno-converters
npm run build --workspace=packages/bruno-query
npm run build --workspace=packages/bruno-filestore
npm run build --workspace=packages/bruno-requests
# 前端 web 包
npm run build:web        # 产物在 packages/bruno-app/dist/
```

### Step 2 打包主进程（esbuild）

```bash
esbuild packages/bruno-electron/src/index.js \
  --bundle --platform=node --format=cjs --target=node20 \
  --external:electron --external:node:* \
  --alias:@lydell/node-pty=<shim> \
  --alias:@usebruno/node-machine-id=<shim> \
  --alias:@usebruno/sqlite=<shim> \
  --alias:node:sqlite=<shim> \
  --banner:js="process.env.ELECTRON_IS_DEV = 'false';" \
  --outfile=main.js
```

要点：
- `--external:electron` + `--external:node:*`：electron 与 node 内置模块运行时提供，不打进包。
- **`--banner` 强制 `ELECTRON_IS_DEV=false`**：否则 `electron-is-dev` 会误判为开发模式，
  加载 `http://localhost:3000` 导致白屏。
- **路径补丁**：若 `main.js` 放在 `app/` 根而 web 在 `app/web/`，需把 bundle 里
  `path.join(__dirname, "../web/index.html")` 改为 `"web/index.html"`（esbuild 每次打包都会覆盖，务必重打补丁）。

### Step 3 原生模块打桩

鸿蒙 Node 为 **20.18.1**，`node:sqlite`（Node ≥ 22.5）**不可用**；部分原生 npm 模块无法重编译时打桩：

| 原模块 | 用途 | 打桩方案 |
|--------|------|---------|
| `node:sqlite`（内置） | SQLite 存储 | shim 提供 `DatabaseSync` 占位（惰性使用，加载时不抛错即可） |
| `@lydell/node-pty` | 终端模拟 | shim：`spawn: () => { throw ... }` |
| `@usebruno/node-machine-id` | 加密密钥 | shim：返回固定字符串 |
| `@usebruno/sqlite` | SQLite IPC | shim：`createDatabase`/`registerSQLiteIpc` 空实现 |

> shim 只需保证**模块加载时不抛异常**；被桩掉的特性在运行时按需降级（如 SQLite 相关 IPC 返回 undefined）。

### Step 4 worker 脚本单独打包

workerpool / worker_threads 的脚本是**运行时按路径加载**的（esbuild 主包不含它们），需单独打包并随包分发：

```bash
esbuild src/services/pool/worker.js            --bundle --platform=node --format=cjs --outfile=app/worker.js
esbuild dist/cjs/workers/worker-script.js      --bundle --platform=node --format=cjs --outfile=app/workers/worker-script.js
```

否则报：`Cannot find module '.../app/workers/worker-script.js'`。

### Step 5 组装应用包并部署

```text
app/
├── package.json          # {"name":"bruno","version":"4.0.0","main":"main.js"}
├── main.js               # esbuild 打包的主进程
├── preload.js            # 渲染层 preload（contextBridge 桥）
├── worker.js             # workerpool worker
├── workers/worker-script.js
├── about/256x256.png     # 窗口图标等资源
└── web/                  # 渲染层静态包（dist/ 拷贝）
    ├── index.html
    └── static/...
```

web 包路径重写（否则 file:// 下加载失败）：
- `index.html` 内 `/static` → `./static`
- `static/css/*.css` 内 `/static/font` → `../../static/font`

整体拷贝到 **`web_engine/src/main/resources/resfile/resources/app/`**，构建 HAP 即可。

### Step 6 构建 / 签名 / 运行

```bash
# DevEco 工程根目录
hvigorw --mode module -p module=electron@default assembleHap -p buildMode=debug
# 安装并启动（真机需已配置签名）
```

---

## 四、平台差异适配（关键）

### 4.1 平台判定
- `process.platform === 'openharmony'`（主进程可用）
- 渲染层 `navigator.platform` 与 `platform` npm 包的 `os` 字段**可能为 null** → 必须空值防护：
  ```js
  const osFamily = String(os?.family ?? '').toLowerCase();
  ```

### 4.2 隐藏系统标题栏
鸿蒙框架底层支持 `hideTitleBar`（`setWindowDecorVisible(false)`）。
Bruno 原代码只对 win/mac/linux 处理，鸿蒙需补 `isHarmonyOS`：
```js
const isHarmonyOS = process.platform === 'openharmony';
titleBarStyle: isMac ? 'hiddenInset' : (isWindows || isHarmonyOS) ? 'hidden' : undefined,
frame: isLinux || isHarmonyOS ? false : true,
```

### 4.3 自定义窗口控制按钮
- 渲染层判定：`osClass === 'os-harmonyos'`（非 mac/win/linux 且存在 `window.ipcRenderer`）→ 显示右侧控制按钮。
- 顺序：**最大化 | 最小化 | 关闭**（鸿蒙原生）。
- 图标：使用鸿蒙原生 SVG（最大化=双矩形、恢复=双矩形反相、最小化=横线、关闭=×），`fill="currentColor"` 跟随主题。
- 主进程 `renderer:window-minimize/maximize/close` 需对 `isHarmonyOS` 放行。

### 4.4 启动窗口
- 启动窗口（startWindow）：静态显示 `startWindowIcon` + `startWindowBackground`，可放启动图/加载文案（静态，不会动）。
- ArkTS 加载页（`pages/NodeHandleWindow`，注意：`getContentPath()` 在支持 NodeHandle 时**返回该页而非 `pages/Index`**）
  如需"转圈加载"遮罩：`LoadingProgress + Text` 叠加在 `WebNodeHandleWindow` 上，
  内容就绪后经桥隐藏（见 4.6），否则遮罩会一直盖住内容。

### 4.5 应用身份
- 名称：`AppScope/resources/base/element/string.json` 的 `app_name`、`electron/src/main/resources/{base,en_US,zh_CN}/element/string.json` 的 `EntryAbility_label`。
- 桌面图标：`AppScope/resources/base/media/app_icon.png` + 分层图标（`foreground.png`/`background.png`/`layered_image.json`）。
- 启动图标：`startIcon.png`。
- 版本号：主进程 `package.json` 的 `version`（会内联进 bundle，About 窗口读取）。

### 4.6 ArkTS ↔ Electron 桥（内容就绪通知等）
框架的 EtsBridge 模式：
- ArkTS 侧：`JsBindingUtils.bindFunction('Name', fn)` 注册函数。
- Electron 主进程：`systemPreferences.callArkTSFunction('Name', returnType, params)` 调用。

```js
// Electron 主进程
mainWindow.webContents.on('did-finish-load', () => {
  try { systemPreferences.callArkTSFunction('Bruno.OnContentReady', 'void', []); } catch (e) {}
});
```

### 4.7 性能 / 系统 API 差异
- `app.getAppMetrics().creationTime` **返回 0** → `new Date(0)` 得到 1970 → uptime 显示 56 年。
  修复：用 `process.uptime()`（单调时钟）推导进程启动时间，并加合理性校验兜底。
- `--time-ticks-at-unix-epoch` 为负大值（框架注入），Chromium DevTools 时间线可能异常（框架级，暂无法从应用侧修复）。

---

## 五、能力矩阵（实测结论）

| 能力 | 鸿蒙 Electron | 说明 |
|------|--------------|------|
| Electron 主进程 API | ✅ | app/BrowserWindow/ipcMain/Menu/shell/dialog/safeStorage/session/globalShortcut… |
| `systemPreferences.callArkTSFunction` | ✅ | ArkTS↔Electron 桥 |
| `worker_threads` | ✅ | 可用 |
| `node:net` / `crypto` / `fs` / `child_process` | ✅ | 可用（无 node/git/npm 二进制，派生此类命令会 ENOENT） |
| `node:sqlite` | ❌ | Node 20 无此模块 → 打桩/替换 |
| 原生 addon | ⚠️ | 需鸿蒙 NDK + Electron 头文件重编译（本工程未涉及） |

---

## 六、常见报错速查

| 报错 | 原因 | 解决 |
|------|------|------|
| `Not allowed to load local resource` | 加载路径不在 app 目录内 | 修正 `../web/index.html` 补丁 / web 包路径 |
| `Cannot find module '.../workers/worker-script.js'` | worker 脚本未随包分发 | 单独打包 worker 脚本 |
| `No such builtin module: node:sqlite` | Node 20 无 sqlite | alias 打桩 |
| `Cannot read properties of null (reading 'toLowerCase')` | `navigator.platform`/`platform.os` 为 null | 空值防护 |
| `SignHap 00303074` | bundleName 与 profile 不一致 | 对齐 bundleName |
| `install failed due to grant request permissions failed` | 权限超 profile 授权 | 精简 requestPermissions |
| uptime 显示 496431h | `getAppMetrics().creationTime=0` | 改用 `process.uptime()` |

---

## 七、可复用脚本要点

主进程打包（每次改动主进程源码后重跑）：
```bash
esbuild src/index.js --bundle --platform=node --format=cjs --target=node20 \
  --external:electron --external:node:* \
  --alias:<native-module>=<shim> ... \
  --banner:js="process.env.ELECTRON_IS_DEV = 'false';" \
  --outfile=main.js
# 然后：替换 "../web/index.html" -> "web/index.html"
```
> esbuild 每次会基于源码重新生成 bundle，**路径补丁与 banner 需在每次打包后重新应用**。

---

## 八、限制与展望

1. **SQLite**（`node:sqlite` 不可用）：需用鸿蒙原生 addon（node-sqlite3 重编译）或 `@ohos.data.relationalStore` 替换。
2. **Git / 终端 / npm 脚本包**：设备无对应二进制，需砍掉或改用鸿蒙侧能力。
3. **原生 npm 模块**（node-pty 等）：需鸿蒙 NDK 重编译，或在 MVP 阶段打桩降级。
4. 完成度：已跑通"启动 + HTTP 请求 + 集合管理 + 界面"，SQLite 相关功能暂为桩实现，待后续接入真实存储。
