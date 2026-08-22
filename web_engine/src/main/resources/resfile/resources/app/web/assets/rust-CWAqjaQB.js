import { a as requireCodemirror, g as getDefaultExportFromCjs } from "./index-CsLNvl25.js";
import { r as requireSimple } from "./simple-OJ3Ilc6a.js";
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
var rust$2 = { exports: {} };
var hasRequiredRust;
function requireRust() {
  if (hasRequiredRust) return rust$2.exports;
  hasRequiredRust = 1;
  (function(module, exports) {
    (function(mod) {
      mod(requireCodemirror(), requireSimple());
    })(function(CodeMirror) {
      CodeMirror.defineSimpleMode("rust", {
        start: [
          // string and byte string
          { regex: /b?"/, token: "string", next: "string" },
          // raw string and raw byte string
          { regex: /b?r"/, token: "string", next: "string_raw" },
          { regex: /b?r#+"/, token: "string", next: "string_raw_hash" },
          // character
          { regex: /'(?:[^'\\]|\\(?:[nrt0'"]|x[\da-fA-F]{2}|u\{[\da-fA-F]{6}\}))'/, token: "string-2" },
          // byte
          { regex: /b'(?:[^']|\\(?:['\\nrt0]|x[\da-fA-F]{2}))'/, token: "string-2" },
          {
            regex: /(?:(?:[0-9][0-9_]*)(?:(?:[Ee][+-]?[0-9_]+)|\.[0-9_]+(?:[Ee][+-]?[0-9_]+)?)(?:f32|f64)?)|(?:0(?:b[01_]+|(?:o[0-7_]+)|(?:x[0-9a-fA-F_]+))|(?:[0-9][0-9_]*))(?:u8|u16|u32|u64|i8|i16|i32|i64|isize|usize)?/,
            token: "number"
          },
          { regex: /(let(?:\s+mut)?|fn|enum|mod|struct|type|union)(\s+)([a-zA-Z_][a-zA-Z0-9_]*)/, token: ["keyword", null, "def"] },
          { regex: /(?:abstract|alignof|as|async|await|box|break|continue|const|crate|do|dyn|else|enum|extern|fn|for|final|if|impl|in|loop|macro|match|mod|move|offsetof|override|priv|proc|pub|pure|ref|return|self|sizeof|static|struct|super|trait|type|typeof|union|unsafe|unsized|use|virtual|where|while|yield)\b/, token: "keyword" },
          { regex: /\b(?:Self|isize|usize|char|bool|u8|u16|u32|u64|f16|f32|f64|i8|i16|i32|i64|str|Option)\b/, token: "atom" },
          { regex: /\b(?:true|false|Some|None|Ok|Err)\b/, token: "builtin" },
          {
            regex: /\b(fn)(\s+)([a-zA-Z_][a-zA-Z0-9_]*)/,
            token: ["keyword", null, "def"]
          },
          { regex: /#!?\[.*\]/, token: "meta" },
          { regex: /\/\/.*/, token: "comment" },
          { regex: /\/\*/, token: "comment", next: "comment" },
          { regex: /[-+\/*=<>!]+/, token: "operator" },
          { regex: /[a-zA-Z_]\w*!/, token: "variable-3" },
          { regex: /[a-zA-Z_]\w*/, token: "variable" },
          { regex: /[\{\[\(]/, indent: true },
          { regex: /[\}\]\)]/, dedent: true }
        ],
        string: [
          { regex: /"/, token: "string", next: "start" },
          { regex: /(?:[^\\"]|\\(?:.|$))*/, token: "string" }
        ],
        string_raw: [
          { regex: /"/, token: "string", next: "start" },
          { regex: /[^"]*/, token: "string" }
        ],
        string_raw_hash: [
          { regex: /"#+/, token: "string", next: "start" },
          { regex: /(?:[^"]|"(?!#))*/, token: "string" }
        ],
        comment: [
          { regex: /.*?\*\//, token: "comment", next: "start" },
          { regex: /.*/, token: "comment" }
        ],
        meta: {
          dontIndentStates: ["comment"],
          electricInput: /^\s*\}$/,
          blockCommentStart: "/*",
          blockCommentEnd: "*/",
          lineComment: "//",
          fold: "brace"
        }
      });
      CodeMirror.defineMIME("text/x-rustsrc", "rust");
      CodeMirror.defineMIME("text/rust", "rust");
    });
  })();
  return rust$2.exports;
}
var rustExports = requireRust();
const rust = /* @__PURE__ */ getDefaultExportFromCjs(rustExports);
const rust$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: rust
}, [rustExports]);
export {
  rust$1 as r
};
