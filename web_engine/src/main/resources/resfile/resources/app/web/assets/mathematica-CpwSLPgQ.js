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
var mathematica$2 = { exports: {} };
var hasRequiredMathematica;
function requireMathematica() {
  if (hasRequiredMathematica) return mathematica$2.exports;
  hasRequiredMathematica = 1;
  (function(module, exports) {
    (function(mod) {
      mod(requireCodemirror());
    })(function(CodeMirror) {
      CodeMirror.defineMode("mathematica", function(_config, _parserConfig) {
        var Identifier = "[a-zA-Z\\$][a-zA-Z0-9\\$]*";
        var pBase = "(?:\\d+)";
        var pFloat = "(?:\\.\\d+|\\d+\\.\\d*|\\d+)";
        var pFloatBase = "(?:\\.\\w+|\\w+\\.\\w*|\\w+)";
        var pPrecision = "(?:`(?:`?" + pFloat + ")?)";
        var reBaseForm = new RegExp("(?:" + pBase + "(?:\\^\\^" + pFloatBase + pPrecision + "?(?:\\*\\^[+-]?\\d+)?))");
        var reFloatForm = new RegExp("(?:" + pFloat + pPrecision + "?(?:\\*\\^[+-]?\\d+)?)");
        var reIdInContext = new RegExp("(?:`?)(?:" + Identifier + ")(?:`(?:" + Identifier + "))*(?:`?)");
        function tokenBase(stream, state) {
          var ch;
          ch = stream.next();
          if (ch === '"') {
            state.tokenize = tokenString;
            return state.tokenize(stream, state);
          }
          if (ch === "(") {
            if (stream.eat("*")) {
              state.commentLevel++;
              state.tokenize = tokenComment;
              return state.tokenize(stream, state);
            }
          }
          stream.backUp(1);
          if (stream.match(reBaseForm, true, false)) {
            return "number";
          }
          if (stream.match(reFloatForm, true, false)) {
            return "number";
          }
          if (stream.match(/(?:In|Out)\[[0-9]*\]/, true, false)) {
            return "atom";
          }
          if (stream.match(/([a-zA-Z\$][a-zA-Z0-9\$]*(?:`[a-zA-Z0-9\$]+)*::usage)/, true, false)) {
            return "meta";
          }
          if (stream.match(/([a-zA-Z\$][a-zA-Z0-9\$]*(?:`[a-zA-Z0-9\$]+)*::[a-zA-Z\$][a-zA-Z0-9\$]*):?/, true, false)) {
            return "string-2";
          }
          if (stream.match(/([a-zA-Z\$][a-zA-Z0-9\$]*\s*:)(?:(?:[a-zA-Z\$][a-zA-Z0-9\$]*)|(?:[^:=>~@\^\&\*\)\[\]'\?,\|])).*/, true, false)) {
            return "variable-2";
          }
          if (stream.match(/[a-zA-Z\$][a-zA-Z0-9\$]*_+[a-zA-Z\$][a-zA-Z0-9\$]*/, true, false)) {
            return "variable-2";
          }
          if (stream.match(/[a-zA-Z\$][a-zA-Z0-9\$]*_+/, true, false)) {
            return "variable-2";
          }
          if (stream.match(/_+[a-zA-Z\$][a-zA-Z0-9\$]*/, true, false)) {
            return "variable-2";
          }
          if (stream.match(/\\\[[a-zA-Z\$][a-zA-Z0-9\$]*\]/, true, false)) {
            return "variable-3";
          }
          if (stream.match(/(?:\[|\]|{|}|\(|\))/, true, false)) {
            return "bracket";
          }
          if (stream.match(/(?:#[a-zA-Z\$][a-zA-Z0-9\$]*|#+[0-9]?)/, true, false)) {
            return "variable-2";
          }
          if (stream.match(reIdInContext, true, false)) {
            return "keyword";
          }
          if (stream.match(/(?:\\|\+|\-|\*|\/|,|;|\.|:|@|~|=|>|<|&|\||_|`|'|\^|\?|!|%)/, true, false)) {
            return "operator";
          }
          stream.next();
          return "error";
        }
        function tokenString(stream, state) {
          var next, end = false, escaped = false;
          while ((next = stream.next()) != null) {
            if (next === '"' && !escaped) {
              end = true;
              break;
            }
            escaped = !escaped && next === "\\";
          }
          if (end && !escaped) {
            state.tokenize = tokenBase;
          }
          return "string";
        }
        function tokenComment(stream, state) {
          var prev, next;
          while (state.commentLevel > 0 && (next = stream.next()) != null) {
            if (prev === "(" && next === "*") state.commentLevel++;
            if (prev === "*" && next === ")") state.commentLevel--;
            prev = next;
          }
          if (state.commentLevel <= 0) {
            state.tokenize = tokenBase;
          }
          return "comment";
        }
        return {
          startState: function() {
            return { tokenize: tokenBase, commentLevel: 0 };
          },
          token: function(stream, state) {
            if (stream.eatSpace()) return null;
            return state.tokenize(stream, state);
          },
          blockCommentStart: "(*",
          blockCommentEnd: "*)"
        };
      });
      CodeMirror.defineMIME("text/x-mathematica", {
        name: "mathematica"
      });
    });
  })();
  return mathematica$2.exports;
}
var mathematicaExports = requireMathematica();
const mathematica = /* @__PURE__ */ getDefaultExportFromCjs(mathematicaExports);
const mathematica$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: mathematica
}, [mathematicaExports]);
export {
  mathematica$1 as m
};
