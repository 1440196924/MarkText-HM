import { g as getDefaultExportFromCjs } from "./index-Nx_AZTXs.js";
import { r as requireHtmlmixed } from "./htmlmixed-CrG1pW7k.js";
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
var htmlmixedExports = requireHtmlmixed();
const htmlmixed = /* @__PURE__ */ getDefaultExportFromCjs(htmlmixedExports);
const htmlmixed$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: htmlmixed
}, [htmlmixedExports]);
export {
  htmlmixed$1 as h
};
