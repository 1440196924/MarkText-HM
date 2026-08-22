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
var prismNasm$2 = {};
var hasRequiredPrismNasm;
function requirePrismNasm() {
  if (hasRequiredPrismNasm) return prismNasm$2;
  hasRequiredPrismNasm = 1;
  Prism.languages.nasm = {
    "comment": /;.*$/m,
    "string": /(["'`])(?:\\.|(?!\1)[^\\\r\n])*\1/,
    "label": {
      pattern: /(^\s*)[A-Za-z._?$][\w.?$@~#]*:/m,
      lookbehind: true,
      alias: "function"
    },
    "keyword": [
      /\[?BITS (?:16|32|64)\]?/,
      {
        pattern: /(^\s*)section\s*[a-z.]+:?/im,
        lookbehind: true
      },
      /(?:extern|global)[^;\r\n]*/i,
      /(?:CPU|DEFAULT|FLOAT).*$/m
    ],
    "register": {
      pattern: /\b(?:st\d|[xyz]mm\d\d?|[cdt]r\d|r\d\d?[bwd]?|[er]?[abcd]x|[abcd][hl]|[er]?(?:bp|di|si|sp)|[cdefgs]s)\b/i,
      alias: "variable"
    },
    "number": /(?:\b|(?=\$))(?:0[hx](?:\.[\da-f]+|[\da-f]+(?:\.[\da-f]+)?)(?:p[+-]?\d+)?|\d[\da-f]+[hx]|\$\d[\da-f]*|0[oq][0-7]+|[0-7]+[oq]|0[by][01]+|[01]+[by]|0[dt]\d+|(?:\d+(?:\.\d+)?|\.\d+)(?:\.?e[+-]?\d+)?[dt]?)\b/i,
    "operator": /[\[\]*+\-\/%<>=&|$!]/
  };
  return prismNasm$2;
}
var prismNasmExports = requirePrismNasm();
const prismNasm = /* @__PURE__ */ getDefaultExportFromCjs(prismNasmExports);
const prismNasm$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: prismNasm
}, [prismNasmExports]);
export {
  prismNasm$1 as p
};
