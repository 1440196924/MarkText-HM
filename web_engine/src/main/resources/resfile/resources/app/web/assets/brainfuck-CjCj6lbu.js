import { a as requireCodemirror, g as getDefaultExportFromCjs } from "./index-CsLNvl25.js";
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
var brainfuck$2 = { exports: {} };
var hasRequiredBrainfuck;
function requireBrainfuck() {
  if (hasRequiredBrainfuck) return brainfuck$2.exports;
  hasRequiredBrainfuck = 1;
  (function(module, exports) {
    (function(mod) {
      mod(requireCodemirror());
    })(function(CodeMirror) {
      var reserve = "><+-.,[]".split("");
      CodeMirror.defineMode("brainfuck", function() {
        return {
          startState: function() {
            return {
              commentLine: false,
              left: 0,
              right: 0,
              commentLoop: false
            };
          },
          token: function(stream, state) {
            if (stream.eatSpace()) return null;
            if (stream.sol()) {
              state.commentLine = false;
            }
            var ch = stream.next().toString();
            if (reserve.indexOf(ch) !== -1) {
              if (state.commentLine === true) {
                if (stream.eol()) {
                  state.commentLine = false;
                }
                return "comment";
              }
              if (ch === "]" || ch === "[") {
                if (ch === "[") {
                  state.left++;
                } else {
                  state.right++;
                }
                return "bracket";
              } else if (ch === "+" || ch === "-") {
                return "keyword";
              } else if (ch === "<" || ch === ">") {
                return "atom";
              } else if (ch === "." || ch === ",") {
                return "def";
              }
            } else {
              state.commentLine = true;
              if (stream.eol()) {
                state.commentLine = false;
              }
              return "comment";
            }
            if (stream.eol()) {
              state.commentLine = false;
            }
          }
        };
      });
      CodeMirror.defineMIME("text/x-brainfuck", "brainfuck");
    });
  })();
  return brainfuck$2.exports;
}
var brainfuckExports = requireBrainfuck();
const brainfuck = /* @__PURE__ */ getDefaultExportFromCjs(brainfuckExports);
const brainfuck$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: brainfuck
}, [brainfuckExports]);
export {
  brainfuck$1 as b
};
