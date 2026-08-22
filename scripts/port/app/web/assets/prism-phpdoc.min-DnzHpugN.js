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
var prismPhpdoc_min$2 = {};
var hasRequiredPrismPhpdoc_min;
function requirePrismPhpdoc_min() {
  if (hasRequiredPrismPhpdoc_min) return prismPhpdoc_min$2;
  hasRequiredPrismPhpdoc_min = 1;
  !(function(a) {
    var e = "(?:\\b[a-zA-Z]\\w*|[|\\\\[\\]])+";
    a.languages.phpdoc = a.languages.extend("javadoclike", { parameter: { pattern: RegExp("(@(?:global|param|property(?:-read|-write)?|var)\\s+(?:" + e + "\\s+)?)\\$\\w+"), lookbehind: true } }), a.languages.insertBefore("phpdoc", "keyword", { "class-name": [{ pattern: RegExp("(@(?:global|package|param|property(?:-read|-write)?|return|subpackage|throws|var)\\s+)" + e), lookbehind: true, inside: { keyword: /\b(?:array|bool|boolean|callback|double|false|float|int|integer|mixed|null|object|resource|self|string|true|void)\b/, punctuation: /[|\\[\]()]/ } }] }), a.languages.javadoclike.addSupport("php", a.languages.phpdoc);
  })(Prism);
  return prismPhpdoc_min$2;
}
var prismPhpdoc_minExports = requirePrismPhpdoc_min();
const prismPhpdoc_min = /* @__PURE__ */ getDefaultExportFromCjs(prismPhpdoc_minExports);
const prismPhpdoc_min$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: prismPhpdoc_min
}, [prismPhpdoc_minExports]);
export {
  prismPhpdoc_min$1 as p
};
