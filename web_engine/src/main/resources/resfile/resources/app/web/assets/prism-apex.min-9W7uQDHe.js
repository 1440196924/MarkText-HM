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
var prismApex_min$2 = {};
var hasRequiredPrismApex_min;
function requirePrismApex_min() {
  if (hasRequiredPrismApex_min) return prismApex_min$2;
  hasRequiredPrismApex_min = 1;
  !(function(e) {
    var t = /\b(?:(?:after|before)(?=\s+[a-z])|abstract|activate|and|any|array|as|asc|autonomous|begin|bigdecimal|blob|boolean|break|bulk|by|byte|case|cast|catch|char|class|collect|commit|const|continue|currency|date|datetime|decimal|default|delete|desc|do|double|else|end|enum|exception|exit|export|extends|final|finally|float|for|from|get(?=\s*[{};])|global|goto|group|having|hint|if|implements|import|in|inner|insert|instanceof|int|integer|interface|into|join|like|limit|list|long|loop|map|merge|new|not|null|nulls|number|object|of|on|or|outer|override|package|parallel|pragma|private|protected|public|retrieve|return|rollback|select|set|short|sObject|sort|static|string|super|switch|synchronized|system|testmethod|then|this|throw|time|transaction|transient|trigger|try|undelete|update|upsert|using|virtual|void|webservice|when|where|while|(?:inherited|with|without)\s+sharing)\b/i, n = "\\b(?:(?=[a-z_]\\w*\\s*[<\\[])|(?!<keyword>))[A-Z_]\\w*(?:\\s*\\.\\s*[A-Z_]\\w*)*\\b(?:\\s*(?:\\[\\s*\\]|<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>))*".replace(/<keyword>/g, (function() {
      return t.source;
    }));
    function i(e2) {
      return RegExp(e2.replace(/<CLASS-NAME>/g, (function() {
        return n;
      })), "i");
    }
    var a = { keyword: t, punctuation: /[()\[\]{};,:.<>]/ };
    e.languages.apex = { comment: e.languages.clike.comment, string: e.languages.clike.string, sql: { pattern: /((?:[=,({:]|\breturn)\s*)\[[^\[\]]*\]/i, lookbehind: true, greedy: true, alias: "language-sql", inside: e.languages.sql }, annotation: { pattern: /@\w+\b/, alias: "punctuation" }, "class-name": [{ pattern: i("(\\b(?:class|enum|extends|implements|instanceof|interface|new|trigger\\s+\\w+\\s+on)\\s+)<CLASS-NAME>"), lookbehind: true, inside: a }, { pattern: i("(\\(\\s*)<CLASS-NAME>(?=\\s*\\)\\s*[\\w(])"), lookbehind: true, inside: a }, { pattern: i("<CLASS-NAME>(?=\\s*\\w+\\s*[;=,(){:])"), inside: a }], trigger: { pattern: /(\btrigger\s+)\w+\b/i, lookbehind: true, alias: "class-name" }, keyword: t, function: /\b[a-z_]\w*(?=\s*\()/i, boolean: /\b(?:false|true)\b/i, number: /(?:\B\.\d+|\b\d+(?:\.\d+|L)?)\b/i, operator: /[!=](?:==?)?|\?\.?|&&|\|\||--|\+\+|[-+*/^&|]=?|:|<<?=?|>{1,3}=?/, punctuation: /[()\[\]{};,.]/ };
  })(Prism);
  return prismApex_min$2;
}
var prismApex_minExports = requirePrismApex_min();
const prismApex_min = /* @__PURE__ */ getDefaultExportFromCjs(prismApex_minExports);
const prismApex_min$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: prismApex_min
}, [prismApex_minExports]);
export {
  prismApex_min$1 as p
};
