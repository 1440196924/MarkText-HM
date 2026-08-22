// Shim for `electron-updater` on HarmonyOS: auto-update is disabled.
const { EventEmitter } = require('events');

class AutoUpdaterShim extends EventEmitter {
  autoDownload = false;

  checkForUpdates() {
    return Promise.resolve(null);
  }

  downloadUpdate() {
    return Promise.resolve(null);
  }

  quitAndInstall() {}

  get isUpdaterActive() {
    return false;
  }

  get updateAvailable() {
    return false;
  }
}

module.exports = {
  autoUpdater: new AutoUpdaterShim()
};
