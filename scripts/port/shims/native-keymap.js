// Shim for the native `native-keymap` module on HarmonyOS.
// Report a neutral US keyboard layout; layout-change monitoring is a no-op.
module.exports = {
  getCurrentKeyboardLayout: () => ({
    layout: 'us',
    model: 'pc104',
    variant: '',
    options: ''
  }),
  getKeyMap: () => ({}),
  getKeyboardLayouts: () => [],
  onDidChangeKeyboardLayout: () => () => {}
};
