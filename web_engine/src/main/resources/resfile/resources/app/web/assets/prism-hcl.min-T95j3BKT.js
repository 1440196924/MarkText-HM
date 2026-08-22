import { g as getDefaultExportFromCjs } from "./index-1FfQlz0g.js";
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
var prismHcl_min$2 = {};
var hasRequiredPrismHcl_min;
function requirePrismHcl_min() {
  if (hasRequiredPrismHcl_min) return prismHcl_min$2;
  hasRequiredPrismHcl_min = 1;
  Prism.languages.hcl = { comment: /(?:\/\/|#).*|\/\*[\s\S]*?(?:\*\/|$)/, heredoc: { pattern: /<<-?(\w+\b)[\s\S]*?^[ \t]*\1/m, greedy: true, alias: "string" }, keyword: [{ pattern: /(?:data|resource)\s+(?:"(?:\\[\s\S]|[^\\"])*")(?=\s+"[\w-]+"\s+\{)/i, inside: { type: { pattern: /(resource|data|\s+)(?:"(?:\\[\s\S]|[^\\"])*")/i, lookbehind: true, alias: "variable" } } }, { pattern: /(?:backend|module|output|provider|provisioner|variable)\s+(?:[\w-]+|"(?:\\[\s\S]|[^\\"])*")\s+(?=\{)/i, inside: { type: { pattern: /(backend|module|output|provider|provisioner|variable)\s+(?:[\w-]+|"(?:\\[\s\S]|[^\\"])*")\s+/i, lookbehind: true, alias: "variable" } } }, /[\w-]+(?=\s+\{)/], property: [/[-\w\.]+(?=\s*=(?!=))/, /"(?:\\[\s\S]|[^\\"])+"(?=\s*[:=])/], string: { pattern: /"(?:[^\\$"]|\\[\s\S]|\$(?:(?=")|\$+(?!\$)|[^"${])|\$\{(?:[^{}"]|"(?:[^\\"]|\\[\s\S])*")*\})*"/, greedy: true, inside: { interpolation: { pattern: /(^|[^$])\$\{(?:[^{}"]|"(?:[^\\"]|\\[\s\S])*")*\}/, lookbehind: true, inside: { type: { pattern: /(\b(?:count|data|local|module|path|self|terraform|var)\b\.)[\w\*]+/i, lookbehind: true, alias: "variable" }, keyword: /\b(?:count|data|local|module|path|self|terraform|var)\b/i, function: /\w+(?=\()/, string: { pattern: /"(?:\\[\s\S]|[^\\"])*"/, greedy: true }, number: /\b0x[\da-f]+\b|\b\d+(?:\.\d*)?(?:e[+-]?\d+)?/i, punctuation: /[!\$#%&'()*+,.\/;<=>@\[\\\]^`{|}~?:]/ } } } }, number: /\b0x[\da-f]+\b|\b\d+(?:\.\d*)?(?:e[+-]?\d+)?/i, boolean: /\b(?:false|true)\b/i, punctuation: /[=\[\]{}]/ };
  return prismHcl_min$2;
}
var prismHcl_minExports = requirePrismHcl_min();
const prismHcl_min = /* @__PURE__ */ getDefaultExportFromCjs(prismHcl_minExports);
const prismHcl_min$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: prismHcl_min
}, [prismHcl_minExports]);
export {
  prismHcl_min$1 as p
};
