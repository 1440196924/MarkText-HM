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
var vb$2 = { exports: {} };
var hasRequiredVb;
function requireVb() {
  if (hasRequiredVb) return vb$2.exports;
  hasRequiredVb = 1;
  (function(module, exports) {
    (function(mod) {
      mod(requireCodemirror());
    })(function(CodeMirror) {
      CodeMirror.defineMode("vb", function(conf, parserConf) {
        var ERRORCLASS = "error";
        function wordRegexp(words) {
          return new RegExp("^((" + words.join(")|(") + "))\\b", "i");
        }
        var singleOperators = new RegExp("^[\\+\\-\\*/%&\\\\|\\^~<>!]");
        var singleDelimiters = new RegExp("^[\\(\\)\\[\\]\\{\\}@,:`=;\\.]");
        var doubleOperators = new RegExp("^((==)|(<>)|(<=)|(>=)|(<>)|(<<)|(>>)|(//)|(\\*\\*))");
        var doubleDelimiters = new RegExp("^((\\+=)|(\\-=)|(\\*=)|(%=)|(/=)|(&=)|(\\|=)|(\\^=))");
        var tripleDelimiters = new RegExp("^((//=)|(>>=)|(<<=)|(\\*\\*=))");
        var identifiers = new RegExp("^[_A-Za-z][_A-Za-z0-9]*");
        var openingKeywords = ["class", "module", "sub", "enum", "select", "while", "if", "function", "get", "set", "property", "try", "structure", "synclock", "using", "with"];
        var middleKeywords = ["else", "elseif", "case", "catch", "finally"];
        var endKeywords = ["next", "loop"];
        var operatorKeywords = ["and", "andalso", "or", "orelse", "xor", "in", "not", "is", "isnot", "like"];
        var wordOperators = wordRegexp(operatorKeywords);
        var commonKeywords = ["#const", "#else", "#elseif", "#end", "#if", "#region", "addhandler", "addressof", "alias", "as", "byref", "byval", "cbool", "cbyte", "cchar", "cdate", "cdbl", "cdec", "cint", "clng", "cobj", "compare", "const", "continue", "csbyte", "cshort", "csng", "cstr", "cuint", "culng", "cushort", "declare", "default", "delegate", "dim", "directcast", "each", "erase", "error", "event", "exit", "explicit", "false", "for", "friend", "gettype", "goto", "handles", "implements", "imports", "infer", "inherits", "interface", "isfalse", "istrue", "lib", "me", "mod", "mustinherit", "mustoverride", "my", "mybase", "myclass", "namespace", "narrowing", "new", "nothing", "notinheritable", "notoverridable", "of", "off", "on", "operator", "option", "optional", "out", "overloads", "overridable", "overrides", "paramarray", "partial", "private", "protected", "public", "raiseevent", "readonly", "redim", "removehandler", "resume", "return", "shadows", "shared", "static", "step", "stop", "strict", "then", "throw", "to", "true", "trycast", "typeof", "until", "until", "when", "widening", "withevents", "writeonly"];
        var commontypes = ["object", "boolean", "char", "string", "byte", "sbyte", "short", "ushort", "int16", "uint16", "integer", "uinteger", "int32", "uint32", "long", "ulong", "int64", "uint64", "decimal", "single", "double", "float", "date", "datetime", "intptr", "uintptr"];
        var keywords = wordRegexp(commonKeywords);
        var types = wordRegexp(commontypes);
        var stringPrefixes = '"';
        var opening = wordRegexp(openingKeywords);
        var middle = wordRegexp(middleKeywords);
        var closing = wordRegexp(endKeywords);
        var doubleClosing = wordRegexp(["end"]);
        var doOpening = wordRegexp(["do"]);
        CodeMirror.registerHelper("hintWords", "vb", openingKeywords.concat(middleKeywords).concat(endKeywords).concat(operatorKeywords).concat(commonKeywords).concat(commontypes));
        function indent(_stream, state) {
          state.currentIndent++;
        }
        function dedent(_stream, state) {
          state.currentIndent--;
        }
        function tokenBase(stream, state) {
          if (stream.eatSpace()) {
            return null;
          }
          var ch = stream.peek();
          if (ch === "'") {
            stream.skipToEnd();
            return "comment";
          }
          if (stream.match(/^((&H)|(&O))?[0-9\.a-f]/i, false)) {
            var floatLiteral = false;
            if (stream.match(/^\d*\.\d+F?/i)) {
              floatLiteral = true;
            } else if (stream.match(/^\d+\.\d*F?/)) {
              floatLiteral = true;
            } else if (stream.match(/^\.\d+F?/)) {
              floatLiteral = true;
            }
            if (floatLiteral) {
              stream.eat(/J/i);
              return "number";
            }
            var intLiteral = false;
            if (stream.match(/^&H[0-9a-f]+/i)) {
              intLiteral = true;
            } else if (stream.match(/^&O[0-7]+/i)) {
              intLiteral = true;
            } else if (stream.match(/^[1-9]\d*F?/)) {
              stream.eat(/J/i);
              intLiteral = true;
            } else if (stream.match(/^0(?![\dx])/i)) {
              intLiteral = true;
            }
            if (intLiteral) {
              stream.eat(/L/i);
              return "number";
            }
          }
          if (stream.match(stringPrefixes)) {
            state.tokenize = tokenStringFactory(stream.current());
            return state.tokenize(stream, state);
          }
          if (stream.match(tripleDelimiters) || stream.match(doubleDelimiters)) {
            return null;
          }
          if (stream.match(doubleOperators) || stream.match(singleOperators) || stream.match(wordOperators)) {
            return "operator";
          }
          if (stream.match(singleDelimiters)) {
            return null;
          }
          if (stream.match(doOpening)) {
            indent(stream, state);
            state.doInCurrentLine = true;
            return "keyword";
          }
          if (stream.match(opening)) {
            if (!state.doInCurrentLine)
              indent(stream, state);
            else
              state.doInCurrentLine = false;
            return "keyword";
          }
          if (stream.match(middle)) {
            return "keyword";
          }
          if (stream.match(doubleClosing)) {
            dedent(stream, state);
            dedent(stream, state);
            return "keyword";
          }
          if (stream.match(closing)) {
            dedent(stream, state);
            return "keyword";
          }
          if (stream.match(types)) {
            return "keyword";
          }
          if (stream.match(keywords)) {
            return "keyword";
          }
          if (stream.match(identifiers)) {
            return "variable";
          }
          stream.next();
          return ERRORCLASS;
        }
        function tokenStringFactory(delimiter) {
          var singleline = delimiter.length == 1;
          var OUTCLASS = "string";
          return function(stream, state) {
            while (!stream.eol()) {
              stream.eatWhile(/[^'"]/);
              if (stream.match(delimiter)) {
                state.tokenize = tokenBase;
                return OUTCLASS;
              } else {
                stream.eat(/['"]/);
              }
            }
            if (singleline) {
              if (parserConf.singleLineStringErrors) {
                return ERRORCLASS;
              } else {
                state.tokenize = tokenBase;
              }
            }
            return OUTCLASS;
          };
        }
        function tokenLexer(stream, state) {
          var style = state.tokenize(stream, state);
          var current = stream.current();
          if (current === ".") {
            style = state.tokenize(stream, state);
            if (style === "variable") {
              return "variable";
            } else {
              return ERRORCLASS;
            }
          }
          var delimiter_index = "[({".indexOf(current);
          if (delimiter_index !== -1) {
            indent(stream, state);
          }
          delimiter_index = "])}".indexOf(current);
          if (delimiter_index !== -1) {
            if (dedent(stream, state)) {
              return ERRORCLASS;
            }
          }
          return style;
        }
        var external = {
          electricChars: "dDpPtTfFeE ",
          startState: function() {
            return {
              tokenize: tokenBase,
              lastToken: null,
              currentIndent: 0,
              nextLineIndent: 0,
              doInCurrentLine: false
            };
          },
          token: function(stream, state) {
            if (stream.sol()) {
              state.currentIndent += state.nextLineIndent;
              state.nextLineIndent = 0;
              state.doInCurrentLine = 0;
            }
            var style = tokenLexer(stream, state);
            state.lastToken = { style, content: stream.current() };
            return style;
          },
          indent: function(state, textAfter) {
            var trueText = textAfter.replace(/^\s+|\s+$/g, "");
            if (trueText.match(closing) || trueText.match(doubleClosing) || trueText.match(middle)) return conf.indentUnit * (state.currentIndent - 1);
            if (state.currentIndent < 0) return 0;
            return state.currentIndent * conf.indentUnit;
          },
          lineComment: "'"
        };
        return external;
      });
      CodeMirror.defineMIME("text/x-vb", "vb");
    });
  })();
  return vb$2.exports;
}
var vbExports = requireVb();
const vb = /* @__PURE__ */ getDefaultExportFromCjs(vbExports);
const vb$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: vb
}, [vbExports]);
export {
  vb$1 as v
};
