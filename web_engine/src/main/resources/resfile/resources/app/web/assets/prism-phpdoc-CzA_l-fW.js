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
var prismPhpdoc$2 = {};
var hasRequiredPrismPhpdoc;
function requirePrismPhpdoc() {
  if (hasRequiredPrismPhpdoc) return prismPhpdoc$2;
  hasRequiredPrismPhpdoc = 1;
  (function(Prism2) {
    var typeExpression = /(?:\b[a-zA-Z]\w*|[|\\[\]])+/.source;
    Prism2.languages.phpdoc = Prism2.languages.extend("javadoclike", {
      "parameter": {
        pattern: RegExp("(@(?:global|param|property(?:-read|-write)?|var)\\s+(?:" + typeExpression + "\\s+)?)\\$\\w+"),
        lookbehind: true
      }
    });
    Prism2.languages.insertBefore("phpdoc", "keyword", {
      "class-name": [
        {
          pattern: RegExp("(@(?:global|package|param|property(?:-read|-write)?|return|subpackage|throws|var)\\s+)" + typeExpression),
          lookbehind: true,
          inside: {
            "keyword": /\b(?:array|bool|boolean|callback|double|false|float|int|integer|mixed|null|object|resource|self|string|true|void)\b/,
            "punctuation": /[|\\[\]()]/
          }
        }
      ]
    });
    Prism2.languages.javadoclike.addSupport("php", Prism2.languages.phpdoc);
  })(Prism);
  return prismPhpdoc$2;
}
var prismPhpdocExports = requirePrismPhpdoc();
const prismPhpdoc = /* @__PURE__ */ getDefaultExportFromCjs(prismPhpdocExports);
const prismPhpdoc$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: prismPhpdoc
}, [prismPhpdocExports]);
export {
  prismPhpdoc$1 as p
};
