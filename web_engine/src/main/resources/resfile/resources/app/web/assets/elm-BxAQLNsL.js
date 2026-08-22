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
var elm$2 = { exports: {} };
var hasRequiredElm;
function requireElm() {
  if (hasRequiredElm) return elm$2.exports;
  hasRequiredElm = 1;
  (function(module, exports) {
    (function(mod) {
      mod(requireCodemirror());
    })(function(CodeMirror) {
      CodeMirror.defineMode("elm", function() {
        function switchState(source, setState, f) {
          setState(f);
          return f(source, setState);
        }
        var lowerRE = /[a-z]/;
        var upperRE = /[A-Z]/;
        var innerRE = /[a-zA-Z0-9_]/;
        var digitRE = /[0-9]/;
        var hexRE = /[0-9A-Fa-f]/;
        var symbolRE = /[-&*+.\\/<>=?^|:]/;
        var specialRE = /[(),[\]{}]/;
        var spacesRE = /[ \v\f]/;
        function normal() {
          return function(source, setState) {
            if (source.eatWhile(spacesRE)) {
              return null;
            }
            var char = source.next();
            if (specialRE.test(char)) {
              return char === "{" && source.eat("-") ? switchState(source, setState, chompMultiComment(1)) : char === "[" && source.match("glsl|") ? switchState(source, setState, chompGlsl) : "builtin";
            }
            if (char === "'") {
              return switchState(source, setState, chompChar);
            }
            if (char === '"') {
              return source.eat('"') ? source.eat('"') ? switchState(source, setState, chompMultiString) : "string" : switchState(source, setState, chompSingleString);
            }
            if (upperRE.test(char)) {
              source.eatWhile(innerRE);
              return "variable-2";
            }
            if (lowerRE.test(char)) {
              var isDef = source.pos === 1;
              source.eatWhile(innerRE);
              return isDef ? "def" : "variable";
            }
            if (digitRE.test(char)) {
              if (char === "0") {
                if (source.eat(/[xX]/)) {
                  source.eatWhile(hexRE);
                  return "number";
                }
              } else {
                source.eatWhile(digitRE);
              }
              if (source.eat(".")) {
                source.eatWhile(digitRE);
              }
              if (source.eat(/[eE]/)) {
                source.eat(/[-+]/);
                source.eatWhile(digitRE);
              }
              return "number";
            }
            if (symbolRE.test(char)) {
              if (char === "-" && source.eat("-")) {
                source.skipToEnd();
                return "comment";
              }
              source.eatWhile(symbolRE);
              return "keyword";
            }
            if (char === "_") {
              return "keyword";
            }
            return "error";
          };
        }
        function chompMultiComment(nest) {
          if (nest == 0) {
            return normal();
          }
          return function(source, setState) {
            while (!source.eol()) {
              var char = source.next();
              if (char == "{" && source.eat("-")) {
                ++nest;
              } else if (char == "-" && source.eat("}")) {
                --nest;
                if (nest === 0) {
                  setState(normal());
                  return "comment";
                }
              }
            }
            setState(chompMultiComment(nest));
            return "comment";
          };
        }
        function chompMultiString(source, setState) {
          while (!source.eol()) {
            var char = source.next();
            if (char === '"' && source.eat('"') && source.eat('"')) {
              setState(normal());
              return "string";
            }
          }
          return "string";
        }
        function chompSingleString(source, setState) {
          while (source.skipTo('\\"')) {
            source.next();
            source.next();
          }
          if (source.skipTo('"')) {
            source.next();
            setState(normal());
            return "string";
          }
          source.skipToEnd();
          setState(normal());
          return "error";
        }
        function chompChar(source, setState) {
          while (source.skipTo("\\'")) {
            source.next();
            source.next();
          }
          if (source.skipTo("'")) {
            source.next();
            setState(normal());
            return "string";
          }
          source.skipToEnd();
          setState(normal());
          return "error";
        }
        function chompGlsl(source, setState) {
          while (!source.eol()) {
            var char = source.next();
            if (char === "|" && source.eat("]")) {
              setState(normal());
              return "string";
            }
          }
          return "string";
        }
        var wellKnownWords = {
          case: 1,
          of: 1,
          as: 1,
          if: 1,
          then: 1,
          else: 1,
          let: 1,
          in: 1,
          type: 1,
          alias: 1,
          module: 1,
          where: 1,
          import: 1,
          exposing: 1,
          port: 1
        };
        return {
          startState: function() {
            return { f: normal() };
          },
          copyState: function(s) {
            return { f: s.f };
          },
          lineComment: "--",
          token: function(stream, state) {
            var type = state.f(stream, function(s) {
              state.f = s;
            });
            var word = stream.current();
            return wellKnownWords.hasOwnProperty(word) ? "keyword" : type;
          }
        };
      });
      CodeMirror.defineMIME("text/x-elm", "elm");
    });
  })();
  return elm$2.exports;
}
var elmExports = requireElm();
const elm = /* @__PURE__ */ getDefaultExportFromCjs(elmExports);
const elm$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: elm
}, [elmExports]);
export {
  elm$1 as e
};
