// Shim for `@vscode/ripgrep` on HarmonyOS.
// The native ripgrep binary is not bundled; mark it as unavailable.
module.exports = {
  rgPath: ''
};
