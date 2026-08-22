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
var sieve$2 = { exports: {} };
var hasRequiredSieve;
function requireSieve() {
  if (hasRequiredSieve) return sieve$2.exports;
  hasRequiredSieve = 1;
  (function(module, exports) {
    (function(mod) {
      mod(requireCodemirror());
    })(function(CodeMirror) {
      CodeMirror.defineMode("sieve", function(config) {
        function words(str) {
          var obj = {}, words2 = str.split(" ");
          for (var i = 0; i < words2.length; ++i) obj[words2[i]] = true;
          return obj;
        }
        var keywords = words("if elsif else stop require");
        var atoms = words("true false not");
        var indentUnit = config.indentUnit;
        function tokenBase(stream, state) {
          var ch = stream.next();
          if (ch == "/" && stream.eat("*")) {
            state.tokenize = tokenCComment;
            return tokenCComment(stream, state);
          }
          if (ch === "#") {
            stream.skipToEnd();
            return "comment";
          }
          if (ch == '"') {
            state.tokenize = tokenString(ch);
            return state.tokenize(stream, state);
          }
          if (ch == "(") {
            state._indent.push("(");
            state._indent.push("{");
            return null;
          }
          if (ch === "{") {
            state._indent.push("{");
            return null;
          }
          if (ch == ")") {
            state._indent.pop();
            state._indent.pop();
          }
          if (ch === "}") {
            state._indent.pop();
            return null;
          }
          if (ch == ",")
            return null;
          if (ch == ";")
            return null;
          if (/[{}\(\),;]/.test(ch))
            return null;
          if (/\d/.test(ch)) {
            stream.eatWhile(/[\d]/);
            stream.eat(/[KkMmGg]/);
            return "number";
          }
          if (ch == ":") {
            stream.eatWhile(/[a-zA-Z_]/);
            stream.eatWhile(/[a-zA-Z0-9_]/);
            return "operator";
          }
          stream.eatWhile(/\w/);
          var cur = stream.current();
          if (cur == "text" && stream.eat(":")) {
            state.tokenize = tokenMultiLineString;
            return "string";
          }
          if (keywords.propertyIsEnumerable(cur))
            return "keyword";
          if (atoms.propertyIsEnumerable(cur))
            return "atom";
          return null;
        }
        function tokenMultiLineString(stream, state) {
          state._multiLineString = true;
          if (!stream.sol()) {
            stream.eatSpace();
            if (stream.peek() == "#") {
              stream.skipToEnd();
              return "comment";
            }
            stream.skipToEnd();
            return "string";
          }
          if (stream.next() == "." && stream.eol()) {
            state._multiLineString = false;
            state.tokenize = tokenBase;
          }
          return "string";
        }
        function tokenCComment(stream, state) {
          var maybeEnd = false, ch;
          while ((ch = stream.next()) != null) {
            if (maybeEnd && ch == "/") {
              state.tokenize = tokenBase;
              break;
            }
            maybeEnd = ch == "*";
          }
          return "comment";
        }
        function tokenString(quote) {
          return function(stream, state) {
            var escaped = false, ch;
            while ((ch = stream.next()) != null) {
              if (ch == quote && !escaped)
                break;
              escaped = !escaped && ch == "\\";
            }
            if (!escaped) state.tokenize = tokenBase;
            return "string";
          };
        }
        return {
          startState: function(base) {
            return {
              tokenize: tokenBase,
              baseIndent: base || 0,
              _indent: []
            };
          },
          token: function(stream, state) {
            if (stream.eatSpace())
              return null;
            return (state.tokenize || tokenBase)(stream, state);
          },
          indent: function(state, _textAfter) {
            var length = state._indent.length;
            if (_textAfter && _textAfter[0] == "}")
              length--;
            if (length < 0)
              length = 0;
            return length * indentUnit;
          },
          electricChars: "}"
        };
      });
      CodeMirror.defineMIME("application/sieve", "sieve");
    });
  })();
  return sieve$2.exports;
}
var sieveExports = requireSieve();
const sieve = /* @__PURE__ */ getDefaultExportFromCjs(sieveExports);
const sieve$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: sieve
}, [sieveExports]);
export {
  sieve$1 as s
};
