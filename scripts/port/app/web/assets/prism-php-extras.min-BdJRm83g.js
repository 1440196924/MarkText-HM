import { g as getDefaultExportFromCjs } from "./index-Nx_AZTXs.js";
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
var prismPhpExtras_min$2 = {};
var hasRequiredPrismPhpExtras_min;
function requirePrismPhpExtras_min() {
  if (hasRequiredPrismPhpExtras_min) return prismPhpExtras_min$2;
  hasRequiredPrismPhpExtras_min = 1;
  Prism.languages.insertBefore("php", "variable", { this: { pattern: /\$this\b/, alias: "keyword" }, global: /\$(?:GLOBALS|HTTP_RAW_POST_DATA|_(?:COOKIE|ENV|FILES|GET|POST|REQUEST|SERVER|SESSION)|argc|argv|http_response_header|php_errormsg)\b/, scope: { pattern: /\b[\w\\]+::/, inside: { keyword: /\b(?:parent|self|static)\b/, punctuation: /::|\\/ } } });
  return prismPhpExtras_min$2;
}
var prismPhpExtras_minExports = requirePrismPhpExtras_min();
const prismPhpExtras_min = /* @__PURE__ */ getDefaultExportFromCjs(prismPhpExtras_minExports);
const prismPhpExtras_min$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: prismPhpExtras_min
}, [prismPhpExtras_minExports]);
export {
  prismPhpExtras_min$1 as p
};
