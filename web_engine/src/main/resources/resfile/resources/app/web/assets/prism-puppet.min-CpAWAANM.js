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
var prismPuppet_min$2 = {};
var hasRequiredPrismPuppet_min;
function requirePrismPuppet_min() {
  if (hasRequiredPrismPuppet_min) return prismPuppet_min$2;
  hasRequiredPrismPuppet_min = 1;
  !(function(e) {
    e.languages.puppet = { heredoc: [{ pattern: /(@\("([^"\r\n\/):]+)"(?:\/[nrts$uL]*)?\).*(?:\r?\n|\r))(?:.*(?:\r?\n|\r(?!\n)))*?[ \t]*(?:\|[ \t]*)?(?:-[ \t]*)?\2/, lookbehind: true, alias: "string", inside: { punctuation: /(?=\S).*\S(?= *$)/ } }, { pattern: /(@\(([^"\r\n\/):]+)(?:\/[nrts$uL]*)?\).*(?:\r?\n|\r))(?:.*(?:\r?\n|\r(?!\n)))*?[ \t]*(?:\|[ \t]*)?(?:-[ \t]*)?\2/, lookbehind: true, greedy: true, alias: "string", inside: { punctuation: /(?=\S).*\S(?= *$)/ } }, { pattern: /@\("?(?:[^"\r\n\/):]+)"?(?:\/[nrts$uL]*)?\)/, alias: "string", inside: { punctuation: { pattern: /(\().+?(?=\))/, lookbehind: true } } }], "multiline-comment": { pattern: /(^|[^\\])\/\*[\s\S]*?\*\//, lookbehind: true, greedy: true, alias: "comment" }, regex: { pattern: /((?:\bnode\s+|[~=\(\[\{,]\s*|[=+]>\s*|^\s*))\/(?:[^\/\\]|\\[\s\S])+\/(?:[imx]+\b|\B)/, lookbehind: true, greedy: true, inside: { "extended-regex": { pattern: /^\/(?:[^\/\\]|\\[\s\S])+\/[im]*x[im]*$/, inside: { comment: /#.*/ } } } }, comment: { pattern: /(^|[^\\])#.*/, lookbehind: true, greedy: true }, string: { pattern: /(["'])(?:\$\{(?:[^'"}]|(["'])(?:(?!\2)[^\\]|\\[\s\S])*\2)+\}|\$(?!\{)|(?!\1)[^\\$]|\\[\s\S])*\1/, greedy: true, inside: { "double-quoted": { pattern: /^"[\s\S]*"$/, inside: {} } } }, variable: { pattern: /\$(?:::)?\w+(?:::\w+)*/, inside: { punctuation: /::/ } }, "attr-name": /(?:\b\w+|\*)(?=\s*=>)/, function: [{ pattern: /(\.)(?!\d)\w+/, lookbehind: true }, /\b(?:contain|debug|err|fail|include|info|notice|realize|require|tag|warning)\b|\b(?!\d)\w+(?=\()/], number: /\b(?:0x[a-f\d]+|\d+(?:\.\d+)?(?:e-?\d+)?)\b/i, boolean: /\b(?:false|true)\b/, keyword: /\b(?:application|attr|case|class|consumes|default|define|else|elsif|function|if|import|inherits|node|private|produces|type|undef|unless)\b/, datatype: { pattern: /\b(?:Any|Array|Boolean|Callable|Catalogentry|Class|Collection|Data|Default|Enum|Float|Hash|Integer|NotUndef|Numeric|Optional|Pattern|Regexp|Resource|Runtime|Scalar|String|Struct|Tuple|Type|Undef|Variant)\b/, alias: "symbol" }, operator: /=[=~>]?|![=~]?|<(?:<\|?|[=~|-])?|>[>=]?|->?|~>|\|>?>?|[*\/%+?]|\b(?:and|in|or)\b/, punctuation: /[\[\]{}().,;]|:+/ };
    var n = [{ pattern: /(^|[^\\])\$\{(?:[^'"{}]|\{[^}]*\}|(["'])(?:(?!\2)[^\\]|\\[\s\S])*\2)+\}/, lookbehind: true, inside: { "short-variable": { pattern: /(^\$\{)(?!\w+\()(?:::)?\w+(?:::\w+)*/, lookbehind: true, alias: "variable", inside: { punctuation: /::/ } }, delimiter: { pattern: /^\$/, alias: "variable" }, rest: e.languages.puppet } }, { pattern: /(^|[^\\])\$(?:::)?\w+(?:::\w+)*/, lookbehind: true, alias: "variable", inside: { punctuation: /::/ } }];
    e.languages.puppet.heredoc[0].inside.interpolation = n, e.languages.puppet.string.inside["double-quoted"].inside.interpolation = n;
  })(Prism);
  return prismPuppet_min$2;
}
var prismPuppet_minExports = requirePrismPuppet_min();
const prismPuppet_min = /* @__PURE__ */ getDefaultExportFromCjs(prismPuppet_minExports);
const prismPuppet_min$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: prismPuppet_min
}, [prismPuppet_minExports]);
export {
  prismPuppet_min$1 as p
};
