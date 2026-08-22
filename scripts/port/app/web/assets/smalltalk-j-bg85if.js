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
var smalltalk$2 = { exports: {} };
var hasRequiredSmalltalk;
function requireSmalltalk() {
  if (hasRequiredSmalltalk) return smalltalk$2.exports;
  hasRequiredSmalltalk = 1;
  (function(module, exports) {
    (function(mod) {
      mod(requireCodemirror());
    })(function(CodeMirror) {
      CodeMirror.defineMode("smalltalk", function(config) {
        var specialChars = /[+\-\/\\*~<>=@%|&?!.,:;^]/;
        var keywords = /true|false|nil|self|super|thisContext/;
        var Context = function(tokenizer, parent) {
          this.next = tokenizer;
          this.parent = parent;
        };
        var Token = function(name, context, eos) {
          this.name = name;
          this.context = context;
          this.eos = eos;
        };
        var State = function() {
          this.context = new Context(next, null);
          this.expectVariable = true;
          this.indentation = 0;
          this.userIndentationDelta = 0;
        };
        State.prototype.userIndent = function(indentation) {
          this.userIndentationDelta = indentation > 0 ? indentation / config.indentUnit - this.indentation : 0;
        };
        var next = function(stream, context, state) {
          var token = new Token(null, context, false);
          var aChar = stream.next();
          if (aChar === '"') {
            token = nextComment(stream, new Context(nextComment, context));
          } else if (aChar === "'") {
            token = nextString(stream, new Context(nextString, context));
          } else if (aChar === "#") {
            if (stream.peek() === "'") {
              stream.next();
              token = nextSymbol(stream, new Context(nextSymbol, context));
            } else {
              if (stream.eatWhile(/[^\s.{}\[\]()]/))
                token.name = "string-2";
              else
                token.name = "meta";
            }
          } else if (aChar === "$") {
            if (stream.next() === "<") {
              stream.eatWhile(/[^\s>]/);
              stream.next();
            }
            token.name = "string-2";
          } else if (aChar === "|" && state.expectVariable) {
            token.context = new Context(nextTemporaries, context);
          } else if (/[\[\]{}()]/.test(aChar)) {
            token.name = "bracket";
            token.eos = /[\[{(]/.test(aChar);
            if (aChar === "[") {
              state.indentation++;
            } else if (aChar === "]") {
              state.indentation = Math.max(0, state.indentation - 1);
            }
          } else if (specialChars.test(aChar)) {
            stream.eatWhile(specialChars);
            token.name = "operator";
            token.eos = aChar !== ";";
          } else if (/\d/.test(aChar)) {
            stream.eatWhile(/[\w\d]/);
            token.name = "number";
          } else if (/[\w_]/.test(aChar)) {
            stream.eatWhile(/[\w\d_]/);
            token.name = state.expectVariable ? keywords.test(stream.current()) ? "keyword" : "variable" : null;
          } else {
            token.eos = state.expectVariable;
          }
          return token;
        };
        var nextComment = function(stream, context) {
          stream.eatWhile(/[^"]/);
          return new Token("comment", stream.eat('"') ? context.parent : context, true);
        };
        var nextString = function(stream, context) {
          stream.eatWhile(/[^']/);
          return new Token("string", stream.eat("'") ? context.parent : context, false);
        };
        var nextSymbol = function(stream, context) {
          stream.eatWhile(/[^']/);
          return new Token("string-2", stream.eat("'") ? context.parent : context, false);
        };
        var nextTemporaries = function(stream, context) {
          var token = new Token(null, context, false);
          var aChar = stream.next();
          if (aChar === "|") {
            token.context = context.parent;
            token.eos = true;
          } else {
            stream.eatWhile(/[^|]/);
            token.name = "variable";
          }
          return token;
        };
        return {
          startState: function() {
            return new State();
          },
          token: function(stream, state) {
            state.userIndent(stream.indentation());
            if (stream.eatSpace()) {
              return null;
            }
            var token = state.context.next(stream, state.context, state);
            state.context = token.context;
            state.expectVariable = token.eos;
            return token.name;
          },
          blankLine: function(state) {
            state.userIndent(0);
          },
          indent: function(state, textAfter) {
            var i = state.context.next === next && textAfter && textAfter.charAt(0) === "]" ? -1 : state.userIndentationDelta;
            return (state.indentation + i) * config.indentUnit;
          },
          electricChars: "]"
        };
      });
      CodeMirror.defineMIME("text/x-stsrc", { name: "smalltalk" });
    });
  })();
  return smalltalk$2.exports;
}
var smalltalkExports = requireSmalltalk();
const smalltalk = /* @__PURE__ */ getDefaultExportFromCjs(smalltalkExports);
const smalltalk$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: smalltalk
}, [smalltalkExports]);
export {
  smalltalk$1 as s
};
