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
var prismMagma$2 = {};
var hasRequiredPrismMagma;
function requirePrismMagma() {
  if (hasRequiredPrismMagma) return prismMagma$2;
  hasRequiredPrismMagma = 1;
  Prism.languages.magma = {
    "output": {
      pattern: /^(>.*(?:\r(?:\n|(?!\n))|\n))(?!>)(?:.+|(?:\r(?:\n|(?!\n))|\n)(?!>).*)(?:(?:\r(?:\n|(?!\n))|\n)(?!>).*)*/m,
      lookbehind: true,
      greedy: true
    },
    "comment": {
      pattern: /\/\/.*|\/\*[\s\S]*?\*\//,
      greedy: true
    },
    "string": {
      pattern: /(^|[^\\"])"(?:[^\r\n\\"]|\\.)*"/,
      lookbehind: true,
      greedy: true
    },
    // http://magma.maths.usyd.edu.au/magma/handbook/text/82
    "keyword": /\b(?:_|adj|and|assert|assert2|assert3|assigned|break|by|case|cat|catch|clear|cmpeq|cmpne|continue|declare|default|delete|diff|div|do|elif|else|end|eq|error|eval|exists|exit|for|forall|forward|fprintf|freeze|function|ge|gt|if|iload|import|in|intrinsic|is|join|le|load|local|lt|meet|mod|ne|not|notadj|notin|notsubset|or|print|printf|procedure|quit|random|read|readi|repeat|require|requirege|requirerange|restore|return|save|sdiff|select|subset|then|time|to|try|until|vprint|vprintf|vtime|when|where|while|xor)\b/,
    "boolean": /\b(?:false|true)\b/,
    "generator": {
      pattern: /\b[a-z_]\w*(?=\s*<)/i,
      alias: "class-name"
    },
    "function": /\b[a-z_]\w*(?=\s*\()/i,
    "number": {
      pattern: /(^|[^\w.]|\.\.)(?:\d+(?:\.\d*)?|\.\d+)(?:[eE][+-]?\d+)?(?:_[a-z]?)?(?=$|[^\w.]|\.\.)/,
      lookbehind: true
    },
    "operator": /->|[-+*/^~!|#=]|:=|\.\./,
    "punctuation": /[()[\]{}<>,;.:]/
  };
  return prismMagma$2;
}
var prismMagmaExports = requirePrismMagma();
const prismMagma = /* @__PURE__ */ getDefaultExportFromCjs(prismMagmaExports);
const prismMagma$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: prismMagma
}, [prismMagmaExports]);
export {
  prismMagma$1 as p
};
