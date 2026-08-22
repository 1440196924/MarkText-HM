import { g as getDefaultExportFromCjs } from "./index-D8xk56-E.js";
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
var prismTyposcript_min$2 = {};
var hasRequiredPrismTyposcript_min;
function requirePrismTyposcript_min() {
  if (hasRequiredPrismTyposcript_min) return prismTyposcript_min$2;
  hasRequiredPrismTyposcript_min = 1;
  !(function(E) {
    var n = /\b(?:ACT|ACTIFSUB|CARRAY|CASE|CLEARGIF|COA|COA_INT|CONSTANTS|CONTENT|CUR|EDITPANEL|EFFECT|EXT|FILE|FLUIDTEMPLATE|FORM|FRAME|FRAMESET|GIFBUILDER|GMENU|GMENU_FOLDOUT|GMENU_LAYERS|GP|HMENU|HRULER|HTML|IENV|IFSUB|IMAGE|IMGMENU|IMGMENUITEM|IMGTEXT|IMG_RESOURCE|INCLUDE_TYPOSCRIPT|JSMENU|JSMENUITEM|LLL|LOAD_REGISTER|NO|PAGE|RECORDS|RESTORE_REGISTER|TEMPLATE|TEXT|TMENU|TMENUITEM|TMENU_LAYERS|USER|USER_INT|_GIFBUILDER|global|globalString|globalVar)\b/;
    E.languages.typoscript = { comment: [{ pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/, lookbehind: true }, { pattern: /(^|[^\\:= \t]|(?:^|[^= \t])[ \t]+)\/\/.*/, lookbehind: true, greedy: true }, { pattern: /(^|[^"'])#.*/, lookbehind: true, greedy: true }], function: [{ pattern: /<INCLUDE_TYPOSCRIPT:\s*source\s*=\s*(?:"[^"\r\n]*"|'[^'\r\n]*')\s*>/, inside: { string: { pattern: /"[^"\r\n]*"|'[^'\r\n]*'/, inside: { keyword: n } }, keyword: { pattern: /INCLUDE_TYPOSCRIPT/ } } }, { pattern: /@import\s*(?:"[^"\r\n]*"|'[^'\r\n]*')/, inside: { string: /"[^"\r\n]*"|'[^'\r\n]*'/ } }], string: { pattern: /^([^=]*=[< ]?)(?:(?!\]\n).)*/, lookbehind: true, inside: { function: /\{\$.*\}/, keyword: n, number: /^\d+$/, punctuation: /[,|:]/ } }, keyword: n, number: { pattern: /\b\d+\s*[.{=]/, inside: { operator: /[.{=]/ } }, tag: { pattern: /\.?[-\w\\]+\.?/, inside: { punctuation: /\./ } }, punctuation: /[{}[\];(),.:|]/, operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/ }, E.languages.tsconfig = E.languages.typoscript;
  })(Prism);
  return prismTyposcript_min$2;
}
var prismTyposcript_minExports = requirePrismTyposcript_min();
const prismTyposcript_min = /* @__PURE__ */ getDefaultExportFromCjs(prismTyposcript_minExports);
const prismTyposcript_min$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: prismTyposcript_min
}, [prismTyposcript_minExports]);
export {
  prismTyposcript_min$1 as p
};
