import { a as requireCodemirror, b as requireOverlay, g as getDefaultExportFromCjs } from "./index-ouHvDw0s.js";
import { r as requireHtmlmixed } from "./htmlmixed-OuGreLgx.js";
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
var tornado$2 = { exports: {} };
var hasRequiredTornado;
function requireTornado() {
  if (hasRequiredTornado) return tornado$2.exports;
  hasRequiredTornado = 1;
  (function(module, exports) {
    (function(mod) {
      mod(
        requireCodemirror(),
        requireHtmlmixed(),
        requireOverlay()
      );
    })(function(CodeMirror2) {
      CodeMirror2.defineMode("tornado:inner", function() {
        var keywords = [
          "and",
          "as",
          "assert",
          "autoescape",
          "block",
          "break",
          "class",
          "comment",
          "context",
          "continue",
          "datetime",
          "def",
          "del",
          "elif",
          "else",
          "end",
          "escape",
          "except",
          "exec",
          "extends",
          "false",
          "finally",
          "for",
          "from",
          "global",
          "if",
          "import",
          "in",
          "include",
          "is",
          "json_encode",
          "lambda",
          "length",
          "linkify",
          "load",
          "module",
          "none",
          "not",
          "or",
          "pass",
          "print",
          "put",
          "raise",
          "raw",
          "return",
          "self",
          "set",
          "squeeze",
          "super",
          "true",
          "try",
          "url_escape",
          "while",
          "with",
          "without",
          "xhtml_escape",
          "yield"
        ];
        keywords = new RegExp("^((" + keywords.join(")|(") + "))\\b");
        function tokenBase(stream, state) {
          stream.eatWhile(/[^\{]/);
          var ch = stream.next();
          if (ch == "{") {
            if (ch = stream.eat(/\{|%|#/)) {
              state.tokenize = inTag(ch);
              return "tag";
            }
          }
        }
        function inTag(close) {
          if (close == "{") {
            close = "}";
          }
          return function(stream, state) {
            var ch = stream.next();
            if (ch == close && stream.eat("}")) {
              state.tokenize = tokenBase;
              return "tag";
            }
            if (stream.match(keywords)) {
              return "keyword";
            }
            return close == "#" ? "comment" : "string";
          };
        }
        return {
          startState: function() {
            return { tokenize: tokenBase };
          },
          token: function(stream, state) {
            return state.tokenize(stream, state);
          }
        };
      });
      CodeMirror2.defineMode("tornado", function(config) {
        var htmlBase = CodeMirror2.getMode(config, "text/html");
        var tornadoInner = CodeMirror2.getMode(config, "tornado:inner");
        return CodeMirror2.overlayMode(htmlBase, tornadoInner);
      });
      CodeMirror2.defineMIME("text/x-tornado", "tornado");
    });
  })();
  return tornado$2.exports;
}
var tornadoExports = requireTornado();
const tornado = /* @__PURE__ */ getDefaultExportFromCjs(tornadoExports);
const tornado$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: tornado
}, [tornadoExports]);
export {
  tornado$1 as t
};
