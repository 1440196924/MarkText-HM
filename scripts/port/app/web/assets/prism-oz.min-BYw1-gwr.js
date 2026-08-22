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
var prismOz_min$2 = {};
var hasRequiredPrismOz_min;
function requirePrismOz_min() {
  if (hasRequiredPrismOz_min) return prismOz_min$2;
  hasRequiredPrismOz_min = 1;
  Prism.languages.oz = { comment: { pattern: /\/\*[\s\S]*?\*\/|%.*/, greedy: true }, string: { pattern: /"(?:[^"\\]|\\[\s\S])*"/, greedy: true }, atom: { pattern: /'(?:[^'\\]|\\[\s\S])*'/, greedy: true, alias: "builtin" }, keyword: /\$|\[\]|\b(?:_|at|attr|case|catch|choice|class|cond|declare|define|dis|else(?:case|if)?|end|export|fail|false|feat|finally|from|fun|functor|if|import|in|local|lock|meth|nil|not|of|or|prepare|proc|prop|raise|require|self|skip|then|thread|true|try|unit)\b/, function: [/\b[a-z][A-Za-z\d]*(?=\()/, { pattern: /(\{)[A-Z][A-Za-z\d]*\b/, lookbehind: true }], number: /\b(?:0[bx][\da-f]+|\d+(?:\.\d*)?(?:e~?\d+)?)\b|&(?:[^\\]|\\(?:\d{3}|.))/i, variable: /`(?:[^`\\]|\\.)+`/, "attr-name": /\b\w+(?=[ \t]*:(?![:=]))/, operator: /:(?:=|::?)|<[-:=]?|=(?:=|<?:?)|>=?:?|\\=:?|!!?|[|#+\-*\/,~^@]|\b(?:andthen|div|mod|orelse)\b/, punctuation: /[\[\](){}.:;?]/ };
  return prismOz_min$2;
}
var prismOz_minExports = requirePrismOz_min();
const prismOz_min = /* @__PURE__ */ getDefaultExportFromCjs(prismOz_minExports);
const prismOz_min$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: prismOz_min
}, [prismOz_minExports]);
export {
  prismOz_min$1 as p
};
