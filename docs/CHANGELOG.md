# CHANGELOG

记录鸿蒙移植工程（MarkText-HM）的功能与修复。

## 2026-08-23

### 修复：保存到桌面报"操作无权限"（EPERM）

**现象**：新建 Markdown 保存到桌面后，MarkText 尝试重新打开保存的文件时报 EPERM（`operation not permitted`），实际是保存本身失败。

**根因**：MarkText 使用 `write-file-atomic` 做原子保存——先在目标目录写临时文件（`<文件名>.md.<pid>`），再 `rename` 覆盖目标文件。鸿蒙沙箱通过文件选择器只授权**选中的单个文件 URI** 的读写，**不允许在用户目录创建/写入同目录临时文件**，因此临时文件写入被 EPERM 拒绝。

**修改**：`packages/desktop/src/main/filesystem/index.ts` 的 `writeFile`，当 `isHarmonyOS`（`process.platform === 'openharmony'`）时跳过 temp+rename，直接用 `fsPromises.writeFile` 写目标文件。其他平台保持原有原子保存行为。

**影响**：保存走目标文件 URI 授权路径，临时文件不再创建；代价是鸿蒙上不再有崩溃/断电级的原子保存保障（可接受，鸿蒙文件系统本身较稳）。

### 修复：HAP 模块名 electron → marktext

模块名 `electron` 改为 `marktext`（`electron/oh-package.json5`、`electron/src/main/module.json5`、根 `build-profile.json5`），HAP 产物变为 `marktext-default-signed.hap`。

### 工程化：集成 marktext 为 git submodule

- `vendor/marktext` 为上游 marktext 的 git submodule（URL 指向上游 GitHub），鸿蒙移植补丁在 `port/harmony` 分支。
- `port/harmony` 已推送到共享仓库（`MarkText-HM`），协作者可拉取。
- 新增 `scripts/port/build.ps1` 一键构建脚本（minify-locales → marktext build → esbuild 打包 → patch → robocopy 同步 resfile）。
- 详见 `docs/上游更新流程.md`。

### 清理：移除已跟踪的构建产物与缓存

- 取消跟踪 5072 个文件（renderer 构建产物 web/assets、scripts/port 镜像、.cache TS 缓存等，磁盘保留）。
- 完善 `.gitignore`（构建产物、缓存、临时文件）。
