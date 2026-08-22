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
var prismEiffel_min$2 = {};
var hasRequiredPrismEiffel_min;
function requirePrismEiffel_min() {
  if (hasRequiredPrismEiffel_min) return prismEiffel_min$2;
  hasRequiredPrismEiffel_min = 1;
  Prism.languages.eiffel = { comment: /--.*/, string: [{ pattern: /"([^[]*)\[[\s\S]*?\]\1"/, greedy: true }, { pattern: /"([^{]*)\{[\s\S]*?\}\1"/, greedy: true }, { pattern: /"(?:%(?:(?!\n)\s)*\n\s*%|%\S|[^%"\r\n])*"/, greedy: true }], char: /'(?:%.|[^%'\r\n])+'/, keyword: /\b(?:across|agent|alias|all|and|as|assign|attached|attribute|check|class|convert|create|Current|debug|deferred|detachable|do|else|elseif|end|ensure|expanded|export|external|feature|from|frozen|if|implies|inherit|inspect|invariant|like|local|loop|not|note|obsolete|old|once|or|Precursor|redefine|rename|require|rescue|Result|retry|select|separate|some|then|undefine|until|variant|Void|when|xor)\b/i, boolean: /\b(?:False|True)\b/i, "class-name": /\b[A-Z][\dA-Z_]*\b/, number: [/\b0[xcb][\da-f](?:_*[\da-f])*\b/i, /(?:\b\d(?:_*\d)*)?\.(?:(?:\d(?:_*\d)*)?e[+-]?)?\d(?:_*\d)*\b|\b\d(?:_*\d)*\b\.?/i], punctuation: /:=|<<|>>|\(\||\|\)|->|\.(?=\w)|[{}[\];(),:?]/, operator: /\\\\|\|\.\.\||\.\.|\/[~\/=]?|[><]=?|[-+*^=~]/ };
  return prismEiffel_min$2;
}
var prismEiffel_minExports = requirePrismEiffel_min();
const prismEiffel_min = /* @__PURE__ */ getDefaultExportFromCjs(prismEiffel_minExports);
const prismEiffel_min$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: prismEiffel_min
}, [prismEiffel_minExports]);
export {
  prismEiffel_min$1 as p
};
