import { g as getDefaultExportFromCjs } from "./index-D8xk56-E.js";
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
var prismGoModule_min$2 = {};
var hasRequiredPrismGoModule_min;
function requirePrismGoModule_min() {
  if (hasRequiredPrismGoModule_min) return prismGoModule_min$2;
  hasRequiredPrismGoModule_min = 1;
  Prism.languages["go-mod"] = Prism.languages["go-module"] = { comment: { pattern: /\/\/.*/, greedy: true }, version: { pattern: /(^|[\s()[\],])v\d+\.\d+\.\d+(?:[+-][-+.\w]*)?(?![^\s()[\],])/, lookbehind: true, alias: "number" }, "go-version": { pattern: /((?:^|\s)go\s+)\d+(?:\.\d+){1,2}/, lookbehind: true, alias: "number" }, keyword: { pattern: /^([ \t]*)(?:exclude|go|module|replace|require|retract)\b/m, lookbehind: true }, operator: /=>/, punctuation: /[()[\],]/ };
  return prismGoModule_min$2;
}
var prismGoModule_minExports = requirePrismGoModule_min();
const prismGoModule_min = /* @__PURE__ */ getDefaultExportFromCjs(prismGoModule_minExports);
const prismGoModule_min$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: prismGoModule_min
}, [prismGoModule_minExports]);
export {
  prismGoModule_min$1 as p
};
