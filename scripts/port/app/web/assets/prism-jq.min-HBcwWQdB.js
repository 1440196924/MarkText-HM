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
var prismJq_min$2 = {};
var hasRequiredPrismJq_min;
function requirePrismJq_min() {
  if (hasRequiredPrismJq_min) return prismJq_min$2;
  hasRequiredPrismJq_min = 1;
  !(function(e) {
    var n = "\\\\\\((?:[^()]|\\([^()]*\\))*\\)", t = RegExp('(^|[^\\\\])"(?:[^"\r\n\\\\]|\\\\[^\r\n(]|__)*"'.replace(/__/g, (function() {
      return n;
    }))), i = { interpolation: { pattern: RegExp("((?:^|[^\\\\])(?:\\\\{2})*)" + n), lookbehind: true, inside: { content: { pattern: /^(\\\()[\s\S]+(?=\)$)/, lookbehind: true, inside: null }, punctuation: /^\\\(|\)$/ } } }, a = e.languages.jq = { comment: /#.*/, property: { pattern: RegExp(t.source + "(?=\\s*:(?!:))"), lookbehind: true, greedy: true, inside: i }, string: { pattern: t, lookbehind: true, greedy: true, inside: i }, function: { pattern: /(\bdef\s+)[a-z_]\w+/i, lookbehind: true }, variable: /\B\$\w+/, "property-literal": { pattern: /\b[a-z_]\w*(?=\s*:(?!:))/i, alias: "property" }, keyword: /\b(?:as|break|catch|def|elif|else|end|foreach|if|import|include|label|module|modulemeta|null|reduce|then|try|while)\b/, boolean: /\b(?:false|true)\b/, number: /(?:\b\d+\.|\B\.)?\b\d+(?:[eE][+-]?\d+)?\b/, operator: [{ pattern: /\|=?/, alias: "pipe" }, /\.\.|[!=<>]?=|\?\/\/|\/\/=?|[-+*/%]=?|[<>?]|\b(?:and|not|or)\b/], "c-style-function": { pattern: /\b[a-z_]\w*(?=\s*\()/i, alias: "function" }, punctuation: /::|[()\[\]{},:;]|\.(?=\s*[\[\w$])/, dot: { pattern: /\./, alias: "important" } };
    i.interpolation.inside.content.inside = a;
  })(Prism);
  return prismJq_min$2;
}
var prismJq_minExports = requirePrismJq_min();
const prismJq_min = /* @__PURE__ */ getDefaultExportFromCjs(prismJq_minExports);
const prismJq_min$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: prismJq_min
}, [prismJq_minExports]);
export {
  prismJq_min$1 as p
};
