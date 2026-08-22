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
var prismPerl_min$2 = {};
var hasRequiredPrismPerl_min;
function requirePrismPerl_min() {
  if (hasRequiredPrismPerl_min) return prismPerl_min$2;
  hasRequiredPrismPerl_min = 1;
  !(function(e) {
    var n = "(?:\\((?:[^()\\\\]|\\\\[^])*\\)|\\{(?:[^{}\\\\]|\\\\[^])*\\}|\\[(?:[^[\\]\\\\]|\\\\[^])*\\]|<(?:[^<>\\\\]|\\\\[^])*>)";
    e.languages.perl = { comment: [{ pattern: /(^\s*)=\w[\s\S]*?=cut.*/m, lookbehind: true, greedy: true }, { pattern: /(^|[^\\$])#.*/, lookbehind: true, greedy: true }], string: [{ pattern: RegExp("\\b(?:q|qq|qw|qx)(?![a-zA-Z0-9])\\s*(?:" + ["([^a-zA-Z0-9\\s{(\\[<])(?:(?!\\1)[^\\\\]|\\\\[^])*\\1", "([a-zA-Z0-9])(?:(?!\\2)[^\\\\]|\\\\[^])*\\2", n].join("|") + ")"), greedy: true }, { pattern: /("|`)(?:(?!\1)[^\\]|\\[\s\S])*\1/, greedy: true }, { pattern: /'(?:[^'\\\r\n]|\\.)*'/, greedy: true }], regex: [{ pattern: RegExp("\\b(?:m|qr)(?![a-zA-Z0-9])\\s*(?:" + ["([^a-zA-Z0-9\\s{(\\[<])(?:(?!\\1)[^\\\\]|\\\\[^])*\\1", "([a-zA-Z0-9])(?:(?!\\2)[^\\\\]|\\\\[^])*\\2", n].join("|") + ")[msixpodualngc]*"), greedy: true }, { pattern: RegExp("(^|[^-])\\b(?:s|tr|y)(?![a-zA-Z0-9])\\s*(?:" + ["([^a-zA-Z0-9\\s{(\\[<])(?:(?!\\2)[^\\\\]|\\\\[^])*\\2(?:(?!\\2)[^\\\\]|\\\\[^])*\\2", "([a-zA-Z0-9])(?:(?!\\3)[^\\\\]|\\\\[^])*\\3(?:(?!\\3)[^\\\\]|\\\\[^])*\\3", n + "\\s*" + n].join("|") + ")[msixpodualngcer]*"), lookbehind: true, greedy: true }, { pattern: /\/(?:[^\/\\\r\n]|\\.)*\/[msixpodualngc]*(?=\s*(?:$|[\r\n,.;})&|\-+*~<>!?^]|(?:and|cmp|eq|ge|gt|le|lt|ne|not|or|x|xor)\b))/, greedy: true }], variable: [/[&*$@%]\{\^[A-Z]+\}/, /[&*$@%]\^[A-Z_]/, /[&*$@%]#?(?=\{)/, /[&*$@%]#?(?:(?:::)*'?(?!\d)[\w$]+(?![\w$]))+(?:::)*/, /[&*$@%]\d+/, /(?!%=)[$@%][!"#$%&'()*+,\-.\/:;<=>?@[\\\]^_`{|}~]/], filehandle: { pattern: /<(?![<=])\S*?>|\b_\b/, alias: "symbol" }, "v-string": { pattern: /v\d+(?:\.\d+)*|\d+(?:\.\d+){2,}/, alias: "string" }, function: { pattern: /(\bsub[ \t]+)\w+/, lookbehind: true }, keyword: /\b(?:any|break|continue|default|delete|die|do|else|elsif|eval|for|foreach|given|goto|if|last|local|my|next|our|package|print|redo|require|return|say|state|sub|switch|undef|unless|until|use|when|while)\b/, number: /\b(?:0x[\dA-Fa-f](?:_?[\dA-Fa-f])*|0b[01](?:_?[01])*|(?:(?:\d(?:_?\d)*)?\.)?\d(?:_?\d)*(?:[Ee][+-]?\d+)?)\b/, operator: /-[rwxoRWXOezsfdlpSbctugkTBMAC]\b|\+[+=]?|-[-=>]?|\*\*?=?|\/\/?=?|=[=~>]?|~[~=]?|\|\|?=?|&&?=?|<(?:=>?|<=?)?|>>?=?|![~=]?|[%^]=?|\.(?:=|\.\.?)?|[\\?]|\bx(?:=|\b)|\b(?:and|cmp|eq|ge|gt|le|lt|ne|not|or|xor)\b/, punctuation: /[{}[\];(),:]/ };
  })(Prism);
  return prismPerl_min$2;
}
var prismPerl_minExports = requirePrismPerl_min();
const prismPerl_min = /* @__PURE__ */ getDefaultExportFromCjs(prismPerl_minExports);
const prismPerl_min$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: prismPerl_min
}, [prismPerl_minExports]);
export {
  prismPerl_min$1 as p
};
