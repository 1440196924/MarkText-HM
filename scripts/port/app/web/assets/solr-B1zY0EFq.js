import { a as requireCodemirror, g as getDefaultExportFromCjs } from "./index-Nx_AZTXs.js";
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
var solr$2 = { exports: {} };
var hasRequiredSolr;
function requireSolr() {
  if (hasRequiredSolr) return solr$2.exports;
  hasRequiredSolr = 1;
  (function(module, exports) {
    (function(mod) {
      mod(requireCodemirror());
    })(function(CodeMirror) {
      CodeMirror.defineMode("solr", function() {
        var isStringChar = /[^\s\|\!\+\-\*\?\~\^\&\:\(\)\[\]\{\}\"\\]/;
        var isOperatorChar = /[\|\!\+\-\*\?\~\^\&]/;
        var isOperatorString = /^(OR|AND|NOT|TO)$/i;
        function isNumber(word) {
          return parseFloat(word).toString() === word;
        }
        function tokenString(quote) {
          return function(stream, state) {
            var escaped = false, next;
            while ((next = stream.next()) != null) {
              if (next == quote && !escaped) break;
              escaped = !escaped && next == "\\";
            }
            if (!escaped) state.tokenize = tokenBase;
            return "string";
          };
        }
        function tokenOperator(operator) {
          return function(stream, state) {
            var style = "operator";
            if (operator == "+")
              style += " positive";
            else if (operator == "-")
              style += " negative";
            else if (operator == "|")
              stream.eat(/\|/);
            else if (operator == "&")
              stream.eat(/\&/);
            else if (operator == "^")
              style += " boost";
            state.tokenize = tokenBase;
            return style;
          };
        }
        function tokenWord(ch) {
          return function(stream, state) {
            var word = ch;
            while ((ch = stream.peek()) && ch.match(isStringChar) != null) {
              word += stream.next();
            }
            state.tokenize = tokenBase;
            if (isOperatorString.test(word))
              return "operator";
            else if (isNumber(word))
              return "number";
            else if (stream.peek() == ":")
              return "field";
            else
              return "string";
          };
        }
        function tokenBase(stream, state) {
          var ch = stream.next();
          if (ch == '"')
            state.tokenize = tokenString(ch);
          else if (isOperatorChar.test(ch))
            state.tokenize = tokenOperator(ch);
          else if (isStringChar.test(ch))
            state.tokenize = tokenWord(ch);
          return state.tokenize != tokenBase ? state.tokenize(stream, state) : null;
        }
        return {
          startState: function() {
            return {
              tokenize: tokenBase
            };
          },
          token: function(stream, state) {
            if (stream.eatSpace()) return null;
            return state.tokenize(stream, state);
          }
        };
      });
      CodeMirror.defineMIME("text/x-solr", "solr");
    });
  })();
  return solr$2.exports;
}
var solrExports = requireSolr();
const solr = /* @__PURE__ */ getDefaultExportFromCjs(solrExports);
const solr$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: solr
}, [solrExports]);
export {
  solr$1 as s
};
