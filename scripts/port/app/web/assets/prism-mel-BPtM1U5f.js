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
var prismMel$2 = {};
var hasRequiredPrismMel;
function requirePrismMel() {
  if (hasRequiredPrismMel) return prismMel$2;
  hasRequiredPrismMel = 1;
  Prism.languages.mel = {
    "comment": {
      pattern: /\/\/.*|\/\*[\s\S]*?\*\//,
      greedy: true
    },
    "code": {
      pattern: /`(?:\\.|[^\\`])*`/,
      greedy: true,
      alias: "italic",
      inside: {
        "delimiter": {
          pattern: /^`|`$/,
          alias: "punctuation"
        },
        "statement": {
          pattern: /[\s\S]+/,
          inside: null
          // see below
        }
      }
    },
    "string": {
      pattern: /"(?:\\.|[^\\"\r\n])*"/,
      greedy: true
    },
    "variable": /\$\w+/,
    "number": /\b0x[\da-fA-F]+\b|\b\d+(?:\.\d*)?|\B\.\d+/,
    "flag": {
      pattern: /-[^\d\W]\w*/,
      alias: "operator"
    },
    "keyword": /\b(?:break|case|continue|default|do|else|float|for|global|if|in|int|matrix|proc|return|string|switch|vector|while)\b/,
    "function": {
      pattern: /((?:^|[{;])[ \t]*)[a-z_]\w*\b(?!\s*(?:\.(?!\.)|[[{=]))|\b[a-z_]\w*(?=[ \t]*\()/im,
      lookbehind: true,
      greedy: true
    },
    "tensor-punctuation": {
      pattern: /<<|>>/,
      alias: "punctuation"
    },
    "operator": /\+[+=]?|-[-=]?|&&|\|\||[<>]=?|[*\/!=]=?|[%^]/,
    "punctuation": /[.,:;?\[\](){}]/
  };
  Prism.languages.mel["code"].inside["statement"].inside = Prism.languages.mel;
  return prismMel$2;
}
var prismMelExports = requirePrismMel();
const prismMel = /* @__PURE__ */ getDefaultExportFromCjs(prismMelExports);
const prismMel$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: prismMel
}, [prismMelExports]);
export {
  prismMel$1 as p
};
