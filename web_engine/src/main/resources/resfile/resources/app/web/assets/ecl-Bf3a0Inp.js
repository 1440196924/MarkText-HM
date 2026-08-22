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
var ecl$2 = { exports: {} };
var hasRequiredEcl;
function requireEcl() {
  if (hasRequiredEcl) return ecl$2.exports;
  hasRequiredEcl = 1;
  (function(module, exports) {
    (function(mod) {
      mod(requireCodemirror());
    })(function(CodeMirror2) {
      CodeMirror2.defineMode("ecl", function(config) {
        function words(str) {
          var obj = {}, words2 = str.split(" ");
          for (var i = 0; i < words2.length; ++i) obj[words2[i]] = true;
          return obj;
        }
        function metaHook(stream, state) {
          if (!state.startOfLine) return false;
          stream.skipToEnd();
          return "meta";
        }
        var indentUnit = config.indentUnit;
        var keyword = words("abs acos allnodes ascii asin asstring atan atan2 ave case choose choosen choosesets clustersize combine correlation cos cosh count covariance cron dataset dedup define denormalize distribute distributed distribution ebcdic enth error evaluate event eventextra eventname exists exp failcode failmessage fetch fromunicode getisvalid global graph group hash hash32 hash64 hashcrc hashmd5 having if index intformat isvalid iterate join keyunicode length library limit ln local log loop map matched matchlength matchposition matchtext matchunicode max merge mergejoin min nolocal nonempty normalize parse pipe power preload process project pull random range rank ranked realformat recordof regexfind regexreplace regroup rejected rollup round roundup row rowdiff sample set sin sinh sizeof soapcall sort sorted sqrt stepped stored sum table tan tanh thisnode topn tounicode transfer trim truncate typeof ungroup unicodeorder variance which workunit xmldecode xmlencode xmltext xmlunicode");
        var variable = words("apply assert build buildindex evaluate fail keydiff keypatch loadxml nothor notify output parallel sequential soapcall wait");
        var variable_2 = words("__compressed__ all and any as atmost before beginc++ best between case const counter csv descend encrypt end endc++ endmacro except exclusive expire export extend false few first flat from full function group header heading hole ifblock import in interface joined keep keyed last left limit load local locale lookup macro many maxcount maxlength min skew module named nocase noroot noscan nosort not of only opt or outer overwrite packed partition penalty physicallength pipe quote record relationship repeat return right scan self separator service shared skew skip sql store terminator thor threshold token transform trim true type unicodeorder unsorted validate virtual whole wild within xml xpath");
        var variable_3 = words("ascii big_endian boolean data decimal ebcdic integer pattern qstring real record rule set of string token udecimal unicode unsigned varstring varunicode");
        var builtin = words("checkpoint deprecated failcode failmessage failure global independent onwarning persist priority recovery stored success wait when");
        var blockKeywords = words("catch class do else finally for if switch try while");
        var atoms = words("true false null");
        var hooks = { "#": metaHook };
        var isOperatorChar = /[+\-*&%=<>!?|\/]/;
        var curPunc;
        function tokenBase(stream, state) {
          var ch = stream.next();
          if (hooks[ch]) {
            var result = hooks[ch](stream, state);
            if (result !== false) return result;
          }
          if (ch == '"' || ch == "'") {
            state.tokenize = tokenString(ch);
            return state.tokenize(stream, state);
          }
          if (/[\[\]{}\(\),;\:\.]/.test(ch)) {
            curPunc = ch;
            return null;
          }
          if (/\d/.test(ch)) {
            stream.eatWhile(/[\w\.]/);
            return "number";
          }
          if (ch == "/") {
            if (stream.eat("*")) {
              state.tokenize = tokenComment;
              return tokenComment(stream, state);
            }
            if (stream.eat("/")) {
              stream.skipToEnd();
              return "comment";
            }
          }
          if (isOperatorChar.test(ch)) {
            stream.eatWhile(isOperatorChar);
            return "operator";
          }
          stream.eatWhile(/[\w\$_]/);
          var cur = stream.current().toLowerCase();
          if (keyword.propertyIsEnumerable(cur)) {
            if (blockKeywords.propertyIsEnumerable(cur)) curPunc = "newstatement";
            return "keyword";
          } else if (variable.propertyIsEnumerable(cur)) {
            if (blockKeywords.propertyIsEnumerable(cur)) curPunc = "newstatement";
            return "variable";
          } else if (variable_2.propertyIsEnumerable(cur)) {
            if (blockKeywords.propertyIsEnumerable(cur)) curPunc = "newstatement";
            return "variable-2";
          } else if (variable_3.propertyIsEnumerable(cur)) {
            if (blockKeywords.propertyIsEnumerable(cur)) curPunc = "newstatement";
            return "variable-3";
          } else if (builtin.propertyIsEnumerable(cur)) {
            if (blockKeywords.propertyIsEnumerable(cur)) curPunc = "newstatement";
            return "builtin";
          } else {
            var i = cur.length - 1;
            while (i >= 0 && (!isNaN(cur[i]) || cur[i] == "_"))
              --i;
            if (i > 0) {
              var cur2 = cur.substr(0, i + 1);
              if (variable_3.propertyIsEnumerable(cur2)) {
                if (blockKeywords.propertyIsEnumerable(cur2)) curPunc = "newstatement";
                return "variable-3";
              }
            }
          }
          if (atoms.propertyIsEnumerable(cur)) return "atom";
          return null;
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
            if (end || !escaped)
              state.tokenize = tokenBase;
            return "string";
          };
        }
        function tokenComment(stream, state) {
          var maybeEnd = false, ch;
          while (ch = stream.next()) {
            if (ch == "/" && maybeEnd) {
              state.tokenize = tokenBase;
              break;
            }
            maybeEnd = ch == "*";
          }
          return "comment";
        }
        function Context(indented, column, type, align, prev) {
          this.indented = indented;
          this.column = column;
          this.type = type;
          this.align = align;
          this.prev = prev;
        }
        function pushContext(state, col, type) {
          return state.context = new Context(state.indented, col, type, null, state.context);
        }
        function popContext(state) {
          var t = state.context.type;
          if (t == ")" || t == "]" || t == "}")
            state.indented = state.context.indented;
          return state.context = state.context.prev;
        }
        return {
          startState: function(basecolumn) {
            return {
              tokenize: null,
              context: new Context((basecolumn || 0) - indentUnit, 0, "top", false),
              indented: 0,
              startOfLine: true
            };
          },
          token: function(stream, state) {
            var ctx = state.context;
            if (stream.sol()) {
              if (ctx.align == null) ctx.align = false;
              state.indented = stream.indentation();
              state.startOfLine = true;
            }
            if (stream.eatSpace()) return null;
            curPunc = null;
            var style = (state.tokenize || tokenBase)(stream, state);
            if (style == "comment" || style == "meta") return style;
            if (ctx.align == null) ctx.align = true;
            if ((curPunc == ";" || curPunc == ":") && ctx.type == "statement") popContext(state);
            else if (curPunc == "{") pushContext(state, stream.column(), "}");
            else if (curPunc == "[") pushContext(state, stream.column(), "]");
            else if (curPunc == "(") pushContext(state, stream.column(), ")");
            else if (curPunc == "}") {
              while (ctx.type == "statement") ctx = popContext(state);
              if (ctx.type == "}") ctx = popContext(state);
              while (ctx.type == "statement") ctx = popContext(state);
            } else if (curPunc == ctx.type) popContext(state);
            else if (ctx.type == "}" || ctx.type == "top" || ctx.type == "statement" && curPunc == "newstatement")
              pushContext(state, stream.column(), "statement");
            state.startOfLine = false;
            return style;
          },
          indent: function(state, textAfter) {
            if (state.tokenize != tokenBase && state.tokenize != null) return 0;
            var ctx = state.context, firstChar = textAfter && textAfter.charAt(0);
            if (ctx.type == "statement" && firstChar == "}") ctx = ctx.prev;
            var closing = firstChar == ctx.type;
            if (ctx.type == "statement") return ctx.indented + (firstChar == "{" ? 0 : indentUnit);
            else if (ctx.align) return ctx.column + (closing ? 0 : 1);
            else return ctx.indented + (closing ? 0 : indentUnit);
          },
          electricChars: "{}"
        };
      });
      CodeMirror2.defineMIME("text/x-ecl", "ecl");
    });
  })();
  return ecl$2.exports;
}
var eclExports = requireEcl();
const ecl = /* @__PURE__ */ getDefaultExportFromCjs(eclExports);
const ecl$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: ecl
}, [eclExports]);
export {
  ecl$1 as e
};
