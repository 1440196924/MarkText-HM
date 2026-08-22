import { g as getDefaultExportFromCjs } from "./index-CsLNvl25.js";
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
var prismIdris_min$2 = {};
var hasRequiredPrismIdris_min;
function requirePrismIdris_min() {
  if (hasRequiredPrismIdris_min) return prismIdris_min$2;
  hasRequiredPrismIdris_min = 1;
  Prism.languages.idris = Prism.languages.extend("haskell", { comment: { pattern: /(?:(?:--|\|\|\|).*$|\{-[\s\S]*?-\})/m }, keyword: /\b(?:Type|case|class|codata|constructor|corecord|data|do|dsl|else|export|if|implementation|implicit|import|impossible|in|infix|infixl|infixr|instance|interface|let|module|mutual|namespace|of|parameters|partial|postulate|private|proof|public|quoteGoal|record|rewrite|syntax|then|total|using|where|with)\b/, builtin: void 0 }), Prism.languages.insertBefore("idris", "keyword", { "import-statement": { pattern: /(^\s*import\s+)(?:[A-Z][\w']*)(?:\.[A-Z][\w']*)*/m, lookbehind: true, inside: { punctuation: /\./ } } }), Prism.languages.idr = Prism.languages.idris;
  return prismIdris_min$2;
}
var prismIdris_minExports = requirePrismIdris_min();
const prismIdris_min = /* @__PURE__ */ getDefaultExportFromCjs(prismIdris_minExports);
const prismIdris_min$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: prismIdris_min
}, [prismIdris_minExports]);
export {
  prismIdris_min$1 as p
};
