# MarkText-HM

将 MarkText（Electron + Vue 3 开源 Markdown 编辑器）移植到 HarmonyOS（2in1）的开源项目。
复用 Bruno 工程的 web_engine/electron 运行时，在鸿蒙设备上以原生窗口运行 MarkText 编辑器。

## 项目概述

| 项 | 说明 |
|---|---|
| 目标平台 | HarmonyOS 2in1 / 平板（API 24+，真机验证通过 MOR-W52 / API 26） |
| 编辑器来源 | 上游 [marktext/marktext](https://github.com/marktext/marktext)（`vendor/marktext` submodule） |
| 运行时 | 复用 Bruno web_engine（Electron 兼容运行时）+ electron 模块 |
| 包名 | `com.sddswsf.marktext` |
| 远端仓库 | https://github.com/1440196924/MarkText-HM.git |

### 已实现功能

- MarkText 主界面、编辑、保存、设置窗口全部可用
- 鸿蒙原生控制按钮（最大化 / 最小化 / 关闭），关闭按钮悬停红色
- 窗口尺寸/位置同步（避免启动窗口跳变）
- `.md` 文件关联：桌面右键 .md → 打开方式 → MarkText 直接打开
- **碰一碰传图**：手机图库照片碰编辑窗口 → 转码（HEIC→JPEG）→ 插入当前光标处，带加载占位
- 会话恢复时静默跳过无权限访问的文件（EPERM 保护）

### 目录结构

```
D:\Code\ArkTs\MarkText\
├─ AppScope\            # 应用级配置（图标、bundleName）
├─ electron\            # 鸿蒙入口模块（EntryAbility、窗口页面）
├─ web_engine\          # web 引擎运行时（Electron 兼容层，来自 Bruno）
│   └─ src\main\resources\resfile\resources\app\   # 打包产物（由 build.ps1 同步）
├─ vendor\marktext\     # 上游 MarkText 源码（git submodule）
├─ scripts\port\        # 移植构建脚本
│   ├─ build.ps1        # ★ 一键构建脚本（唯一入口）
│   ├─ patch-main.js    # 主进程路径补丁
│   └─ shims\           # 原生模块 shim（keytar/ripgrep 等）
└─ docs\                # 移植文档
```

## 环境要求

- DevEco Studio（含 HarmonyOS SDK，本机 SDK 6.1.1 / API 24）
- Node.js + pnpm（本机 pnpm 10.x）
- 已连接 HarmonyOS 真机/模拟器

## 首次克隆初始化

```bash
git clone https://github.com/1440196924/MarkText-HM.git
cd MarkText-HM

# 1) 拉取 submodule（上游 marktext，checkout 到 develop）
git submodule update --init vendor/marktext

# 2) 引入共享的移植分支 port/harmony（不在上游，需从共享仓库取）
git -C vendor/marktext remote add shared https://github.com/1440196924/MarkText-HM.git
git -C vendor/marktext fetch shared port/harmony
git -C vendor/marktext checkout port/harmony

# 3) 安装 marktext 依赖（--ignore-scripts 避免触发 Electron 下载等）
cd vendor/marktext
pnpm install --ignore-scripts
pnpm run minify-locales
cd ../..
```

## 构建

### 一键构建（推荐）

```powershell
powershell -ExecutionPolicy Bypass -File scripts\port\build.ps1
```

依次执行：
1. `pnpm run minify-locales`（本地化资源压缩）
2. `pnpm --filter marktext build`（编译主进程 + preload + 渲染进程）
3. esbuild 打包主进程为单文件 `main.js`（打桩 keytar / native-keymap / ripgrep / electron-updater / ced）
4. `patch-main.js` 路径补丁（适配鸿蒙部署布局）
5. robocopy 同步产物到 `web_engine/.../resfile/resources/app`

然后编译部署到设备：

```
# DevEco：build_project（hvigor 构建 HAP）
# 部署：start_app（选择真机/模拟器）
```

## 同步上游更新

上游 MarkText 有新提交时：

```bash
# 1) 在 submodule 内拉取上游并 rebase 移植补丁
git -C vendor/marktext fetch origin
git -C vendor/marktext rebase origin/develop

# 2) 冲突解决
git -C vendor/marktext add <冲突文件>
git -C vendor/marktext rebase --continue

# 3) 提交并推送
git add vendor/marktext
git commit -m "chore: bump vendor/marktext"
git push origin master
git -C vendor/marktext push shared port/harmony
```

> 冲突高发文件见 `docs/上游更新流程.md`（titleBar、editor.ts、app/index.ts 等）。
> 原则：保留 `port/harmony` 侧的鸿蒙逻辑，合并上游新功能。

## 分支说明

| 分支 | 位置 | 说明 |
|---|---|---|
| `master` | MarkText-HM（主仓库） | 鸿蒙工程主分支 |
| `port/harmony` | vendor/marktext（submodule 内，已推 MarkText-HM） | 上游 MarkText + 鸿蒙移植补丁 |

submodule 内部 remote：
- `origin` → https://github.com/marktext/marktext.git（上游）
- `shared` → https://github.com/1440196924/MarkText-HM.git（共享）
- `local` → `D:\Code\OpenSource\marktext`（可选，本机原始克隆）

## 常见问题

- **`git submodule update` 失败**：submodule gitlink 指向 `port/harmony`（本地分支 commit，不在上游）。
  必须按「首次克隆初始化」第 2 步从 `shared` 拉取该分支。
- **碰一碰图片显示慢**：HEIC→JPEG 转码 + base64 传输耗时约 1-2 秒（已缩至 1280px 最长边 + 占位图先行）。
- **EPERM: operation not permitted**：鸿蒙文件权限限制，"打开方式"之外无法访问用户文件，属预期行为。
- **构建产物不更新**：确认 `build.ps1` 完整跑完（含 robocopy），再 `build_project`。

## 许可证

MarkText 部分遵循上游 [MIT License](https://github.com/marktext/marktext)。
本工程移植适配部分版权归作者所有。
