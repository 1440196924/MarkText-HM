import { a as requireCodemirror, g as getDefaultExportFromCjs } from "./index-Ccykuj0R.js";
import { r as requireSimple } from "./simple-BBnBDoqE.js";
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
var factor$2 = { exports: {} };
var hasRequiredFactor;
function requireFactor() {
  if (hasRequiredFactor) return factor$2.exports;
  hasRequiredFactor = 1;
  (function(module, exports) {
    (function(mod) {
      mod(requireCodemirror(), requireSimple());
    })(function(CodeMirror2) {
      CodeMirror2.defineSimpleMode("factor", {
        // The start state contains the rules that are initially used
        start: [
          // comments
          { regex: /#?!.*/, token: "comment" },
          // strings """, multiline --> state
          { regex: /"""/, token: "string", next: "string3" },
          { regex: /(STRING:)(\s)/, token: ["keyword", null], next: "string2" },
          { regex: /\S*?"/, token: "string", next: "string" },
          // numbers: dec, hex, unicode, bin, fractional, complex
          { regex: /(?:0x[\d,a-f]+)|(?:0o[0-7]+)|(?:0b[0,1]+)|(?:\-?\d+.?\d*)(?=\s)/, token: "number" },
          //{regex: /[+-]?/} //fractional
          // definition: defining word, defined word, etc
          { regex: /((?:GENERIC)|\:?\:)(\s+)(\S+)(\s+)(\()/, token: ["keyword", null, "def", null, "bracket"], next: "stack" },
          // method definition: defining word, type, defined word, etc
          { regex: /(M\:)(\s+)(\S+)(\s+)(\S+)/, token: ["keyword", null, "def", null, "tag"] },
          // vocabulary using --> state
          { regex: /USING\:/, token: "keyword", next: "vocabulary" },
          // vocabulary definition/use
          { regex: /(USE\:|IN\:)(\s+)(\S+)(?=\s|$)/, token: ["keyword", null, "tag"] },
          // definition: a defining word, defined word
          { regex: /(\S+\:)(\s+)(\S+)(?=\s|$)/, token: ["keyword", null, "def"] },
          // "keywords", incl. ; t f . [ ] { } defining words
          { regex: /(?:;|\\|t|f|if|loop|while|until|do|PRIVATE>|<PRIVATE|\.|\S*\[|\]|\S*\{|\})(?=\s|$)/, token: "keyword" },
          // <constructors> and the like
          { regex: /\S+[\)>\.\*\?]+(?=\s|$)/, token: "builtin" },
          { regex: /[\)><]+\S+(?=\s|$)/, token: "builtin" },
          // operators
          { regex: /(?:[\+\-\=\/\*<>])(?=\s|$)/, token: "keyword" },
          // any id (?)
          { regex: /\S+/, token: "variable" },
          { regex: /\s+|./, token: null }
        ],
        vocabulary: [
          { regex: /;/, token: "keyword", next: "start" },
          { regex: /\S+/, token: "tag" },
          { regex: /\s+|./, token: null }
        ],
        string: [
          { regex: /(?:[^\\]|\\.)*?"/, token: "string", next: "start" },
          { regex: /.*/, token: "string" }
        ],
        string2: [
          { regex: /^;/, token: "keyword", next: "start" },
          { regex: /.*/, token: "string" }
        ],
        string3: [
          { regex: /(?:[^\\]|\\.)*?"""/, token: "string", next: "start" },
          { regex: /.*/, token: "string" }
        ],
        stack: [
          { regex: /\)/, token: "bracket", next: "start" },
          { regex: /--/, token: "bracket" },
          { regex: /\S+/, token: "meta" },
          { regex: /\s+|./, token: null }
        ],
        // The meta property contains global information about the mode. It
        // can contain properties like lineComment, which are supported by
        // all modes, and also directives like dontIndentStates, which are
        // specific to simple modes.
        meta: {
          dontIndentStates: ["start", "vocabulary", "string", "string3", "stack"],
          lineComment: "!"
        }
      });
      CodeMirror2.defineMIME("text/x-factor", "factor");
    });
  })();
  return factor$2.exports;
}
var factorExports = requireFactor();
const factor = /* @__PURE__ */ getDefaultExportFromCjs(factorExports);
const factor$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: factor
}, [factorExports]);
export {
  factor$1 as f
};
