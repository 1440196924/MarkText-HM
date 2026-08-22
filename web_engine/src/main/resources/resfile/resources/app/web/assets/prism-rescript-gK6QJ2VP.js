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
var prismRescript$2 = {};
var hasRequiredPrismRescript;
function requirePrismRescript() {
  if (hasRequiredPrismRescript) return prismRescript$2;
  hasRequiredPrismRescript = 1;
  Prism.languages.rescript = {
    "comment": {
      pattern: /\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,
      greedy: true
    },
    "char": { pattern: /'(?:[^\r\n\\]|\\(?:.|\w+))'/, greedy: true },
    "string": {
      pattern: /"(?:\\(?:\r\n|[\s\S])|[^\\\r\n"])*"/,
      greedy: true
    },
    "class-name": /\b[A-Z]\w*|@[a-z.]*|#[A-Za-z]\w*|#\d/,
    "function": {
      pattern: /[a-zA-Z]\w*(?=\()|(\.)[a-z]\w*/,
      lookbehind: true
    },
    "number": /(?:\b0x(?:[\da-f]+(?:\.[\da-f]*)?|\.[\da-f]+)(?:p[+-]?\d+)?|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?)[ful]{0,4}/i,
    "boolean": /\b(?:false|true)\b/,
    "attr-value": /[A-Za-z]\w*(?==)/,
    "constant": {
      pattern: /(\btype\s+)[a-z]\w*/,
      lookbehind: true
    },
    "tag": {
      pattern: /(<)[a-z]\w*|(?:<\/)[a-z]\w*/,
      lookbehind: true,
      inside: {
        "operator": /<|>|\//
      }
    },
    "keyword": /\b(?:and|as|assert|begin|bool|class|constraint|do|done|downto|else|end|exception|external|float|for|fun|function|if|in|include|inherit|initializer|int|lazy|let|method|module|mutable|new|nonrec|object|of|open|or|private|rec|string|switch|then|to|try|type|when|while|with)\b/,
    "operator": /\.{3}|:[:=]?|\|>|->|=(?:==?|>)?|<=?|>=?|[|^?'#!~`]|[+\-*\/]\.?|\b(?:asr|land|lor|lsl|lsr|lxor|mod)\b/,
    "punctuation": /[(){}[\],;.]/
  };
  Prism.languages.insertBefore("rescript", "string", {
    "template-string": {
      pattern: /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,
      greedy: true,
      inside: {
        "template-punctuation": {
          pattern: /^`|`$/,
          alias: "string"
        },
        "interpolation": {
          pattern: /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,
          lookbehind: true,
          inside: {
            "interpolation-punctuation": {
              pattern: /^\$\{|\}$/,
              alias: "tag"
            },
            rest: Prism.languages.rescript
          }
        },
        "string": /[\s\S]+/
      }
    }
  });
  Prism.languages.res = Prism.languages.rescript;
  return prismRescript$2;
}
var prismRescriptExports = requirePrismRescript();
const prismRescript = /* @__PURE__ */ getDefaultExportFromCjs(prismRescriptExports);
const prismRescript$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: prismRescript
}, [prismRescriptExports]);
export {
  prismRescript$1 as p
};
