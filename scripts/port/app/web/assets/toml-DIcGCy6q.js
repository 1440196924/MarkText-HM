import { a as requireCodemirror, g as getDefaultExportFromCjs } from "./index-CsLNvl25.js";
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
var toml$2 = { exports: {} };
var hasRequiredToml;
function requireToml() {
  if (hasRequiredToml) return toml$2.exports;
  hasRequiredToml = 1;
  (function(module, exports) {
    (function(mod) {
      mod(requireCodemirror());
    })(function(CodeMirror) {
      CodeMirror.defineMode("toml", function() {
        return {
          startState: function() {
            return {
              inString: false,
              stringType: "",
              lhs: true,
              inArray: 0
            };
          },
          token: function(stream, state) {
            if (!state.inString && (stream.peek() == '"' || stream.peek() == "'")) {
              state.stringType = stream.peek();
              stream.next();
              state.inString = true;
            }
            if (stream.sol() && state.inArray === 0) {
              state.lhs = true;
            }
            if (state.inString) {
              while (state.inString && !stream.eol()) {
                if (stream.peek() === state.stringType) {
                  stream.next();
                  state.inString = false;
                } else if (stream.peek() === "\\") {
                  stream.next();
                  stream.next();
                } else {
                  stream.match(/^.[^\\\"\']*/);
                }
              }
              return state.lhs ? "property string" : "string";
            } else if (state.inArray && stream.peek() === "]") {
              stream.next();
              state.inArray--;
              return "bracket";
            } else if (state.lhs && stream.peek() === "[" && stream.skipTo("]")) {
              stream.next();
              if (stream.peek() === "]") stream.next();
              return "atom";
            } else if (stream.peek() === "#") {
              stream.skipToEnd();
              return "comment";
            } else if (stream.eatSpace()) {
              return null;
            } else if (state.lhs && stream.eatWhile(function(c) {
              return c != "=" && c != " ";
            })) {
              return "property";
            } else if (state.lhs && stream.peek() === "=") {
              stream.next();
              state.lhs = false;
              return null;
            } else if (!state.lhs && stream.match(/^\d\d\d\d[\d\-\:\.T]*Z/)) {
              return "atom";
            } else if (!state.lhs && (stream.match("true") || stream.match("false"))) {
              return "atom";
            } else if (!state.lhs && stream.peek() === "[") {
              state.inArray++;
              stream.next();
              return "bracket";
            } else if (!state.lhs && stream.match(/^\-?\d+(?:\.\d+)?/)) {
              return "number";
            } else if (!stream.eatSpace()) {
              stream.next();
            }
            return null;
          }
        };
      });
      CodeMirror.defineMIME("text/x-toml", "toml");
    });
  })();
  return toml$2.exports;
}
var tomlExports = requireToml();
const toml = /* @__PURE__ */ getDefaultExportFromCjs(tomlExports);
const toml$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: toml
}, [tomlExports]);
export {
  toml$1 as t
};
