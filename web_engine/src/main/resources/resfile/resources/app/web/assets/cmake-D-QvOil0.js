import { a as requireCodemirror, g as getDefaultExportFromCjs } from "./index-D8xk56-E.js";
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
var cmake$2 = { exports: {} };
var hasRequiredCmake;
function requireCmake() {
  if (hasRequiredCmake) return cmake$2.exports;
  hasRequiredCmake = 1;
  (function(module, exports) {
    (function(mod) {
      mod(requireCodemirror());
    })(function(CodeMirror) {
      CodeMirror.defineMode("cmake", function() {
        var variable_regex = /({)?[a-zA-Z0-9_]+(})?/;
        function tokenString(stream, state) {
          var current, prev, found_var = false;
          while (!stream.eol() && (current = stream.next()) != state.pending) {
            if (current === "$" && prev != "\\" && state.pending == '"') {
              found_var = true;
              break;
            }
            prev = current;
          }
          if (found_var) {
            stream.backUp(1);
          }
          if (current == state.pending) {
            state.continueString = false;
          } else {
            state.continueString = true;
          }
          return "string";
        }
        function tokenize(stream, state) {
          var ch = stream.next();
          if (ch === "$") {
            if (stream.match(variable_regex)) {
              return "variable-2";
            }
            return "variable";
          }
          if (state.continueString) {
            stream.backUp(1);
            return tokenString(stream, state);
          }
          if (stream.match(/(\s+)?\w+\(/) || stream.match(/(\s+)?\w+\ \(/)) {
            stream.backUp(1);
            return "def";
          }
          if (ch == "#") {
            stream.skipToEnd();
            return "comment";
          }
          if (ch == "'" || ch == '"') {
            state.pending = ch;
            return tokenString(stream, state);
          }
          if (ch == "(" || ch == ")") {
            return "bracket";
          }
          if (ch.match(/[0-9]/)) {
            return "number";
          }
          stream.eatWhile(/[\w-]/);
          return null;
        }
        return {
          startState: function() {
            var state = {};
            state.inDefinition = false;
            state.inInclude = false;
            state.continueString = false;
            state.pending = false;
            return state;
          },
          token: function(stream, state) {
            if (stream.eatSpace()) return null;
            return tokenize(stream, state);
          }
        };
      });
      CodeMirror.defineMIME("text/x-cmake", "cmake");
    });
  })();
  return cmake$2.exports;
}
var cmakeExports = requireCmake();
const cmake = /* @__PURE__ */ getDefaultExportFromCjs(cmakeExports);
const cmake$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: cmake
}, [cmakeExports]);
export {
  cmake$1 as c
};
