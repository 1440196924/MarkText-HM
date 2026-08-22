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
var properties$2 = { exports: {} };
var hasRequiredProperties;
function requireProperties() {
  if (hasRequiredProperties) return properties$2.exports;
  hasRequiredProperties = 1;
  (function(module, exports) {
    (function(mod) {
      mod(requireCodemirror());
    })(function(CodeMirror) {
      CodeMirror.defineMode("properties", function() {
        return {
          token: function(stream, state) {
            var sol = stream.sol() || state.afterSection;
            var eol = stream.eol();
            state.afterSection = false;
            if (sol) {
              if (state.nextMultiline) {
                state.inMultiline = true;
                state.nextMultiline = false;
              } else {
                state.position = "def";
              }
            }
            if (eol && !state.nextMultiline) {
              state.inMultiline = false;
              state.position = "def";
            }
            if (sol) {
              while (stream.eatSpace()) {
              }
            }
            var ch = stream.next();
            if (sol && (ch === "#" || ch === "!" || ch === ";")) {
              state.position = "comment";
              stream.skipToEnd();
              return "comment";
            } else if (sol && ch === "[") {
              state.afterSection = true;
              stream.skipTo("]");
              stream.eat("]");
              return "header";
            } else if (ch === "=" || ch === ":") {
              state.position = "quote";
              return null;
            } else if (ch === "\\" && state.position === "quote") {
              if (stream.eol()) {
                state.nextMultiline = true;
              }
            }
            return state.position;
          },
          startState: function() {
            return {
              position: "def",
              // Current position, "def", "quote" or "comment"
              nextMultiline: false,
              // Is the next line multiline value
              inMultiline: false,
              // Is the current line a multiline value
              afterSection: false
              // Did we just open a section
            };
          }
        };
      });
      CodeMirror.defineMIME("text/x-properties", "properties");
      CodeMirror.defineMIME("text/x-ini", "properties");
    });
  })();
  return properties$2.exports;
}
var propertiesExports = requireProperties();
const properties = /* @__PURE__ */ getDefaultExportFromCjs(propertiesExports);
const properties$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: properties
}, [propertiesExports]);
export {
  properties$1 as p
};
