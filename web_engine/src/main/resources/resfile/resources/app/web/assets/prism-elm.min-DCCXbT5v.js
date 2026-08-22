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
var prismElm_min$2 = {};
var hasRequiredPrismElm_min;
function requirePrismElm_min() {
  if (hasRequiredPrismElm_min) return prismElm_min$2;
  hasRequiredPrismElm_min = 1;
  Prism.languages.elm = { comment: /--.*|\{-[\s\S]*?-\}/, char: { pattern: /'(?:[^\\'\r\n]|\\(?:[abfnrtv\\']|\d+|x[0-9a-fA-F]+|u\{[0-9a-fA-F]+\}))'/, greedy: true }, string: [{ pattern: /"""[\s\S]*?"""/, greedy: true }, { pattern: /"(?:[^\\"\r\n]|\\.)*"/, greedy: true }], "import-statement": { pattern: /(^[\t ]*)import\s+[A-Z]\w*(?:\.[A-Z]\w*)*(?:\s+as\s+(?:[A-Z]\w*)(?:\.[A-Z]\w*)*)?(?:\s+exposing\s+)?/m, lookbehind: true, inside: { keyword: /\b(?:as|exposing|import)\b/ } }, keyword: /\b(?:alias|as|case|else|exposing|if|in|infixl|infixr|let|module|of|then|type)\b/, builtin: /\b(?:abs|acos|always|asin|atan|atan2|ceiling|clamp|compare|cos|curry|degrees|e|flip|floor|fromPolar|identity|isInfinite|isNaN|logBase|max|min|negate|never|not|pi|radians|rem|round|sin|sqrt|tan|toFloat|toPolar|toString|truncate|turns|uncurry|xor)\b/, number: /\b(?:\d+(?:\.\d+)?(?:e[+-]?\d+)?|0x[0-9a-f]+)\b/i, operator: /\s\.\s|[+\-/*=.$<>:&|^?%#@~!]{2,}|[+\-/*=$<>:&|^?%#@~!]/, hvariable: /\b(?:[A-Z]\w*\.)*[a-z]\w*\b/, constant: /\b(?:[A-Z]\w*\.)*[A-Z]\w*\b/, punctuation: /[{}[\]|(),.:]/ };
  return prismElm_min$2;
}
var prismElm_minExports = requirePrismElm_min();
const prismElm_min = /* @__PURE__ */ getDefaultExportFromCjs(prismElm_minExports);
const prismElm_min$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: prismElm_min
}, [prismElm_minExports]);
export {
  prismElm_min$1 as p
};
