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
var prismChaiscript$2 = {};
var hasRequiredPrismChaiscript;
function requirePrismChaiscript() {
  if (hasRequiredPrismChaiscript) return prismChaiscript$2;
  hasRequiredPrismChaiscript = 1;
  Prism.languages.chaiscript = Prism.languages.extend("clike", {
    "string": {
      pattern: /(^|[^\\])'(?:[^'\\]|\\[\s\S])*'/,
      lookbehind: true,
      greedy: true
    },
    "class-name": [
      {
        // e.g. class Rectangle { ... }
        pattern: /(\bclass\s+)\w+/,
        lookbehind: true
      },
      {
        // e.g. attr Rectangle::height, def Rectangle::area() { ... }
        pattern: /(\b(?:attr|def)\s+)\w+(?=\s*::)/,
        lookbehind: true
      }
    ],
    "keyword": /\b(?:attr|auto|break|case|catch|class|continue|def|default|else|finally|for|fun|global|if|return|switch|this|try|var|while)\b/,
    "number": [
      Prism.languages.cpp.number,
      /\b(?:Infinity|NaN)\b/
    ],
    "operator": />>=?|<<=?|\|\||&&|:[:=]?|--|\+\+|[=!<>+\-*/%|&^]=?|[?~]|`[^`\r\n]{1,4}`/
  });
  Prism.languages.insertBefore("chaiscript", "operator", {
    "parameter-type": {
      // e.g. def foo(int x, Vector y) {...}
      pattern: /([,(]\s*)\w+(?=\s+\w)/,
      lookbehind: true,
      alias: "class-name"
    }
  });
  Prism.languages.insertBefore("chaiscript", "string", {
    "string-interpolation": {
      pattern: /(^|[^\\])"(?:[^"$\\]|\\[\s\S]|\$(?!\{)|\$\{(?:[^{}]|\{(?:[^{}]|\{[^{}]*\})*\})*\})*"/,
      lookbehind: true,
      greedy: true,
      inside: {
        "interpolation": {
          pattern: /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^{}]*\})*\})*\}/,
          lookbehind: true,
          inside: {
            "interpolation-expression": {
              pattern: /(^\$\{)[\s\S]+(?=\}$)/,
              lookbehind: true,
              inside: Prism.languages.chaiscript
            },
            "interpolation-punctuation": {
              pattern: /^\$\{|\}$/,
              alias: "punctuation"
            }
          }
        },
        "string": /[\s\S]+/
      }
    }
  });
  return prismChaiscript$2;
}
var prismChaiscriptExports = requirePrismChaiscript();
const prismChaiscript = /* @__PURE__ */ getDefaultExportFromCjs(prismChaiscriptExports);
const prismChaiscript$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: prismChaiscript
}, [prismChaiscriptExports]);
export {
  prismChaiscript$1 as p
};
