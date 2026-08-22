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
var prismChaiscript_min$2 = {};
var hasRequiredPrismChaiscript_min;
function requirePrismChaiscript_min() {
  if (hasRequiredPrismChaiscript_min) return prismChaiscript_min$2;
  hasRequiredPrismChaiscript_min = 1;
  Prism.languages.chaiscript = Prism.languages.extend("clike", { string: { pattern: /(^|[^\\])'(?:[^'\\]|\\[\s\S])*'/, lookbehind: true, greedy: true }, "class-name": [{ pattern: /(\bclass\s+)\w+/, lookbehind: true }, { pattern: /(\b(?:attr|def)\s+)\w+(?=\s*::)/, lookbehind: true }], keyword: /\b(?:attr|auto|break|case|catch|class|continue|def|default|else|finally|for|fun|global|if|return|switch|this|try|var|while)\b/, number: [Prism.languages.cpp.number, /\b(?:Infinity|NaN)\b/], operator: />>=?|<<=?|\|\||&&|:[:=]?|--|\+\+|[=!<>+\-*/%|&^]=?|[?~]|`[^`\r\n]{1,4}`/ }), Prism.languages.insertBefore("chaiscript", "operator", { "parameter-type": { pattern: /([,(]\s*)\w+(?=\s+\w)/, lookbehind: true, alias: "class-name" } }), Prism.languages.insertBefore("chaiscript", "string", { "string-interpolation": { pattern: /(^|[^\\])"(?:[^"$\\]|\\[\s\S]|\$(?!\{)|\$\{(?:[^{}]|\{(?:[^{}]|\{[^{}]*\})*\})*\})*"/, lookbehind: true, greedy: true, inside: { interpolation: { pattern: /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^{}]*\})*\})*\}/, lookbehind: true, inside: { "interpolation-expression": { pattern: /(^\$\{)[\s\S]+(?=\}$)/, lookbehind: true, inside: Prism.languages.chaiscript }, "interpolation-punctuation": { pattern: /^\$\{|\}$/, alias: "punctuation" } } }, string: /[\s\S]+/ } } });
  return prismChaiscript_min$2;
}
var prismChaiscript_minExports = requirePrismChaiscript_min();
const prismChaiscript_min = /* @__PURE__ */ getDefaultExportFromCjs(prismChaiscript_minExports);
const prismChaiscript_min$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: prismChaiscript_min
}, [prismChaiscript_minExports]);
export {
  prismChaiscript_min$1 as p
};
