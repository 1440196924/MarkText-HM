# Build the ported MarkText bundle from the vendor/marktext submodule and
# sync the artifacts into this HarmonyOS project's web_engine resfile.
#
# Prereq: vendor/marktext is on branch `port/harmony` (has the HarmonyOS
# adaptations). Update upstream with:
#   git -C vendor/marktext fetch origin
#   git -C vendor/marktext rebase origin/develop

$ErrorActionPreference = 'Stop'
$root = Split-Path -Parent (Split-Path -Parent $PSScriptRoot)   # D:\Code\ArkTs\MarkText
$mt = Join-Path $root 'vendor\marktext'                          # marktext source (submodule)
$port = Join-Path $root 'scripts\port'                           # staging dir
$resfile = Join-Path $root 'web_engine\src\main\resources\resfile\resources\app'

if (-not (Test-Path (Join-Path $mt 'package.json'))) {
    Write-Error "vendor/marktext missing. Run: git submodule update --init vendor/marktext"
}

Push-Location $mt
try {
    # 1. Build the desktop package (main + preload + renderer)
    & pnpm run minify-locales
    if ($LASTEXITCODE -ne 0) { throw "minify-locales failed" }
    & pnpm --filter marktext build
    if ($LASTEXITCODE -ne 0) { throw "marktext build failed" }

    # 2. Bundle the main process into a single file (esbuild from this repo)
    $mainOut = Join-Path $mt 'packages\desktop\out\main\index.js'
    $mainDest = Join-Path $port 'app\main.js'
    & pnpm exec esbuild $mainOut --bundle --platform=node --format=cjs --target=node20 `
        --external:electron --external:node:* `
        "--alias:keytar=$port\shims\keytar.js" `
        "--alias:native-keymap=$port\shims\native-keymap.js" `
        "--alias:@vscode/ripgrep=$port\shims\@vscode-ripgrep.js" `
        "--alias:electron-updater=$port\shims\electron-updater.js" `
        "--alias:ced=$port\shims\ced.js" `
        "--banner:js=process.env.ELECTRON_IS_DEV='false';process.env.NODE_ENV='production';" `
        --outfile=$mainDest --log-level=error
    if ($LASTEXITCODE -ne 0) { throw "esbuild failed" }
}
finally {
    Pop-Location
}

# 3. Patch paths for the HarmonyOS layout
& node (Join-Path $port 'patch-main.js') $mainDest

# 4. Stage the renderer web output
$rendererOut = Join-Path $mt 'packages\desktop\out\renderer'
$webDest = Join-Path $port 'app\web'
robocopy $rendererOut $webDest /E /NFL /NDL /NJH /NJS /NP | Out-Null

# 5. Sync the whole staging app dir into the resfile
robocopy (Join-Path $port 'app') $resfile /E /NFL /NDL /NJH /NJS /NP | Out-Null

Write-Host "`n[build.ps1] Done. Run build_project + start_app to deploy."
