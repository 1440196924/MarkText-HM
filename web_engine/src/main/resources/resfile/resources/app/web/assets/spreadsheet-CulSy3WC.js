import { a as requireCodemirror, g as getDefaultExportFromCjs } from "./index-1FfQlz0g.js";
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
var spreadsheet$2 = { exports: {} };
var hasRequiredSpreadsheet;
function requireSpreadsheet() {
  if (hasRequiredSpreadsheet) return spreadsheet$2.exports;
  hasRequiredSpreadsheet = 1;
  (function(module, exports) {
    (function(mod) {
      mod(requireCodemirror());
    })(function(CodeMirror) {
      CodeMirror.defineMode("spreadsheet", function() {
        return {
          startState: function() {
            return {
              stringType: null,
              stack: []
            };
          },
          token: function(stream, state) {
            if (!stream) return;
            if (state.stack.length === 0) {
              if (stream.peek() == '"' || stream.peek() == "'") {
                state.stringType = stream.peek();
                stream.next();
                state.stack.unshift("string");
              }
            }
            switch (state.stack[0]) {
              case "string":
                while (state.stack[0] === "string" && !stream.eol()) {
                  if (stream.peek() === state.stringType) {
                    stream.next();
                    state.stack.shift();
                  } else if (stream.peek() === "\\") {
                    stream.next();
                    stream.next();
                  } else {
                    stream.match(/^.[^\\\"\']*/);
                  }
                }
                return "string";
              case "characterClass":
                while (state.stack[0] === "characterClass" && !stream.eol()) {
                  if (!(stream.match(/^[^\]\\]+/) || stream.match(/^\\./)))
                    state.stack.shift();
                }
                return "operator";
            }
            var peek = stream.peek();
            switch (peek) {
              case "[":
                stream.next();
                state.stack.unshift("characterClass");
                return "bracket";
              case ":":
                stream.next();
                return "operator";
              case "\\":
                if (stream.match(/\\[a-z]+/)) return "string-2";
                else {
                  stream.next();
                  return "atom";
                }
              case ".":
              case ",":
              case ";":
              case "*":
              case "-":
              case "+":
              case "^":
              case "<":
              case "/":
              case "=":
                stream.next();
                return "atom";
              case "$":
                stream.next();
                return "builtin";
            }
            if (stream.match(/\d+/)) {
              if (stream.match(/^\w+/)) return "error";
              return "number";
            } else if (stream.match(/^[a-zA-Z_]\w*/)) {
              if (stream.match(/(?=[\(.])/, false)) return "keyword";
              return "variable-2";
            } else if (["[", "]", "(", ")", "{", "}"].indexOf(peek) != -1) {
              stream.next();
              return "bracket";
            } else if (!stream.eatSpace()) {
              stream.next();
            }
            return null;
          }
        };
      });
      CodeMirror.defineMIME("text/x-spreadsheet", "spreadsheet");
    });
  })();
  return spreadsheet$2.exports;
}
var spreadsheetExports = requireSpreadsheet();
const spreadsheet = /* @__PURE__ */ getDefaultExportFromCjs(spreadsheetExports);
const spreadsheet$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: spreadsheet
}, [spreadsheetExports]);
export {
  spreadsheet$1 as s
};
