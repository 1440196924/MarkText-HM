import { a as requireCodemirror, g as getDefaultExportFromCjs } from "./index-CsLNvl25.js";
import { r as requireMultiplex } from "./multiplex-CT9ZTEwt.js";
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
var twig$2 = { exports: {} };
var hasRequiredTwig;
function requireTwig() {
  if (hasRequiredTwig) return twig$2.exports;
  hasRequiredTwig = 1;
  (function(module, exports) {
    (function(mod) {
      mod(requireCodemirror(), requireMultiplex());
    })(function(CodeMirror) {
      CodeMirror.defineMode("twig:inner", function() {
        var keywords = ["and", "as", "autoescape", "endautoescape", "block", "do", "endblock", "else", "elseif", "extends", "for", "endfor", "embed", "endembed", "filter", "endfilter", "flush", "from", "if", "endif", "in", "is", "include", "import", "not", "or", "set", "spaceless", "endspaceless", "with", "endwith", "trans", "endtrans", "blocktrans", "endblocktrans", "macro", "endmacro", "use", "verbatim", "endverbatim"], operator = /^[+\-*&%=<>!?|~^]/, sign = /^[:\[\(\{]/, atom = ["true", "false", "null", "empty", "defined", "divisibleby", "divisible by", "even", "odd", "iterable", "sameas", "same as"], number = /^(\d[+\-\*\/])?\d+(\.\d+)?/;
        keywords = new RegExp("((" + keywords.join(")|(") + "))\\b");
        atom = new RegExp("((" + atom.join(")|(") + "))\\b");
        function tokenBase(stream, state) {
          var ch = stream.peek();
          if (state.incomment) {
            if (!stream.skipTo("#}")) {
              stream.skipToEnd();
            } else {
              stream.eatWhile(/\#|}/);
              state.incomment = false;
            }
            return "comment";
          } else if (state.intag) {
            if (state.operator) {
              state.operator = false;
              if (stream.match(atom)) {
                return "atom";
              }
              if (stream.match(number)) {
                return "number";
              }
            }
            if (state.sign) {
              state.sign = false;
              if (stream.match(atom)) {
                return "atom";
              }
              if (stream.match(number)) {
                return "number";
              }
            }
            if (state.instring) {
              if (ch == state.instring) {
                state.instring = false;
              }
              stream.next();
              return "string";
            } else if (ch == "'" || ch == '"') {
              state.instring = ch;
              stream.next();
              return "string";
            } else if (stream.match(state.intag + "}") || stream.eat("-") && stream.match(state.intag + "}")) {
              state.intag = false;
              return "tag";
            } else if (stream.match(operator)) {
              state.operator = true;
              return "operator";
            } else if (stream.match(sign)) {
              state.sign = true;
            } else {
              if (stream.eat(" ") || stream.sol()) {
                if (stream.match(keywords)) {
                  return "keyword";
                }
                if (stream.match(atom)) {
                  return "atom";
                }
                if (stream.match(number)) {
                  return "number";
                }
                if (stream.sol()) {
                  stream.next();
                }
              } else {
                stream.next();
              }
            }
            return "variable";
          } else if (stream.eat("{")) {
            if (stream.eat("#")) {
              state.incomment = true;
              if (!stream.skipTo("#}")) {
                stream.skipToEnd();
              } else {
                stream.eatWhile(/\#|}/);
                state.incomment = false;
              }
              return "comment";
            } else if (ch = stream.eat(/\{|%/)) {
              state.intag = ch;
              if (ch == "{") {
                state.intag = "}";
              }
              stream.eat("-");
              return "tag";
            }
          }
          stream.next();
        }
        return {
          startState: function() {
            return {};
          },
          token: function(stream, state) {
            return tokenBase(stream, state);
          }
        };
      });
      CodeMirror.defineMode("twig", function(config, parserConfig) {
        var twigInner = CodeMirror.getMode(config, "twig:inner");
        if (!parserConfig || !parserConfig.base) return twigInner;
        return CodeMirror.multiplexingMode(
          CodeMirror.getMode(config, parserConfig.base),
          {
            open: /\{[{#%]/,
            close: /[}#%]\}/,
            mode: twigInner,
            parseDelimiters: true
          }
        );
      });
      CodeMirror.defineMIME("text/x-twig", "twig");
    });
  })();
  return twig$2.exports;
}
var twigExports = requireTwig();
const twig = /* @__PURE__ */ getDefaultExportFromCjs(twigExports);
const twig$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: twig
}, [twigExports]);
export {
  twig$1 as t
};
