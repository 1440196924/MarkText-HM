import { a as requireCodemirror, b as requireOverlay, g as getDefaultExportFromCjs } from "./index-CsLNvl25.js";
import { r as requireHtmlmixed } from "./htmlmixed-C2Yz3npX.js";
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
var django$2 = { exports: {} };
var hasRequiredDjango;
function requireDjango() {
  if (hasRequiredDjango) return django$2.exports;
  hasRequiredDjango = 1;
  (function(module, exports) {
    (function(mod) {
      mod(
        requireCodemirror(),
        requireHtmlmixed(),
        requireOverlay()
      );
    })(function(CodeMirror) {
      CodeMirror.defineMode("django:inner", function() {
        var keywords = [
          "block",
          "endblock",
          "for",
          "endfor",
          "true",
          "false",
          "filter",
          "endfilter",
          "loop",
          "none",
          "self",
          "super",
          "if",
          "elif",
          "endif",
          "as",
          "else",
          "import",
          "with",
          "endwith",
          "without",
          "context",
          "ifequal",
          "endifequal",
          "ifnotequal",
          "endifnotequal",
          "extends",
          "include",
          "load",
          "comment",
          "endcomment",
          "empty",
          "url",
          "static",
          "trans",
          "blocktrans",
          "endblocktrans",
          "now",
          "regroup",
          "lorem",
          "ifchanged",
          "endifchanged",
          "firstof",
          "debug",
          "cycle",
          "csrf_token",
          "autoescape",
          "endautoescape",
          "spaceless",
          "endspaceless",
          "ssi",
          "templatetag",
          "verbatim",
          "endverbatim",
          "widthratio"
        ], filters = [
          "add",
          "addslashes",
          "capfirst",
          "center",
          "cut",
          "date",
          "default",
          "default_if_none",
          "dictsort",
          "dictsortreversed",
          "divisibleby",
          "escape",
          "escapejs",
          "filesizeformat",
          "first",
          "floatformat",
          "force_escape",
          "get_digit",
          "iriencode",
          "join",
          "last",
          "length",
          "length_is",
          "linebreaks",
          "linebreaksbr",
          "linenumbers",
          "ljust",
          "lower",
          "make_list",
          "phone2numeric",
          "pluralize",
          "pprint",
          "random",
          "removetags",
          "rjust",
          "safe",
          "safeseq",
          "slice",
          "slugify",
          "stringformat",
          "striptags",
          "time",
          "timesince",
          "timeuntil",
          "title",
          "truncatechars",
          "truncatechars_html",
          "truncatewords",
          "truncatewords_html",
          "unordered_list",
          "upper",
          "urlencode",
          "urlize",
          "urlizetrunc",
          "wordcount",
          "wordwrap",
          "yesno"
        ], operators = ["==", "!=", "<", ">", "<=", ">="], wordOperators = ["in", "not", "or", "and"];
        keywords = new RegExp("^\\b(" + keywords.join("|") + ")\\b");
        filters = new RegExp("^\\b(" + filters.join("|") + ")\\b");
        operators = new RegExp("^\\b(" + operators.join("|") + ")\\b");
        wordOperators = new RegExp("^\\b(" + wordOperators.join("|") + ")\\b");
        function tokenBase(stream, state) {
          if (stream.match("{{")) {
            state.tokenize = inVariable;
            return "tag";
          } else if (stream.match("{%")) {
            state.tokenize = inTag;
            return "tag";
          } else if (stream.match("{#")) {
            state.tokenize = inComment;
            return "comment";
          }
          while (stream.next() != null && !stream.match(/\{[{%#]/, false)) {
          }
          return null;
        }
        function inString(delimiter, previousTokenizer) {
          return function(stream, state) {
            if (!state.escapeNext && stream.eat(delimiter)) {
              state.tokenize = previousTokenizer;
            } else {
              if (state.escapeNext) {
                state.escapeNext = false;
              }
              var ch = stream.next();
              if (ch == "\\") {
                state.escapeNext = true;
              }
            }
            return "string";
          };
        }
        function inVariable(stream, state) {
          if (state.waitDot) {
            state.waitDot = false;
            if (stream.peek() != ".") {
              return "null";
            }
            if (stream.match(/\.\W+/)) {
              return "error";
            } else if (stream.eat(".")) {
              state.waitProperty = true;
              return "null";
            } else {
              throw Error("Unexpected error while waiting for property.");
            }
          }
          if (state.waitPipe) {
            state.waitPipe = false;
            if (stream.peek() != "|") {
              return "null";
            }
            if (stream.match(/\.\W+/)) {
              return "error";
            } else if (stream.eat("|")) {
              state.waitFilter = true;
              return "null";
            } else {
              throw Error("Unexpected error while waiting for filter.");
            }
          }
          if (state.waitProperty) {
            state.waitProperty = false;
            if (stream.match(/\b(\w+)\b/)) {
              state.waitDot = true;
              state.waitPipe = true;
              return "property";
            }
          }
          if (state.waitFilter) {
            state.waitFilter = false;
            if (stream.match(filters)) {
              return "variable-2";
            }
          }
          if (stream.eatSpace()) {
            state.waitProperty = false;
            return "null";
          }
          if (stream.match(/\b\d+(\.\d+)?\b/)) {
            return "number";
          }
          if (stream.match("'")) {
            state.tokenize = inString("'", state.tokenize);
            return "string";
          } else if (stream.match('"')) {
            state.tokenize = inString('"', state.tokenize);
            return "string";
          }
          if (stream.match(/\b(\w+)\b/) && !state.foundVariable) {
            state.waitDot = true;
            state.waitPipe = true;
            return "variable";
          }
          if (stream.match("}}")) {
            state.waitProperty = null;
            state.waitFilter = null;
            state.waitDot = null;
            state.waitPipe = null;
            state.tokenize = tokenBase;
            return "tag";
          }
          stream.next();
          return "null";
        }
        function inTag(stream, state) {
          if (state.waitDot) {
            state.waitDot = false;
            if (stream.peek() != ".") {
              return "null";
            }
            if (stream.match(/\.\W+/)) {
              return "error";
            } else if (stream.eat(".")) {
              state.waitProperty = true;
              return "null";
            } else {
              throw Error("Unexpected error while waiting for property.");
            }
          }
          if (state.waitPipe) {
            state.waitPipe = false;
            if (stream.peek() != "|") {
              return "null";
            }
            if (stream.match(/\.\W+/)) {
              return "error";
            } else if (stream.eat("|")) {
              state.waitFilter = true;
              return "null";
            } else {
              throw Error("Unexpected error while waiting for filter.");
            }
          }
          if (state.waitProperty) {
            state.waitProperty = false;
            if (stream.match(/\b(\w+)\b/)) {
              state.waitDot = true;
              state.waitPipe = true;
              return "property";
            }
          }
          if (state.waitFilter) {
            state.waitFilter = false;
            if (stream.match(filters)) {
              return "variable-2";
            }
          }
          if (stream.eatSpace()) {
            state.waitProperty = false;
            return "null";
          }
          if (stream.match(/\b\d+(\.\d+)?\b/)) {
            return "number";
          }
          if (stream.match("'")) {
            state.tokenize = inString("'", state.tokenize);
            return "string";
          } else if (stream.match('"')) {
            state.tokenize = inString('"', state.tokenize);
            return "string";
          }
          if (stream.match(operators)) {
            return "operator";
          }
          if (stream.match(wordOperators)) {
            return "keyword";
          }
          var keywordMatch = stream.match(keywords);
          if (keywordMatch) {
            if (keywordMatch[0] == "comment") {
              state.blockCommentTag = true;
            }
            return "keyword";
          }
          if (stream.match(/\b(\w+)\b/)) {
            state.waitDot = true;
            state.waitPipe = true;
            return "variable";
          }
          if (stream.match("%}")) {
            state.waitProperty = null;
            state.waitFilter = null;
            state.waitDot = null;
            state.waitPipe = null;
            if (state.blockCommentTag) {
              state.blockCommentTag = false;
              state.tokenize = inBlockComment;
            } else {
              state.tokenize = tokenBase;
            }
            return "tag";
          }
          stream.next();
          return "null";
        }
        function inComment(stream, state) {
          if (stream.match(/^.*?#\}/)) state.tokenize = tokenBase;
          else stream.skipToEnd();
          return "comment";
        }
        function inBlockComment(stream, state) {
          if (stream.match(/\{%\s*endcomment\s*%\}/, false)) {
            state.tokenize = inTag;
            stream.match("{%");
            return "tag";
          } else {
            stream.next();
            return "comment";
          }
        }
        return {
          startState: function() {
            return { tokenize: tokenBase };
          },
          token: function(stream, state) {
            return state.tokenize(stream, state);
          },
          blockCommentStart: "{% comment %}",
          blockCommentEnd: "{% endcomment %}"
        };
      });
      CodeMirror.defineMode("django", function(config) {
        var htmlBase = CodeMirror.getMode(config, "text/html");
        var djangoInner = CodeMirror.getMode(config, "django:inner");
        return CodeMirror.overlayMode(htmlBase, djangoInner);
      });
      CodeMirror.defineMIME("text/x-django", "django");
    });
  })();
  return django$2.exports;
}
var djangoExports = requireDjango();
const django = /* @__PURE__ */ getDefaultExportFromCjs(djangoExports);
const django$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: django
}, [djangoExports]);
export {
  django$1 as d
};
