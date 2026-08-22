import { g as getDefaultExportFromCjs } from "./index-Nx_AZTXs.js";
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
var prismV_min$2 = {};
var hasRequiredPrismV_min;
function requirePrismV_min() {
  if (hasRequiredPrismV_min) return prismV_min$2;
  hasRequiredPrismV_min = 1;
  !(function(e) {
    var n = { pattern: /[\s\S]+/, inside: null };
    e.languages.v = e.languages.extend("clike", { string: { pattern: /r?(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/, alias: "quoted-string", greedy: true, inside: { interpolation: { pattern: /((?:^|[^\\])(?:\\{2})*)\$(?:\{[^{}]*\}|\w+(?:\.\w+(?:\([^\(\)]*\))?|\[[^\[\]]+\])*)/, lookbehind: true, inside: { "interpolation-variable": { pattern: /^\$\w[\s\S]*$/, alias: "variable" }, "interpolation-punctuation": { pattern: /^\$\{|\}$/, alias: "punctuation" }, "interpolation-expression": n } } } }, "class-name": { pattern: /(\b(?:enum|interface|struct|type)\s+)(?:C\.)?\w+/, lookbehind: true }, keyword: /(?:\b(?:__global|as|asm|assert|atomic|break|chan|const|continue|defer|else|embed|enum|fn|for|go(?:to)?|if|import|in|interface|is|lock|match|module|mut|none|or|pub|return|rlock|select|shared|sizeof|static|struct|type(?:of)?|union|unsafe)|\$(?:else|for|if)|#(?:flag|include))\b/, number: /\b(?:0x[a-f\d]+(?:_[a-f\d]+)*|0b[01]+(?:_[01]+)*|0o[0-7]+(?:_[0-7]+)*|\d+(?:_\d+)*(?:\.\d+(?:_\d+)*)?)\b/i, operator: /~|\?|[*\/%^!=]=?|\+[=+]?|-[=-]?|\|[=|]?|&(?:=|&|\^=?)?|>(?:>=?|=)?|<(?:<=?|=|-)?|:=|\.\.\.?/, builtin: /\b(?:any(?:_float|_int)?|bool|byte(?:ptr)?|charptr|f(?:32|64)|i(?:8|16|64|128|nt)|rune|size_t|string|u(?:16|32|64|128)|voidptr)\b/ }), n.inside = e.languages.v, e.languages.insertBefore("v", "string", { char: { pattern: /`(?:\\`|\\?[^`]{1,2})`/, alias: "rune" } }), e.languages.insertBefore("v", "operator", { attribute: { pattern: /(^[\t ]*)\[(?:deprecated|direct_array_access|flag|inline|live|ref_only|typedef|unsafe_fn|windows_stdcall)\]/m, lookbehind: true, alias: "annotation", inside: { punctuation: /[\[\]]/, keyword: /\w+/ } }, generic: { pattern: /<\w+>(?=\s*[\)\{])/, inside: { punctuation: /[<>]/, "class-name": /\w+/ } } }), e.languages.insertBefore("v", "function", { "generic-function": { pattern: /\b\w+\s*<\w+>(?=\()/, inside: { function: /^\w+/, generic: { pattern: /<\w+>/, inside: e.languages.v.generic.inside } } } });
  })(Prism);
  return prismV_min$2;
}
var prismV_minExports = requirePrismV_min();
const prismV_min = /* @__PURE__ */ getDefaultExportFromCjs(prismV_minExports);
const prismV_min$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: prismV_min
}, [prismV_minExports]);
export {
  prismV_min$1 as p
};
