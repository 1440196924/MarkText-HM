// Shim for the native `keytar` module on HarmonyOS.
// Secure credential storage is not available; degrade to no-op / null reads.
module.exports = {
  getPassword: async () => null,
  setPassword: async () => undefined,
  deletePassword: async () => false
};
