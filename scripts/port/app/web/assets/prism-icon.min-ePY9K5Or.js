import { g as getDefaultExportFromCjs } from "./index-CsLNvl25.js";
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
var prismIcon_min$2 = {};
var hasRequiredPrismIcon_min;
function requirePrismIcon_min() {
  if (hasRequiredPrismIcon_min) return prismIcon_min$2;
  hasRequiredPrismIcon_min = 1;
  Prism.languages.icon = { comment: /#.*/, string: { pattern: /(["'])(?:(?!\1)[^\\\r\n_]|\\.|_(?!\1)(?:\r\n|[\s\S]))*\1/, greedy: true }, number: /\b(?:\d+r[a-z\d]+|\d+(?:\.\d+)?(?:e[+-]?\d+)?)\b|\.\d+\b/i, "builtin-keyword": { pattern: /&(?:allocated|ascii|clock|collections|cset|current|date|dateline|digits|dump|e|error(?:number|text|value)?|errout|fail|features|file|host|input|lcase|letters|level|line|main|null|output|phi|pi|pos|progname|random|regions|source|storage|subject|time|trace|ucase|version)\b/, alias: "variable" }, directive: { pattern: /\$\w+/, alias: "builtin" }, keyword: /\b(?:break|by|case|create|default|do|else|end|every|fail|global|if|initial|invocable|link|local|next|not|of|procedure|record|repeat|return|static|suspend|then|to|until|while)\b/, function: /\b(?!\d)\w+(?=\s*[({]|\s*!\s*\[)/, operator: /[+-]:(?!=)|(?:[\/?@^%&]|\+\+?|--?|==?=?|~==?=?|\*\*?|\|\|\|?|<(?:->?|<?=?)|>>?=?)(?::=)?|:(?:=:?)?|[!.\\|~]/, punctuation: /[\[\](){},;]/ };
  return prismIcon_min$2;
}
var prismIcon_minExports = requirePrismIcon_min();
const prismIcon_min = /* @__PURE__ */ getDefaultExportFromCjs(prismIcon_minExports);
const prismIcon_min$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: prismIcon_min
}, [prismIcon_minExports]);
export {
  prismIcon_min$1 as p
};
