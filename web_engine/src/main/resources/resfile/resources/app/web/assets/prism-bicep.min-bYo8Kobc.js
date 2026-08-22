import { g as getDefaultExportFromCjs } from "./index-ouHvDw0s.js";
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
var prismBicep_min$2 = {};
var hasRequiredPrismBicep_min;
function requirePrismBicep_min() {
  if (hasRequiredPrismBicep_min) return prismBicep_min$2;
  hasRequiredPrismBicep_min = 1;
  Prism.languages.bicep = { comment: [{ pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/, lookbehind: true, greedy: true }, { pattern: /(^|[^\\:])\/\/.*/, lookbehind: true, greedy: true }], property: [{ pattern: /([\r\n][ \t]*)[a-z_]\w*(?=[ \t]*:)/i, lookbehind: true }, { pattern: /([\r\n][ \t]*)'(?:\\.|\$(?!\{)|[^'\\\r\n$])*'(?=[ \t]*:)/, lookbehind: true, greedy: true }], string: [{ pattern: /'''[^'][\s\S]*?'''/, greedy: true }, { pattern: /(^|[^\\'])'(?:\\.|\$(?!\{)|[^'\\\r\n$])*'/, lookbehind: true, greedy: true }], "interpolated-string": { pattern: /(^|[^\\'])'(?:\\.|\$(?:(?!\{)|\{[^{}\r\n]*\})|[^'\\\r\n$])*'/, lookbehind: true, greedy: true, inside: { interpolation: { pattern: /\$\{[^{}\r\n]*\}/, inside: { expression: { pattern: /(^\$\{)[\s\S]+(?=\}$)/, lookbehind: true }, punctuation: /^\$\{|\}$/ } }, string: /[\s\S]+/ } }, datatype: { pattern: /(\b(?:output|param)\b[ \t]+\w+[ \t]+)\w+\b/, lookbehind: true, alias: "class-name" }, boolean: /\b(?:false|true)\b/, keyword: /\b(?:existing|for|if|in|module|null|output|param|resource|targetScope|var)\b/, decorator: /@\w+\b/, function: /\b[a-z_]\w*(?=[ \t]*\()/i, number: /(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:E[+-]?\d+)?/i, operator: /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/, punctuation: /[{}[\];(),.:]/ }, Prism.languages.bicep["interpolated-string"].inside.interpolation.inside.expression.inside = Prism.languages.bicep;
  return prismBicep_min$2;
}
var prismBicep_minExports = requirePrismBicep_min();
const prismBicep_min = /* @__PURE__ */ getDefaultExportFromCjs(prismBicep_minExports);
const prismBicep_min$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: prismBicep_min
}, [prismBicep_minExports]);
export {
  prismBicep_min$1 as p
};
