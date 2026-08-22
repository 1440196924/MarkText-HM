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
var eiffel$2 = { exports: {} };
var hasRequiredEiffel;
function requireEiffel() {
  if (hasRequiredEiffel) return eiffel$2.exports;
  hasRequiredEiffel = 1;
  (function(module, exports) {
    (function(mod) {
      mod(requireCodemirror());
    })(function(CodeMirror) {
      CodeMirror.defineMode("eiffel", function() {
        function wordObj(words) {
          var o = {};
          for (var i = 0, e = words.length; i < e; ++i) o[words[i]] = true;
          return o;
        }
        var keywords = wordObj([
          "note",
          "across",
          "when",
          "variant",
          "until",
          "unique",
          "undefine",
          "then",
          "strip",
          "select",
          "retry",
          "rescue",
          "require",
          "rename",
          "reference",
          "redefine",
          "prefix",
          "once",
          "old",
          "obsolete",
          "loop",
          "local",
          "like",
          "is",
          "inspect",
          "infix",
          "include",
          "if",
          "frozen",
          "from",
          "external",
          "export",
          "ensure",
          "end",
          "elseif",
          "else",
          "do",
          "creation",
          "create",
          "check",
          "alias",
          "agent",
          "separate",
          "invariant",
          "inherit",
          "indexing",
          "feature",
          "expanded",
          "deferred",
          "class",
          "Void",
          "True",
          "Result",
          "Precursor",
          "False",
          "Current",
          "create",
          "attached",
          "detachable",
          "as",
          "and",
          "implies",
          "not",
          "or"
        ]);
        var operators = wordObj([":=", "and then", "and", "or", "<<", ">>"]);
        function chain(newtok, stream, state) {
          state.tokenize.push(newtok);
          return newtok(stream, state);
        }
        function tokenBase(stream, state) {
          if (stream.eatSpace()) return null;
          var ch = stream.next();
          if (ch == '"' || ch == "'") {
            return chain(readQuoted(ch, "string"), stream, state);
          } else if (ch == "-" && stream.eat("-")) {
            stream.skipToEnd();
            return "comment";
          } else if (ch == ":" && stream.eat("=")) {
            return "operator";
          } else if (/[0-9]/.test(ch)) {
            stream.eatWhile(/[xXbBCc0-9\.]/);
            stream.eat(/[\?\!]/);
            return "ident";
          } else if (/[a-zA-Z_0-9]/.test(ch)) {
            stream.eatWhile(/[a-zA-Z_0-9]/);
            stream.eat(/[\?\!]/);
            return "ident";
          } else if (/[=+\-\/*^%<>~]/.test(ch)) {
            stream.eatWhile(/[=+\-\/*^%<>~]/);
            return "operator";
          } else {
            return null;
          }
        }
        function readQuoted(quote, style, unescaped) {
          return function(stream, state) {
            var escaped = false, ch;
            while ((ch = stream.next()) != null) {
              if (ch == quote && !escaped) {
                state.tokenize.pop();
                break;
              }
              escaped = !escaped && ch == "%";
            }
            return style;
          };
        }
        return {
          startState: function() {
            return { tokenize: [tokenBase] };
          },
          token: function(stream, state) {
            var style = state.tokenize[state.tokenize.length - 1](stream, state);
            if (style == "ident") {
              var word = stream.current();
              style = keywords.propertyIsEnumerable(stream.current()) ? "keyword" : operators.propertyIsEnumerable(stream.current()) ? "operator" : /^[A-Z][A-Z_0-9]*$/g.test(word) ? "tag" : /^0[bB][0-1]+$/g.test(word) ? "number" : /^0[cC][0-7]+$/g.test(word) ? "number" : /^0[xX][a-fA-F0-9]+$/g.test(word) ? "number" : /^([0-9]+\.[0-9]*)|([0-9]*\.[0-9]+)$/g.test(word) ? "number" : /^[0-9]+$/g.test(word) ? "number" : "variable";
            }
            return style;
          },
          lineComment: "--"
        };
      });
      CodeMirror.defineMIME("text/x-eiffel", "eiffel");
    });
  })();
  return eiffel$2.exports;
}
var eiffelExports = requireEiffel();
const eiffel = /* @__PURE__ */ getDefaultExportFromCjs(eiffelExports);
const eiffel$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: eiffel
}, [eiffelExports]);
export {
  eiffel$1 as e
};
