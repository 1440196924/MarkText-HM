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
var asciiarmor$2 = { exports: {} };
var hasRequiredAsciiarmor;
function requireAsciiarmor() {
  if (hasRequiredAsciiarmor) return asciiarmor$2.exports;
  hasRequiredAsciiarmor = 1;
  (function(module, exports) {
    (function(mod) {
      mod(requireCodemirror());
    })(function(CodeMirror) {
      function errorIfNotEmpty(stream) {
        var nonWS = stream.match(/^\s*\S/);
        stream.skipToEnd();
        return nonWS ? "error" : null;
      }
      CodeMirror.defineMode("asciiarmor", function() {
        return {
          token: function(stream, state) {
            var m;
            if (state.state == "top") {
              if (stream.sol() && (m = stream.match(/^-----BEGIN (.*)?-----\s*$/))) {
                state.state = "headers";
                state.type = m[1];
                return "tag";
              }
              return errorIfNotEmpty(stream);
            } else if (state.state == "headers") {
              if (stream.sol() && stream.match(/^\w+:/)) {
                state.state = "header";
                return "atom";
              } else {
                var result = errorIfNotEmpty(stream);
                if (result) state.state = "body";
                return result;
              }
            } else if (state.state == "header") {
              stream.skipToEnd();
              state.state = "headers";
              return "string";
            } else if (state.state == "body") {
              if (stream.sol() && (m = stream.match(/^-----END (.*)?-----\s*$/))) {
                if (m[1] != state.type) return "error";
                state.state = "end";
                return "tag";
              } else {
                if (stream.eatWhile(/[A-Za-z0-9+\/=]/)) {
                  return null;
                } else {
                  stream.next();
                  return "error";
                }
              }
            } else if (state.state == "end") {
              return errorIfNotEmpty(stream);
            }
          },
          blankLine: function(state) {
            if (state.state == "headers") state.state = "body";
          },
          startState: function() {
            return { state: "top", type: null };
          }
        };
      });
      CodeMirror.defineMIME("application/pgp", "asciiarmor");
      CodeMirror.defineMIME("application/pgp-encrypted", "asciiarmor");
      CodeMirror.defineMIME("application/pgp-keys", "asciiarmor");
      CodeMirror.defineMIME("application/pgp-signature", "asciiarmor");
    });
  })();
  return asciiarmor$2.exports;
}
var asciiarmorExports = requireAsciiarmor();
const asciiarmor = /* @__PURE__ */ getDefaultExportFromCjs(asciiarmorExports);
const asciiarmor$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: asciiarmor
}, [asciiarmorExports]);
export {
  asciiarmor$1 as a
};
