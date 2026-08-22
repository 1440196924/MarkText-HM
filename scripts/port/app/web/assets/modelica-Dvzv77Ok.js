import { a as requireCodemirror, g as getDefaultExportFromCjs } from "./index-ouHvDw0s.js";
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
var modelica$2 = { exports: {} };
var hasRequiredModelica;
function requireModelica() {
  if (hasRequiredModelica) return modelica$2.exports;
  hasRequiredModelica = 1;
  (function(module, exports) {
    (function(mod) {
      mod(requireCodemirror());
    })(function(CodeMirror) {
      CodeMirror.defineMode("modelica", function(config, parserConfig) {
        var indentUnit = config.indentUnit;
        var keywords = parserConfig.keywords || {};
        var builtin = parserConfig.builtin || {};
        var atoms = parserConfig.atoms || {};
        var isSingleOperatorChar = /[;=\(:\),{}.*<>+\-\/^\[\]]/;
        var isDoubleOperatorChar = /(:=|<=|>=|==|<>|\.\+|\.\-|\.\*|\.\/|\.\^)/;
        var isDigit = /[0-9]/;
        var isNonDigit = /[_a-zA-Z]/;
        function tokenLineComment(stream, state) {
          stream.skipToEnd();
          state.tokenize = null;
          return "comment";
        }
        function tokenBlockComment(stream, state) {
          var maybeEnd = false, ch;
          while (ch = stream.next()) {
            if (maybeEnd && ch == "/") {
              state.tokenize = null;
              break;
            }
            maybeEnd = ch == "*";
          }
          return "comment";
        }
        function tokenString(stream, state) {
          var escaped = false, ch;
          while ((ch = stream.next()) != null) {
            if (ch == '"' && !escaped) {
              state.tokenize = null;
              state.sol = false;
              break;
            }
            escaped = !escaped && ch == "\\";
          }
          return "string";
        }
        function tokenIdent(stream, state) {
          stream.eatWhile(isDigit);
          while (stream.eat(isDigit) || stream.eat(isNonDigit)) {
          }
          var cur = stream.current();
          if (state.sol && (cur == "package" || cur == "model" || cur == "when" || cur == "connector")) state.level++;
          else if (state.sol && cur == "end" && state.level > 0) state.level--;
          state.tokenize = null;
          state.sol = false;
          if (keywords.propertyIsEnumerable(cur)) return "keyword";
          else if (builtin.propertyIsEnumerable(cur)) return "builtin";
          else if (atoms.propertyIsEnumerable(cur)) return "atom";
          else return "variable";
        }
        function tokenQIdent(stream, state) {
          while (stream.eat(/[^']/)) {
          }
          state.tokenize = null;
          state.sol = false;
          if (stream.eat("'"))
            return "variable";
          else
            return "error";
        }
        function tokenUnsignedNumber(stream, state) {
          stream.eatWhile(isDigit);
          if (stream.eat(".")) {
            stream.eatWhile(isDigit);
          }
          if (stream.eat("e") || stream.eat("E")) {
            if (!stream.eat("-"))
              stream.eat("+");
            stream.eatWhile(isDigit);
          }
          state.tokenize = null;
          state.sol = false;
          return "number";
        }
        return {
          startState: function() {
            return {
              tokenize: null,
              level: 0,
              sol: true
            };
          },
          token: function(stream, state) {
            if (state.tokenize != null) {
              return state.tokenize(stream, state);
            }
            if (stream.sol()) {
              state.sol = true;
            }
            if (stream.eatSpace()) {
              state.tokenize = null;
              return null;
            }
            var ch = stream.next();
            if (ch == "/" && stream.eat("/")) {
              state.tokenize = tokenLineComment;
            } else if (ch == "/" && stream.eat("*")) {
              state.tokenize = tokenBlockComment;
            } else if (isDoubleOperatorChar.test(ch + stream.peek())) {
              stream.next();
              state.tokenize = null;
              return "operator";
            } else if (isSingleOperatorChar.test(ch)) {
              state.tokenize = null;
              return "operator";
            } else if (isNonDigit.test(ch)) {
              state.tokenize = tokenIdent;
            } else if (ch == "'" && stream.peek() && stream.peek() != "'") {
              state.tokenize = tokenQIdent;
            } else if (ch == '"') {
              state.tokenize = tokenString;
            } else if (isDigit.test(ch)) {
              state.tokenize = tokenUnsignedNumber;
            } else {
              state.tokenize = null;
              return "error";
            }
            return state.tokenize(stream, state);
          },
          indent: function(state, textAfter) {
            if (state.tokenize != null) return CodeMirror.Pass;
            var level = state.level;
            if (/(algorithm)/.test(textAfter)) level--;
            if (/(equation)/.test(textAfter)) level--;
            if (/(initial algorithm)/.test(textAfter)) level--;
            if (/(initial equation)/.test(textAfter)) level--;
            if (/(end)/.test(textAfter)) level--;
            if (level > 0)
              return indentUnit * level;
            else
              return 0;
          },
          blockCommentStart: "/*",
          blockCommentEnd: "*/",
          lineComment: "//"
        };
      });
      function words(str) {
        var obj = {}, words2 = str.split(" ");
        for (var i = 0; i < words2.length; ++i)
          obj[words2[i]] = true;
        return obj;
      }
      var modelicaKeywords = "algorithm and annotation assert block break class connect connector constant constrainedby der discrete each else elseif elsewhen encapsulated end enumeration equation expandable extends external false final flow for function if import impure in initial inner input loop model not operator or outer output package parameter partial protected public pure record redeclare replaceable return stream then true type when while within";
      var modelicaBuiltin = "abs acos actualStream asin atan atan2 cardinality ceil cos cosh delay div edge exp floor getInstanceName homotopy inStream integer log log10 mod pre reinit rem semiLinear sign sin sinh spatialDistribution sqrt tan tanh";
      var modelicaAtoms = "Real Boolean Integer String";
      function def(mimes, mode) {
        if (typeof mimes == "string")
          mimes = [mimes];
        var words2 = [];
        function add(obj) {
          if (obj) {
            for (var prop in obj)
              if (obj.hasOwnProperty(prop))
                words2.push(prop);
          }
        }
        add(mode.keywords);
        add(mode.builtin);
        add(mode.atoms);
        if (words2.length) {
          mode.helperType = mimes[0];
          CodeMirror.registerHelper("hintWords", mimes[0], words2);
        }
        for (var i = 0; i < mimes.length; ++i)
          CodeMirror.defineMIME(mimes[i], mode);
      }
      def(["text/x-modelica"], {
        name: "modelica",
        keywords: words(modelicaKeywords),
        builtin: words(modelicaBuiltin),
        atoms: words(modelicaAtoms)
      });
    });
  })();
  return modelica$2.exports;
}
var modelicaExports = requireModelica();
const modelica = /* @__PURE__ */ getDefaultExportFromCjs(modelicaExports);
const modelica$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: modelica
}, [modelicaExports]);
export {
  modelica$1 as m
};
