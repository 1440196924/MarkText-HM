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
var diff$2 = { exports: {} };
var hasRequiredDiff;
function requireDiff() {
  if (hasRequiredDiff) return diff$2.exports;
  hasRequiredDiff = 1;
  (function(module, exports) {
    (function(mod) {
      mod(requireCodemirror());
    })(function(CodeMirror) {
      CodeMirror.defineMode("diff", function() {
        var TOKEN_NAMES = {
          "+": "positive",
          "-": "negative",
          "@": "meta"
        };
        return {
          token: function(stream) {
            var tw_pos = stream.string.search(/[\t ]+?$/);
            if (!stream.sol() || tw_pos === 0) {
              stream.skipToEnd();
              return ("error " + (TOKEN_NAMES[stream.string.charAt(0)] || "")).replace(/ $/, "");
            }
            var token_name = TOKEN_NAMES[stream.peek()] || stream.skipToEnd();
            if (tw_pos === -1) {
              stream.skipToEnd();
            } else {
              stream.pos = tw_pos;
            }
            return token_name;
          }
        };
      });
      CodeMirror.defineMIME("text/x-diff", "diff");
    });
  })();
  return diff$2.exports;
}
var diffExports = requireDiff();
const diff = /* @__PURE__ */ getDefaultExportFromCjs(diffExports);
const diff$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: diff
}, [diffExports]);
export {
  diff$1 as d
};
