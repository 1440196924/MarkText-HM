// Path patches for the HarmonyOS deployment layout:
// main.js lives at <app>/main.js, preload at <app>/preload.js, web at <app>/web/,
// static resources at <app>/static/ (loaded via global.__static / i18n which use
// process.resourcesPath on desktop). On the HarmonyOS Electron runtime
// process.resourcesPath does not point at the bundled app directory, so route
// all static lookups through __dirname (= the app directory).
const fs = require('fs');

const file = process.argv[2];
if (!file) {
  console.error('usage: node patch-main.js <main.js>');
  process.exit(1);
}
let c = fs.readFileSync(file, 'utf8');
const before = c;
c = c.split('"../renderer/index.html"').join('"web/index.html"');
c = c.split('"../preload/index.js"').join('"preload.js"');
c = c.split('process.resourcesPath').join('__dirname');
if (c === before) {
  console.log('WARN: no replacements applied (already patched?)');
} else {
  fs.writeFileSync(file, c);
  console.log('patched OK');
}
