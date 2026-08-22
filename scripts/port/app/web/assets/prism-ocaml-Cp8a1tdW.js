import { g as getDefaultExportFromCjs } from "./index-Ccykuj0R.js";
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
var prismOcaml$2 = {};
var hasRequiredPrismOcaml;
function requirePrismOcaml() {
  if (hasRequiredPrismOcaml) return prismOcaml$2;
  hasRequiredPrismOcaml = 1;
  Prism.languages.ocaml = {
    "comment": {
      pattern: /\(\*[\s\S]*?\*\)/,
      greedy: true
    },
    "char": {
      pattern: /'(?:[^\\\r\n']|\\(?:.|[ox]?[0-9a-f]{1,3}))'/i,
      greedy: true
    },
    "string": [
      {
        pattern: /"(?:\\(?:[\s\S]|\r\n)|[^\\\r\n"])*"/,
        greedy: true
      },
      {
        pattern: /\{([a-z_]*)\|[\s\S]*?\|\1\}/,
        greedy: true
      }
    ],
    "number": [
      // binary and octal
      /\b(?:0b[01][01_]*|0o[0-7][0-7_]*)\b/i,
      // hexadecimal
      /\b0x[a-f0-9][a-f0-9_]*(?:\.[a-f0-9_]*)?(?:p[+-]?\d[\d_]*)?(?!\w)/i,
      // decimal
      /\b\d[\d_]*(?:\.[\d_]*)?(?:e[+-]?\d[\d_]*)?(?!\w)/i
    ],
    "directive": {
      pattern: /\B#\w+/,
      alias: "property"
    },
    "label": {
      pattern: /\B~\w+/,
      alias: "property"
    },
    "type-variable": {
      pattern: /\B'\w+/,
      alias: "function"
    },
    "variant": {
      pattern: /`\w+/,
      alias: "symbol"
    },
    // For the list of keywords and operators,
    // see: http://caml.inria.fr/pub/docs/manual-ocaml/lex.html#sec84
    "keyword": /\b(?:as|assert|begin|class|constraint|do|done|downto|else|end|exception|external|for|fun|function|functor|if|in|include|inherit|initializer|lazy|let|match|method|module|mutable|new|nonrec|object|of|open|private|rec|sig|struct|then|to|try|type|val|value|virtual|when|where|while|with)\b/,
    "boolean": /\b(?:false|true)\b/,
    "operator-like-punctuation": {
      pattern: /\[[<>|]|[>|]\]|\{<|>\}/,
      alias: "punctuation"
    },
    // Custom operators are allowed
    "operator": /\.[.~]|:[=>]|[=<>@^|&+\-*\/$%!?~][!$%&*+\-.\/:<=>?@^|~]*|\b(?:and|asr|land|lor|lsl|lsr|lxor|mod|or)\b/,
    "punctuation": /;;|::|[(){}\[\].,:;#]|\b_\b/
  };
  return prismOcaml$2;
}
var prismOcamlExports = requirePrismOcaml();
const prismOcaml = /* @__PURE__ */ getDefaultExportFromCjs(prismOcamlExports);
const prismOcaml$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: prismOcaml
}, [prismOcamlExports]);
export {
  prismOcaml$1 as p
};
