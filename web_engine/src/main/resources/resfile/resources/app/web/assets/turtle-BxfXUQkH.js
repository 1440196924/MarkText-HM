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
var turtle$2 = { exports: {} };
var hasRequiredTurtle;
function requireTurtle() {
  if (hasRequiredTurtle) return turtle$2.exports;
  hasRequiredTurtle = 1;
  (function(module, exports) {
    (function(mod) {
      mod(requireCodemirror());
    })(function(CodeMirror) {
      CodeMirror.defineMode("turtle", function(config) {
        var indentUnit = config.indentUnit;
        var curPunc;
        function wordRegexp(words) {
          return new RegExp("^(?:" + words.join("|") + ")$", "i");
        }
        wordRegexp([]);
        var keywords = wordRegexp(["@prefix", "@base", "a"]);
        var operatorChars = /[*+\-<>=&|]/;
        function tokenBase(stream, state) {
          var ch = stream.next();
          curPunc = null;
          if (ch == "<" && !stream.match(/^[\s\u00a0=]/, false)) {
            stream.match(/^[^\s\u00a0>]*>?/);
            return "atom";
          } else if (ch == '"' || ch == "'") {
            state.tokenize = tokenLiteral(ch);
            return state.tokenize(stream, state);
          } else if (/[{}\(\),\.;\[\]]/.test(ch)) {
            curPunc = ch;
            return null;
          } else if (ch == "#") {
            stream.skipToEnd();
            return "comment";
          } else if (operatorChars.test(ch)) {
            stream.eatWhile(operatorChars);
            return null;
          } else if (ch == ":") {
            return "operator";
          } else {
            stream.eatWhile(/[_\w\d]/);
            if (stream.peek() == ":") {
              return "variable-3";
            } else {
              var word = stream.current();
              if (keywords.test(word)) {
                return "meta";
              }
              if (ch >= "A" && ch <= "Z") {
                return "comment";
              } else {
                return "keyword";
              }
            }
            var word = stream.current();
          }
        }
        function tokenLiteral(quote) {
          return function(stream, state) {
            var escaped = false, ch;
            while ((ch = stream.next()) != null) {
              if (ch == quote && !escaped) {
                state.tokenize = tokenBase;
                break;
              }
              escaped = !escaped && ch == "\\";
            }
            return "string";
          };
        }
        function pushContext(state, type, col) {
          state.context = { prev: state.context, indent: state.indent, col, type };
        }
        function popContext(state) {
          state.indent = state.context.indent;
          state.context = state.context.prev;
        }
        return {
          startState: function() {
            return {
              tokenize: tokenBase,
              context: null,
              indent: 0,
              col: 0
            };
          },
          token: function(stream, state) {
            if (stream.sol()) {
              if (state.context && state.context.align == null) state.context.align = false;
              state.indent = stream.indentation();
            }
            if (stream.eatSpace()) return null;
            var style = state.tokenize(stream, state);
            if (style != "comment" && state.context && state.context.align == null && state.context.type != "pattern") {
              state.context.align = true;
            }
            if (curPunc == "(") pushContext(state, ")", stream.column());
            else if (curPunc == "[") pushContext(state, "]", stream.column());
            else if (curPunc == "{") pushContext(state, "}", stream.column());
            else if (/[\]\}\)]/.test(curPunc)) {
              while (state.context && state.context.type == "pattern") popContext(state);
              if (state.context && curPunc == state.context.type) popContext(state);
            } else if (curPunc == "." && state.context && state.context.type == "pattern") popContext(state);
            else if (/atom|string|variable/.test(style) && state.context) {
              if (/[\}\]]/.test(state.context.type))
                pushContext(state, "pattern", stream.column());
              else if (state.context.type == "pattern" && !state.context.align) {
                state.context.align = true;
                state.context.col = stream.column();
              }
            }
            return style;
          },
          indent: function(state, textAfter) {
            var firstChar = textAfter && textAfter.charAt(0);
            var context = state.context;
            if (/[\]\}]/.test(firstChar))
              while (context && context.type == "pattern") context = context.prev;
            var closing = context && firstChar == context.type;
            if (!context)
              return 0;
            else if (context.type == "pattern")
              return context.col;
            else if (context.align)
              return context.col + (closing ? 0 : 1);
            else
              return context.indent + (closing ? 0 : indentUnit);
          },
          lineComment: "#"
        };
      });
      CodeMirror.defineMIME("text/turtle", "turtle");
    });
  })();
  return turtle$2.exports;
}
var turtleExports = requireTurtle();
const turtle = /* @__PURE__ */ getDefaultExportFromCjs(turtleExports);
const turtle$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: turtle
}, [turtleExports]);
export {
  turtle$1 as t
};
