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
var pig$2 = { exports: {} };
var hasRequiredPig;
function requirePig() {
  if (hasRequiredPig) return pig$2.exports;
  hasRequiredPig = 1;
  (function(module, exports) {
    (function(mod) {
      mod(requireCodemirror());
    })(function(CodeMirror) {
      CodeMirror.defineMode("pig", function(_config, parserConfig) {
        var keywords = parserConfig.keywords, builtins = parserConfig.builtins, types = parserConfig.types, multiLineStrings = parserConfig.multiLineStrings;
        var isOperatorChar = /[*+\-%<>=&?:\/!|]/;
        function chain(stream, state, f) {
          state.tokenize = f;
          return f(stream, state);
        }
        function tokenComment(stream, state) {
          var isEnd = false;
          var ch;
          while (ch = stream.next()) {
            if (ch == "/" && isEnd) {
              state.tokenize = tokenBase;
              break;
            }
            isEnd = ch == "*";
          }
          return "comment";
        }
        function tokenString(quote) {
          return function(stream, state) {
            var escaped = false, next, end = false;
            while ((next = stream.next()) != null) {
              if (next == quote && !escaped) {
                end = true;
                break;
              }
              escaped = !escaped && next == "\\";
            }
            if (end || !(escaped || multiLineStrings))
              state.tokenize = tokenBase;
            return "error";
          };
        }
        function tokenBase(stream, state) {
          var ch = stream.next();
          if (ch == '"' || ch == "'")
            return chain(stream, state, tokenString(ch));
          else if (/[\[\]{}\(\),;\.]/.test(ch))
            return null;
          else if (/\d/.test(ch)) {
            stream.eatWhile(/[\w\.]/);
            return "number";
          } else if (ch == "/") {
            if (stream.eat("*")) {
              return chain(stream, state, tokenComment);
            } else {
              stream.eatWhile(isOperatorChar);
              return "operator";
            }
          } else if (ch == "-") {
            if (stream.eat("-")) {
              stream.skipToEnd();
              return "comment";
            } else {
              stream.eatWhile(isOperatorChar);
              return "operator";
            }
          } else if (isOperatorChar.test(ch)) {
            stream.eatWhile(isOperatorChar);
            return "operator";
          } else {
            stream.eatWhile(/[\w\$_]/);
            if (keywords && keywords.propertyIsEnumerable(stream.current().toUpperCase())) {
              if (!stream.eat(")") && !stream.eat("."))
                return "keyword";
            }
            if (builtins && builtins.propertyIsEnumerable(stream.current().toUpperCase()))
              return "variable-2";
            if (types && types.propertyIsEnumerable(stream.current().toUpperCase()))
              return "variable-3";
            return "variable";
          }
        }
        return {
          startState: function() {
            return {
              tokenize: tokenBase,
              startOfLine: true
            };
          },
          token: function(stream, state) {
            if (stream.eatSpace()) return null;
            var style = state.tokenize(stream, state);
            return style;
          }
        };
      });
      (function() {
        function keywords(str) {
          var obj = {}, words = str.split(" ");
          for (var i = 0; i < words.length; ++i) obj[words[i]] = true;
          return obj;
        }
        var pBuiltins = "ABS ACOS ARITY ASIN ATAN AVG BAGSIZE BINSTORAGE BLOOM BUILDBLOOM CBRT CEIL CONCAT COR COS COSH COUNT COUNT_STAR COV CONSTANTSIZE CUBEDIMENSIONS DIFF DISTINCT DOUBLEABS DOUBLEAVG DOUBLEBASE DOUBLEMAX DOUBLEMIN DOUBLEROUND DOUBLESUM EXP FLOOR FLOATABS FLOATAVG FLOATMAX FLOATMIN FLOATROUND FLOATSUM GENERICINVOKER INDEXOF INTABS INTAVG INTMAX INTMIN INTSUM INVOKEFORDOUBLE INVOKEFORFLOAT INVOKEFORINT INVOKEFORLONG INVOKEFORSTRING INVOKER ISEMPTY JSONLOADER JSONMETADATA JSONSTORAGE LAST_INDEX_OF LCFIRST LOG LOG10 LOWER LONGABS LONGAVG LONGMAX LONGMIN LONGSUM MAX MIN MAPSIZE MONITOREDUDF NONDETERMINISTIC OUTPUTSCHEMA  PIGSTORAGE PIGSTREAMING RANDOM REGEX_EXTRACT REGEX_EXTRACT_ALL REPLACE ROUND SIN SINH SIZE SQRT STRSPLIT SUBSTRING SUM STRINGCONCAT STRINGMAX STRINGMIN STRINGSIZE TAN TANH TOBAG TOKENIZE TOMAP TOP TOTUPLE TRIM TEXTLOADER TUPLESIZE UCFIRST UPPER UTF8STORAGECONVERTER ";
        var pKeywords = "VOID IMPORT RETURNS DEFINE LOAD FILTER FOREACH ORDER CUBE DISTINCT COGROUP JOIN CROSS UNION SPLIT INTO IF OTHERWISE ALL AS BY USING INNER OUTER ONSCHEMA PARALLEL PARTITION GROUP AND OR NOT GENERATE FLATTEN ASC DESC IS STREAM THROUGH STORE MAPREDUCE SHIP CACHE INPUT OUTPUT STDERROR STDIN STDOUT LIMIT SAMPLE LEFT RIGHT FULL EQ GT LT GTE LTE NEQ MATCHES TRUE FALSE DUMP";
        var pTypes = "BOOLEAN INT LONG FLOAT DOUBLE CHARARRAY BYTEARRAY BAG TUPLE MAP ";
        CodeMirror.defineMIME("text/x-pig", {
          name: "pig",
          builtins: keywords(pBuiltins),
          keywords: keywords(pKeywords),
          types: keywords(pTypes)
        });
        CodeMirror.registerHelper("hintWords", "pig", (pBuiltins + pTypes + pKeywords).split(" "));
      })();
    });
  })();
  return pig$2.exports;
}
var pigExports = requirePig();
const pig = /* @__PURE__ */ getDefaultExportFromCjs(pigExports);
const pig$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: pig
}, [pigExports]);
export {
  pig$1 as p
};
