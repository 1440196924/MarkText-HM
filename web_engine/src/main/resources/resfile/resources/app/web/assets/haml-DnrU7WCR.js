import { a as requireCodemirror, g as getDefaultExportFromCjs } from "./index-1FfQlz0g.js";
import { r as requireHtmlmixed } from "./htmlmixed-Oba1y30d.js";
import { r as requireRuby } from "./ruby-Orvddlar.js";
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
var haml$2 = { exports: {} };
var hasRequiredHaml;
function requireHaml() {
  if (hasRequiredHaml) return haml$2.exports;
  hasRequiredHaml = 1;
  (function(module, exports) {
    (function(mod) {
      mod(requireCodemirror(), requireHtmlmixed(), requireRuby());
    })(function(CodeMirror) {
      CodeMirror.defineMode("haml", function(config) {
        var htmlMode = CodeMirror.getMode(config, { name: "htmlmixed" });
        var rubyMode = CodeMirror.getMode(config, "ruby");
        function rubyInQuote(endQuote) {
          return function(stream, state) {
            var ch = stream.peek();
            if (ch == endQuote && state.rubyState.tokenize.length == 1) {
              stream.next();
              state.tokenize = html;
              return "closeAttributeTag";
            } else {
              return ruby(stream, state);
            }
          };
        }
        function ruby(stream, state) {
          if (stream.match("-#")) {
            stream.skipToEnd();
            return "comment";
          }
          return rubyMode.token(stream, state.rubyState);
        }
        function html(stream, state) {
          var ch = stream.peek();
          if (state.previousToken.style == "comment") {
            if (state.indented > state.previousToken.indented) {
              stream.skipToEnd();
              return "commentLine";
            }
          }
          if (state.startOfLine) {
            if (ch == "!" && stream.match("!!")) {
              stream.skipToEnd();
              return "tag";
            } else if (stream.match(/^%[\w:#\.]+=/)) {
              state.tokenize = ruby;
              return "hamlTag";
            } else if (stream.match(/^%[\w:]+/)) {
              return "hamlTag";
            } else if (ch == "/") {
              stream.skipToEnd();
              return "comment";
            }
          }
          if (state.startOfLine || state.previousToken.style == "hamlTag") {
            if (ch == "#" || ch == ".") {
              stream.match(/[\w-#\.]*/);
              return "hamlAttribute";
            }
          }
          if (state.startOfLine && !stream.match("-->", false) && (ch == "=" || ch == "-")) {
            state.tokenize = ruby;
            return state.tokenize(stream, state);
          }
          if (state.previousToken.style == "hamlTag" || state.previousToken.style == "closeAttributeTag" || state.previousToken.style == "hamlAttribute") {
            if (ch == "(") {
              state.tokenize = rubyInQuote(")");
              return state.tokenize(stream, state);
            } else if (ch == "{") {
              if (!stream.match(/^\{%.*/)) {
                state.tokenize = rubyInQuote("}");
                return state.tokenize(stream, state);
              }
            }
          }
          return htmlMode.token(stream, state.htmlState);
        }
        return {
          // default to html mode
          startState: function() {
            var htmlState = CodeMirror.startState(htmlMode);
            var rubyState = CodeMirror.startState(rubyMode);
            return {
              htmlState,
              rubyState,
              indented: 0,
              previousToken: { style: null, indented: 0 },
              tokenize: html
            };
          },
          copyState: function(state) {
            return {
              htmlState: CodeMirror.copyState(htmlMode, state.htmlState),
              rubyState: CodeMirror.copyState(rubyMode, state.rubyState),
              indented: state.indented,
              previousToken: state.previousToken,
              tokenize: state.tokenize
            };
          },
          token: function(stream, state) {
            if (stream.sol()) {
              state.indented = stream.indentation();
              state.startOfLine = true;
            }
            if (stream.eatSpace()) return null;
            var style = state.tokenize(stream, state);
            state.startOfLine = false;
            if (style && style != "commentLine") {
              state.previousToken = { style, indented: state.indented };
            }
            if (stream.eol() && state.tokenize == ruby) {
              stream.backUp(1);
              var ch = stream.peek();
              stream.next();
              if (ch && ch != ",") {
                state.tokenize = html;
              }
            }
            if (style == "hamlTag") {
              style = "tag";
            } else if (style == "commentLine") {
              style = "comment";
            } else if (style == "hamlAttribute") {
              style = "attribute";
            } else if (style == "closeAttributeTag") {
              style = null;
            }
            return style;
          }
        };
      }, "htmlmixed", "ruby");
      CodeMirror.defineMIME("text/x-haml", "haml");
    });
  })();
  return haml$2.exports;
}
var hamlExports = requireHaml();
const haml = /* @__PURE__ */ getDefaultExportFromCjs(hamlExports);
const haml$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: haml
}, [hamlExports]);
export {
  haml$1 as h
};
