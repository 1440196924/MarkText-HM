// Shim for the native `ced` (Compact Encoding Detection) module on HarmonyOS.
// Report UTF-8; the main process already validates UTF-8 heuristically before
// calling ced, so non-UTF-8 files get a best-effort UTF-8 decode.
module.exports = (buffer) => 'Unicode';
