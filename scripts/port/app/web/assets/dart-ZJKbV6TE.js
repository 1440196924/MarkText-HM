import { a as requireCodemirror, g as getDefaultExportFromCjs } from "./index-D8xk56-E.js";
import { r as requireClike } from "./clike-zpT4ZKFW.js";
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
var dart$2 = { exports: {} };
var hasRequiredDart;
function requireDart() {
  if (hasRequiredDart) return dart$2.exports;
  hasRequiredDart = 1;
  (function(module, exports) {
    (function(mod) {
      mod(requireCodemirror(), requireClike());
    })(function(CodeMirror) {
      var keywords = "this super static final const abstract class extends external factory implements mixin get native set typedef with enum throw rethrow assert break case continue default in return new deferred async await covariant try catch finally do else for if switch while import library export part of show hide is as extension on yield late required sealed base interface when".split(" ");
      var blockKeywords = "try catch finally do else for if switch while".split(" ");
      var atoms = "true false null".split(" ");
      var builtins = "void bool num int double dynamic var String Null Never".split(" ");
      function set(words) {
        var obj = {};
        for (var i = 0; i < words.length; ++i) obj[words[i]] = true;
        return obj;
      }
      function pushInterpolationStack(state) {
        (state.interpolationStack || (state.interpolationStack = [])).push(state.tokenize);
      }
      function popInterpolationStack(state) {
        return (state.interpolationStack || (state.interpolationStack = [])).pop();
      }
      function sizeInterpolationStack(state) {
        return state.interpolationStack ? state.interpolationStack.length : 0;
      }
      CodeMirror.defineMIME("application/dart", {
        name: "clike",
        keywords: set(keywords),
        blockKeywords: set(blockKeywords),
        builtin: set(builtins),
        atoms: set(atoms),
        // clike numbers without the suffixes, and with '_' separators.
        number: /^(?:0x[a-f\d_]+|(?:[\d_]+\.?[\d_]*|\.[\d_]+)(?:e[-+]?[\d_]+)?)/i,
        hooks: {
          "@": function(stream) {
            stream.eatWhile(/[\w\$_\.]/);
            return "meta";
          },
          // custom string handling to deal with triple-quoted strings and string interpolation
          "'": function(stream, state) {
            return tokenString("'", stream, state, false);
          },
          '"': function(stream, state) {
            return tokenString('"', stream, state, false);
          },
          "r": function(stream, state) {
            var peek = stream.peek();
            if (peek == "'" || peek == '"') {
              return tokenString(stream.next(), stream, state, true);
            }
            return false;
          },
          "}": function(_stream, state) {
            if (sizeInterpolationStack(state) > 0) {
              state.tokenize = popInterpolationStack(state);
              return null;
            }
            return false;
          },
          "/": function(stream, state) {
            if (!stream.eat("*")) return false;
            state.tokenize = tokenNestedComment(1);
            return state.tokenize(stream, state);
          },
          token: function(stream, _, style) {
            if (style == "variable") {
              var isUpper = RegExp("^[_$]*[A-Z][a-zA-Z0-9_$]*$", "g");
              if (isUpper.test(stream.current())) {
                return "variable-2";
              }
            }
          }
        }
      });
      function tokenString(quote, stream, state, raw) {
        var tripleQuoted = false;
        if (stream.eat(quote)) {
          if (stream.eat(quote)) tripleQuoted = true;
          else return "string";
        }
        function tokenStringHelper(stream2, state2) {
          var escaped = false;
          while (!stream2.eol()) {
            if (!raw && !escaped && stream2.peek() == "$") {
              pushInterpolationStack(state2);
              state2.tokenize = tokenInterpolation;
              return "string";
            }
            var next = stream2.next();
            if (next == quote && !escaped && (!tripleQuoted || stream2.match(quote + quote))) {
              state2.tokenize = null;
              break;
            }
            escaped = !raw && !escaped && next == "\\";
          }
          return "string";
        }
        state.tokenize = tokenStringHelper;
        return tokenStringHelper(stream, state);
      }
      function tokenInterpolation(stream, state) {
        stream.eat("$");
        if (stream.eat("{")) {
          state.tokenize = null;
        } else {
          state.tokenize = tokenInterpolationIdentifier;
        }
        return null;
      }
      function tokenInterpolationIdentifier(stream, state) {
        stream.eatWhile(/[\w_]/);
        state.tokenize = popInterpolationStack(state);
        return "variable";
      }
      function tokenNestedComment(depth) {
        return function(stream, state) {
          var ch;
          while (ch = stream.next()) {
            if (ch == "*" && stream.eat("/")) {
              if (depth == 1) {
                state.tokenize = null;
                break;
              } else {
                state.tokenize = tokenNestedComment(depth - 1);
                return state.tokenize(stream, state);
              }
            } else if (ch == "/" && stream.eat("*")) {
              state.tokenize = tokenNestedComment(depth + 1);
              return state.tokenize(stream, state);
            }
          }
          return "comment";
        };
      }
      CodeMirror.registerHelper("hintWords", "application/dart", keywords.concat(atoms).concat(builtins));
      CodeMirror.defineMode("dart", function(conf) {
        return CodeMirror.getMode(conf, "application/dart");
      }, "clike");
    });
  })();
  return dart$2.exports;
}
var dartExports = requireDart();
const dart = /* @__PURE__ */ getDefaultExportFromCjs(dartExports);
const dart$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: dart
}, [dartExports]);
export {
  dart$1 as d
};
