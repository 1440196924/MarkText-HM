import { a as requireCodemirror, g as getDefaultExportFromCjs } from "./index-Nx_AZTXs.js";
import { r as requireHtmlmixed } from "./htmlmixed-CrG1pW7k.js";
import { r as requireMultiplex } from "./multiplex-D-W9lwhI.js";
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
var htmlembedded$2 = { exports: {} };
var hasRequiredHtmlembedded;
function requireHtmlembedded() {
  if (hasRequiredHtmlembedded) return htmlembedded$2.exports;
  hasRequiredHtmlembedded = 1;
  (function(module, exports) {
    (function(mod) {
      mod(
        requireCodemirror(),
        requireHtmlmixed(),
        requireMultiplex()
      );
    })(function(CodeMirror) {
      CodeMirror.defineMode("htmlembedded", function(config, parserConfig) {
        var closeComment = parserConfig.closeComment || "--%>";
        return CodeMirror.multiplexingMode(CodeMirror.getMode(config, "htmlmixed"), {
          open: parserConfig.openComment || "<%--",
          close: closeComment,
          delimStyle: "comment",
          mode: { token: function(stream) {
            stream.skipTo(closeComment) || stream.skipToEnd();
            return "comment";
          } }
        }, {
          open: parserConfig.open || parserConfig.scriptStartRegex || "<%",
          close: parserConfig.close || parserConfig.scriptEndRegex || "%>",
          mode: CodeMirror.getMode(config, parserConfig.scriptingModeSpec)
        });
      }, "htmlmixed");
      CodeMirror.defineMIME("application/x-ejs", { name: "htmlembedded", scriptingModeSpec: "javascript" });
      CodeMirror.defineMIME("application/x-aspx", { name: "htmlembedded", scriptingModeSpec: "text/x-csharp" });
      CodeMirror.defineMIME("application/x-jsp", { name: "htmlembedded", scriptingModeSpec: "text/x-java" });
      CodeMirror.defineMIME("application/x-erb", { name: "htmlembedded", scriptingModeSpec: "ruby" });
    });
  })();
  return htmlembedded$2.exports;
}
var htmlembeddedExports = requireHtmlembedded();
const htmlembedded = /* @__PURE__ */ getDefaultExportFromCjs(htmlembeddedExports);
const htmlembedded$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: htmlembedded
}, [htmlembeddedExports]);
export {
  htmlembedded$1 as h
};
