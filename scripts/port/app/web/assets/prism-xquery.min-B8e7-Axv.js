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
var prismXquery_min$2 = {};
var hasRequiredPrismXquery_min;
function requirePrismXquery_min() {
  if (hasRequiredPrismXquery_min) return prismXquery_min$2;
  hasRequiredPrismXquery_min = 1;
  !(function(e) {
    e.languages.xquery = e.languages.extend("markup", { "xquery-comment": { pattern: /\(:[\s\S]*?:\)/, greedy: true, alias: "comment" }, string: { pattern: /(["'])(?:\1\1|(?!\1)[\s\S])*\1/, greedy: true }, extension: { pattern: /\(#.+?#\)/, alias: "symbol" }, variable: /\$[-\w:]+/, axis: { pattern: /(^|[^-])(?:ancestor(?:-or-self)?|attribute|child|descendant(?:-or-self)?|following(?:-sibling)?|parent|preceding(?:-sibling)?|self)(?=::)/, lookbehind: true, alias: "operator" }, "keyword-operator": { pattern: /(^|[^:-])\b(?:and|castable as|div|eq|except|ge|gt|idiv|instance of|intersect|is|le|lt|mod|ne|or|union)\b(?=$|[^:-])/, lookbehind: true, alias: "operator" }, keyword: { pattern: /(^|[^:-])\b(?:as|ascending|at|base-uri|boundary-space|case|cast as|collation|construction|copy-namespaces|declare|default|descending|else|empty (?:greatest|least)|encoding|every|external|for|function|if|import|in|inherit|lax|let|map|module|namespace|no-inherit|no-preserve|option|order(?: by|ed|ing)?|preserve|return|satisfies|schema|some|stable|strict|strip|then|to|treat as|typeswitch|unordered|validate|variable|version|where|xquery)\b(?=$|[^:-])/, lookbehind: true }, function: /[\w-]+(?::[\w-]+)*(?=\s*\()/, "xquery-element": { pattern: /(element\s+)[\w-]+(?::[\w-]+)*/, lookbehind: true, alias: "tag" }, "xquery-attribute": { pattern: /(attribute\s+)[\w-]+(?::[\w-]+)*/, lookbehind: true, alias: "attr-name" }, builtin: { pattern: /(^|[^:-])\b(?:attribute|comment|document|element|processing-instruction|text|xs:(?:ENTITIES|ENTITY|ID|IDREFS?|NCName|NMTOKENS?|NOTATION|Name|QName|anyAtomicType|anyType|anyURI|base64Binary|boolean|byte|date|dateTime|dayTimeDuration|decimal|double|duration|float|gDay|gMonth|gMonthDay|gYear|gYearMonth|hexBinary|int|integer|language|long|negativeInteger|nonNegativeInteger|nonPositiveInteger|normalizedString|positiveInteger|short|string|time|token|unsigned(?:Byte|Int|Long|Short)|untyped(?:Atomic)?|yearMonthDuration))\b(?=$|[^:-])/, lookbehind: true }, number: /\b\d+(?:\.\d+)?(?:E[+-]?\d+)?/, operator: [/[+*=?|@]|\.\.?|:=|!=|<[=<]?|>[=>]?/, { pattern: /(\s)-(?=\s)/, lookbehind: true }], punctuation: /[[\](){},;:/]/ }), e.languages.xquery.tag.pattern = /<\/?(?!\d)[^\s>\/=$<%]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\[\s\S]|\{(?!\{)(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])+\}|(?!\1)[^\\])*\1|[^\s'">=]+))?)*\s*\/?>/, e.languages.xquery.tag.inside["attr-value"].pattern = /=(?:("|')(?:\\[\s\S]|\{(?!\{)(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])+\}|(?!\1)[^\\])*\1|[^\s'">=]+)/, e.languages.xquery.tag.inside["attr-value"].inside.punctuation = /^="|"$/, e.languages.xquery.tag.inside["attr-value"].inside.expression = { pattern: /\{(?!\{)(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])+\}/, inside: e.languages.xquery, alias: "language-xquery" };
    var t = function(e2) {
      return "string" == typeof e2 ? e2 : "string" == typeof e2.content ? e2.content : e2.content.map(t).join("");
    }, n = function(a) {
      for (var o = [], i = 0; i < a.length; i++) {
        var r = a[i], s = false;
        if ("string" != typeof r && ("tag" === r.type && r.content[0] && "tag" === r.content[0].type ? "</" === r.content[0].content[0].content ? o.length > 0 && o[o.length - 1].tagName === t(r.content[0].content[1]) && o.pop() : "/>" === r.content[r.content.length - 1].content || o.push({ tagName: t(r.content[0].content[1]), openedBraces: 0 }) : !(o.length > 0 && "punctuation" === r.type && "{" === r.content) || a[i + 1] && "punctuation" === a[i + 1].type && "{" === a[i + 1].content || a[i - 1] && "plain-text" === a[i - 1].type && "{" === a[i - 1].content ? o.length > 0 && o[o.length - 1].openedBraces > 0 && "punctuation" === r.type && "}" === r.content ? o[o.length - 1].openedBraces-- : "comment" !== r.type && (s = true) : o[o.length - 1].openedBraces++), (s || "string" == typeof r) && o.length > 0 && 0 === o[o.length - 1].openedBraces) {
          var l = t(r);
          i < a.length - 1 && ("string" == typeof a[i + 1] || "plain-text" === a[i + 1].type) && (l += t(a[i + 1]), a.splice(i + 1, 1)), i > 0 && ("string" == typeof a[i - 1] || "plain-text" === a[i - 1].type) && (l = t(a[i - 1]) + l, a.splice(i - 1, 1), i--), /^\s+$/.test(l) ? a[i] = l : a[i] = new e.Token("plain-text", l, null, l);
        }
        r.content && "string" != typeof r.content && n(r.content);
      }
    };
    e.hooks.add("after-tokenize", (function(e2) {
      "xquery" === e2.language && n(e2.tokens);
    }));
  })(Prism);
  return prismXquery_min$2;
}
var prismXquery_minExports = requirePrismXquery_min();
const prismXquery_min = /* @__PURE__ */ getDefaultExportFromCjs(prismXquery_minExports);
const prismXquery_min$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: prismXquery_min
}, [prismXquery_minExports]);
export {
  prismXquery_min$1 as p
};
