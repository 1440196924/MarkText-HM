import { g as getDefaultExportFromCjs } from "./index-Ccykuj0R.js";
function _mergeNamespaces(n, m) {
  for (var i = 0; i < m.length; i++) {
    const e = m[i];
    if (typeof e !== "string" && !Array.isArray(e)) {
      for (const k in e) {
        if (k !== "default" && !(k in n)) {
          const d = Object.getOwnPropertyDescriptor(e, k);
          if (d) {
            Object.defineProperty(n, k, d.get ? d : {
              enumerable: true,
              get: () => e[k]
            });
          }
        }
      }
    }
  }
  return Object.freeze(Object.defineProperty(n, Symbol.toStringTag, { value: "Module" }));
}
var prismGoModule$2 = {};
var hasRequiredPrismGoModule;
function requirePrismGoModule() {
  if (hasRequiredPrismGoModule) return prismGoModule$2;
  hasRequiredPrismGoModule = 1;
  Prism.languages["go-mod"] = Prism.languages["go-module"] = {
    "comment": {
      pattern: /\/\/.*/,
      greedy: true
    },
    "version": {
      pattern: /(^|[\s()[\],])v\d+\.\d+\.\d+(?:[+-][-+.\w]*)?(?![^\s()[\],])/,
      lookbehind: true,
      alias: "number"
    },
    "go-version": {
      pattern: /((?:^|\s)go\s+)\d+(?:\.\d+){1,2}/,
      lookbehind: true,
      alias: "number"
    },
    "keyword": {
      pattern: /^([ \t]*)(?:exclude|go|module|replace|require|retract)\b/m,
      lookbehind: true
    },
    "operator": /=>/,
    "punctuation": /[()[\],]/
  };
  return prismGoModule$2;
}
var prismGoModuleExports = requirePrismGoModule();
const prismGoModule = /* @__PURE__ */ getDefaultExportFromCjs(prismGoModuleExports);
const prismGoModule$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: prismGoModule
}, [prismGoModuleExports]);
export {
  prismGoModule$1 as p
};
