import { a as requireCodemirror, g as getDefaultExportFromCjs } from "./index-ouHvDw0s.js";
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
var ttcn$2 = { exports: {} };
var hasRequiredTtcn;
function requireTtcn() {
  if (hasRequiredTtcn) return ttcn$2.exports;
  hasRequiredTtcn = 1;
  (function(module, exports) {
    (function(mod) {
      mod(requireCodemirror());
    })(function(CodeMirror) {
      CodeMirror.defineMode("ttcn", function(config, parserConfig) {
        var indentUnit = config.indentUnit, keywords = parserConfig.keywords || {}, builtin = parserConfig.builtin || {}, timerOps = parserConfig.timerOps || {}, portOps = parserConfig.portOps || {}, configOps = parserConfig.configOps || {}, verdictOps = parserConfig.verdictOps || {}, sutOps = parserConfig.sutOps || {}, functionOps = parserConfig.functionOps || {}, verdictConsts = parserConfig.verdictConsts || {}, booleanConsts = parserConfig.booleanConsts || {}, otherConsts = parserConfig.otherConsts || {}, types = parserConfig.types || {}, visibilityModifiers = parserConfig.visibilityModifiers || {}, templateMatch = parserConfig.templateMatch || {}, multiLineStrings = parserConfig.multiLineStrings, indentStatements = parserConfig.indentStatements !== false;
        var isOperatorChar = /[+\-*&@=<>!\/]/;
        var curPunc;
        function tokenBase(stream, state) {
          var ch = stream.next();
          if (ch == '"' || ch == "'") {
            state.tokenize = tokenString(ch);
            return state.tokenize(stream, state);
          }
          if (/[\[\]{}\(\),;\\:\?\.]/.test(ch)) {
            curPunc = ch;
            return "punctuation";
          }
          if (ch == "#") {
            stream.skipToEnd();
            return "atom preprocessor";
          }
          if (ch == "%") {
            stream.eatWhile(/\b/);
            return "atom ttcn3Macros";
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
            if (ch == "@") {
              if (stream.match("try") || stream.match("catch") || stream.match("lazy")) {
                return "keyword";
              }
            }
            stream.eatWhile(isOperatorChar);
            return "operator";
          }
          stream.eatWhile(/[\w\$_\xa1-\uffff]/);
          var cur = stream.current();
          if (keywords.propertyIsEnumerable(cur)) return "keyword";
          if (builtin.propertyIsEnumerable(cur)) return "builtin";
          if (timerOps.propertyIsEnumerable(cur)) return "def timerOps";
          if (configOps.propertyIsEnumerable(cur)) return "def configOps";
          if (verdictOps.propertyIsEnumerable(cur)) return "def verdictOps";
          if (portOps.propertyIsEnumerable(cur)) return "def portOps";
          if (sutOps.propertyIsEnumerable(cur)) return "def sutOps";
          if (functionOps.propertyIsEnumerable(cur)) return "def functionOps";
          if (verdictConsts.propertyIsEnumerable(cur)) return "string verdictConsts";
          if (booleanConsts.propertyIsEnumerable(cur)) return "string booleanConsts";
          if (otherConsts.propertyIsEnumerable(cur)) return "string otherConsts";
          if (types.propertyIsEnumerable(cur)) return "builtin types";
          if (visibilityModifiers.propertyIsEnumerable(cur))
            return "builtin visibilityModifiers";
          if (templateMatch.propertyIsEnumerable(cur)) return "atom templateMatch";
          return "variable";
        }
        function tokenString(quote) {
          return function(stream, state) {
            var escaped = false, next, end = false;
            while ((next = stream.next()) != null) {
              if (next == quote && !escaped) {
                var afterQuote = stream.peek();
                if (afterQuote) {
                  afterQuote = afterQuote.toLowerCase();
                  if (afterQuote == "b" || afterQuote == "h" || afterQuote == "o")
                    stream.next();
                }
                end = true;
                break;
              }
              escaped = !escaped && next == "\\";
            }
            if (end || !(escaped || multiLineStrings))
              state.tokenize = null;
            return "string";
          };
        }
        function tokenComment(stream, state) {
          var maybeEnd = false, ch;
          while (ch = stream.next()) {
            if (ch == "/" && maybeEnd) {
              state.tokenize = null;
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
          var indent = state.indented;
          if (state.context && state.context.type == "statement")
            indent = state.context.indented;
          return state.context = new Context(indent, col, type, null, state.context);
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
            if (style == "comment") return style;
            if (ctx.align == null) ctx.align = true;
            if ((curPunc == ";" || curPunc == ":" || curPunc == ",") && ctx.type == "statement") {
              popContext(state);
            } else if (curPunc == "{") pushContext(state, stream.column(), "}");
            else if (curPunc == "[") pushContext(state, stream.column(), "]");
            else if (curPunc == "(") pushContext(state, stream.column(), ")");
            else if (curPunc == "}") {
              while (ctx.type == "statement") ctx = popContext(state);
              if (ctx.type == "}") ctx = popContext(state);
              while (ctx.type == "statement") ctx = popContext(state);
            } else if (curPunc == ctx.type) popContext(state);
            else if (indentStatements && ((ctx.type == "}" || ctx.type == "top") && curPunc != ";" || ctx.type == "statement" && curPunc == "newstatement"))
              pushContext(state, stream.column(), "statement");
            state.startOfLine = false;
            return style;
          },
          electricChars: "{}",
          blockCommentStart: "/*",
          blockCommentEnd: "*/",
          lineComment: "//",
          fold: "brace"
        };
      });
      function words(str) {
        var obj = {}, words2 = str.split(" ");
        for (var i = 0; i < words2.length; ++i) obj[words2[i]] = true;
        return obj;
      }
      function def(mimes, mode) {
        if (typeof mimes == "string") mimes = [mimes];
        var words2 = [];
        function add(obj) {
          if (obj) {
            for (var prop in obj) if (obj.hasOwnProperty(prop))
              words2.push(prop);
          }
        }
        add(mode.keywords);
        add(mode.builtin);
        add(mode.timerOps);
        add(mode.portOps);
        if (words2.length) {
          mode.helperType = mimes[0];
          CodeMirror.registerHelper("hintWords", mimes[0], words2);
        }
        for (var i = 0; i < mimes.length; ++i)
          CodeMirror.defineMIME(mimes[i], mode);
      }
      def(["text/x-ttcn", "text/x-ttcn3", "text/x-ttcnpp"], {
        name: "ttcn",
        keywords: words("activate address alive all alt altstep and and4b any break case component const continue control deactivate display do else encode enumerated except exception execute extends extension external for from function goto group if import in infinity inout interleave label language length log match message mixed mod modifies module modulepar mtc noblock not not4b nowait of on optional or or4b out override param pattern port procedure record recursive rem repeat return runs select self sender set signature system template testcase to type union value valueof var variant while with xor xor4b"),
        builtin: words("bit2hex bit2int bit2oct bit2str char2int char2oct encvalue decomp decvalue float2int float2str hex2bit hex2int hex2oct hex2str int2bit int2char int2float int2hex int2oct int2str int2unichar isbound ischosen ispresent isvalue lengthof log2str oct2bit oct2char oct2hex oct2int oct2str regexp replace rnd sizeof str2bit str2float str2hex str2int str2oct substr unichar2int unichar2char enum2int"),
        types: words("anytype bitstring boolean char charstring default float hexstring integer objid octetstring universal verdicttype timer"),
        timerOps: words("read running start stop timeout"),
        portOps: words("call catch check clear getcall getreply halt raise receive reply send trigger"),
        configOps: words("create connect disconnect done kill killed map unmap"),
        verdictOps: words("getverdict setverdict"),
        sutOps: words("action"),
        functionOps: words("apply derefers refers"),
        verdictConsts: words("error fail inconc none pass"),
        booleanConsts: words("true false"),
        otherConsts: words("null NULL omit"),
        visibilityModifiers: words("private public friend"),
        templateMatch: words("complement ifpresent subset superset permutation"),
        multiLineStrings: true
      });
    });
  })();
  return ttcn$2.exports;
}
var ttcnExports = requireTtcn();
const ttcn = /* @__PURE__ */ getDefaultExportFromCjs(ttcnExports);
const ttcn$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: ttcn
}, [ttcnExports]);
export {
  ttcn$1 as t
};
