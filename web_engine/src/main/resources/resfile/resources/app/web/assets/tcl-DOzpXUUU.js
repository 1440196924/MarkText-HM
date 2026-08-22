import { a as requireCodemirror, g as getDefaultExportFromCjs } from "./index-Ccykuj0R.js";
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
var tcl$2 = { exports: {} };
var hasRequiredTcl;
function requireTcl() {
  if (hasRequiredTcl) return tcl$2.exports;
  hasRequiredTcl = 1;
  (function(module, exports) {
    (function(mod) {
      mod(requireCodemirror());
    })(function(CodeMirror2) {
      CodeMirror2.defineMode("tcl", function() {
        function parseWords(str) {
          var obj = {}, words = str.split(" ");
          for (var i = 0; i < words.length; ++i) obj[words[i]] = true;
          return obj;
        }
        var keywords = parseWords("Tcl safe after append array auto_execok auto_import auto_load auto_mkindex auto_mkindex_old auto_qualify auto_reset bgerror binary break catch cd close concat continue dde eof encoding error eval exec exit expr fblocked fconfigure fcopy file fileevent filename filename flush for foreach format gets glob global history http if incr info interp join lappend lindex linsert list llength load lrange lreplace lsearch lset lsort memory msgcat namespace open package parray pid pkg::create pkg_mkIndex proc puts pwd re_syntax read regex regexp registry regsub rename resource return scan seek set socket source split string subst switch tcl_endOfWord tcl_findLibrary tcl_startOfNextWord tcl_wordBreakAfter tcl_startOfPreviousWord tcl_wordBreakBefore tcltest tclvars tell time trace unknown unset update uplevel upvar variable vwait");
        var functions = parseWords("if elseif else and not or eq ne in ni for foreach while switch");
        var isOperatorChar = /[+\-*&%=<>!?^\/\|]/;
        function chain(stream, state, f) {
          state.tokenize = f;
          return f(stream, state);
        }
        function tokenBase(stream, state) {
          var beforeParams = state.beforeParams;
          state.beforeParams = false;
          var ch = stream.next();
          if ((ch == '"' || ch == "'") && state.inParams) {
            return chain(stream, state, tokenString(ch));
          } else if (/[\[\]{}\(\),;\.]/.test(ch)) {
            if (ch == "(" && beforeParams) state.inParams = true;
            else if (ch == ")") state.inParams = false;
            return null;
          } else if (/\d/.test(ch)) {
            stream.eatWhile(/[\w\.]/);
            return "number";
          } else if (ch == "#") {
            if (stream.eat("*"))
              return chain(stream, state, tokenComment);
            if (ch == "#" && stream.match(/ *\[ *\[/))
              return chain(stream, state, tokenUnparsed);
            stream.skipToEnd();
            return "comment";
          } else if (ch == '"') {
            stream.skipTo(/"/);
            return "comment";
          } else if (ch == "$") {
            stream.eatWhile(/[$_a-z0-9A-Z\.{:]/);
            stream.eatWhile(/}/);
            state.beforeParams = true;
            return "builtin";
          } else if (isOperatorChar.test(ch)) {
            stream.eatWhile(isOperatorChar);
            return "comment";
          } else {
            stream.eatWhile(/[\w\$_{}\xa1-\uffff]/);
            var word = stream.current().toLowerCase();
            if (keywords && keywords.propertyIsEnumerable(word))
              return "keyword";
            if (functions && functions.propertyIsEnumerable(word)) {
              state.beforeParams = true;
              return "keyword";
            }
            return null;
          }
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
            if (end) state.tokenize = tokenBase;
            return "string";
          };
        }
        function tokenComment(stream, state) {
          var maybeEnd = false, ch;
          while (ch = stream.next()) {
            if (ch == "#" && maybeEnd) {
              state.tokenize = tokenBase;
              break;
            }
            maybeEnd = ch == "*";
          }
          return "comment";
        }
        function tokenUnparsed(stream, state) {
          var maybeEnd = 0, ch;
          while (ch = stream.next()) {
            if (ch == "#" && maybeEnd == 2) {
              state.tokenize = tokenBase;
              break;
            }
            if (ch == "]")
              maybeEnd++;
            else if (ch != " ")
              maybeEnd = 0;
          }
          return "meta";
        }
        return {
          startState: function() {
            return {
              tokenize: tokenBase,
              beforeParams: false,
              inParams: false
            };
          },
          token: function(stream, state) {
            if (stream.eatSpace()) return null;
            return state.tokenize(stream, state);
          },
          lineComment: "#"
        };
      });
      CodeMirror2.defineMIME("text/x-tcl", "tcl");
    });
  })();
  return tcl$2.exports;
}
var tclExports = requireTcl();
const tcl = /* @__PURE__ */ getDefaultExportFromCjs(tclExports);
const tcl$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: tcl
}, [tclExports]);
export {
  tcl$1 as t
};
