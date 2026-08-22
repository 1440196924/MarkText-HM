import { a as requireCodemirror, g as getDefaultExportFromCjs } from "./index-Ccykuj0R.js";
import { r as requireHaskell } from "./haskell-Dw3Uy3aY.js";
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
var haskellLiterate$2 = { exports: {} };
var hasRequiredHaskellLiterate;
function requireHaskellLiterate() {
  if (hasRequiredHaskellLiterate) return haskellLiterate$2.exports;
  hasRequiredHaskellLiterate = 1;
  (function(module, exports) {
    (function(mod) {
      mod(requireCodemirror(), requireHaskell());
    })(function(CodeMirror) {
      CodeMirror.defineMode("haskell-literate", function(config, parserConfig) {
        var baseMode = CodeMirror.getMode(config, parserConfig && parserConfig.base || "haskell");
        return {
          startState: function() {
            return {
              inCode: false,
              baseState: CodeMirror.startState(baseMode)
            };
          },
          token: function(stream, state) {
            if (stream.sol()) {
              if (state.inCode = stream.eat(">"))
                return "meta";
            }
            if (state.inCode) {
              return baseMode.token(stream, state.baseState);
            } else {
              stream.skipToEnd();
              return "comment";
            }
          },
          innerMode: function(state) {
            return state.inCode ? { state: state.baseState, mode: baseMode } : null;
          }
        };
      }, "haskell");
      CodeMirror.defineMIME("text/x-literate-haskell", "haskell-literate");
    });
  })();
  return haskellLiterate$2.exports;
}
var haskellLiterateExports = requireHaskellLiterate();
const haskellLiterate = /* @__PURE__ */ getDefaultExportFromCjs(haskellLiterateExports);
const haskellLiterate$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: haskellLiterate
}, [haskellLiterateExports]);
export {
  haskellLiterate$1 as h
};
