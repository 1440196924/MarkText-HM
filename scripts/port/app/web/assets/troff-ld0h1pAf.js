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
var troff$2 = { exports: {} };
var hasRequiredTroff;
function requireTroff() {
  if (hasRequiredTroff) return troff$2.exports;
  hasRequiredTroff = 1;
  (function(module, exports) {
    (function(mod) {
      mod(requireCodemirror());
    })(function(CodeMirror) {
      CodeMirror.defineMode("troff", function() {
        var words = {};
        function tokenBase(stream) {
          if (stream.eatSpace()) return null;
          var sol = stream.sol();
          var ch = stream.next();
          if (ch === "\\") {
            if (stream.match("fB") || stream.match("fR") || stream.match("fI") || stream.match("u") || stream.match("d") || stream.match("%") || stream.match("&")) {
              return "string";
            }
            if (stream.match("m[")) {
              stream.skipTo("]");
              stream.next();
              return "string";
            }
            if (stream.match("s+") || stream.match("s-")) {
              stream.eatWhile(/[\d-]/);
              return "string";
            }
            if (stream.match("(") || stream.match("*(")) {
              stream.eatWhile(/[\w-]/);
              return "string";
            }
            return "string";
          }
          if (sol && (ch === "." || ch === "'")) {
            if (stream.eat("\\") && stream.eat('"')) {
              stream.skipToEnd();
              return "comment";
            }
          }
          if (sol && ch === ".") {
            if (stream.match("B ") || stream.match("I ") || stream.match("R ")) {
              return "attribute";
            }
            if (stream.match("TH ") || stream.match("SH ") || stream.match("SS ") || stream.match("HP ")) {
              stream.skipToEnd();
              return "quote";
            }
            if (stream.match(/[A-Z]/) && stream.match(/[A-Z]/) || stream.match(/[a-z]/) && stream.match(/[a-z]/)) {
              return "attribute";
            }
          }
          stream.eatWhile(/[\w-]/);
          var cur = stream.current();
          return words.hasOwnProperty(cur) ? words[cur] : null;
        }
        function tokenize(stream, state) {
          return (state.tokens[0] || tokenBase)(stream, state);
        }
        return {
          startState: function() {
            return { tokens: [] };
          },
          token: function(stream, state) {
            return tokenize(stream, state);
          }
        };
      });
      CodeMirror.defineMIME("text/troff", "troff");
      CodeMirror.defineMIME("text/x-troff", "troff");
      CodeMirror.defineMIME("application/x-troff", "troff");
    });
  })();
  return troff$2.exports;
}
var troffExports = requireTroff();
const troff = /* @__PURE__ */ getDefaultExportFromCjs(troffExports);
const troff$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: troff
}, [troffExports]);
export {
  troff$1 as t
};
