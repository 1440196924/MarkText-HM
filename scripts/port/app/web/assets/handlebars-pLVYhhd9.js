import { a as requireCodemirror } from "./index-Ccykuj0R.js";
import { r as requireSimple } from "./simple-BBnBDoqE.js";
import { r as requireMultiplex } from "./multiplex-CAkO-7x5.js";
var handlebars = { exports: {} };
var hasRequiredHandlebars;
function requireHandlebars() {
  if (hasRequiredHandlebars) return handlebars.exports;
  hasRequiredHandlebars = 1;
  (function(module, exports) {
    (function(mod) {
      mod(requireCodemirror(), requireSimple(), requireMultiplex());
    })(function(CodeMirror) {
      CodeMirror.defineSimpleMode("handlebars-tags", {
        start: [
          { regex: /\{\{\{/, push: "handlebars_raw", token: "tag" },
          { regex: /\{\{!--/, push: "dash_comment", token: "comment" },
          { regex: /\{\{!/, push: "comment", token: "comment" },
          { regex: /\{\{/, push: "handlebars", token: "tag" }
        ],
        handlebars_raw: [
          { regex: /\}\}\}/, pop: true, token: "tag" }
        ],
        handlebars: [
          { regex: /\}\}/, pop: true, token: "tag" },
          // Double and single quotes
          { regex: /"(?:[^\\"]|\\.)*"?/, token: "string" },
          { regex: /'(?:[^\\']|\\.)*'?/, token: "string" },
          // Handlebars keywords
          { regex: />|[#\/]([A-Za-z_]\w*)/, token: "keyword" },
          { regex: /(?:else|this)\b/, token: "keyword" },
          // Numeral
          { regex: /\d+/i, token: "number" },
          // Atoms like = and .
          { regex: /=|~|@|true|false/, token: "atom" },
          // Paths
          { regex: /(?:\.\.\/)*(?:[A-Za-z_][\w\.]*)+/, token: "variable-2" }
        ],
        dash_comment: [
          { regex: /--\}\}/, pop: true, token: "comment" },
          // Commented code
          { regex: /./, token: "comment" }
        ],
        comment: [
          { regex: /\}\}/, pop: true, token: "comment" },
          { regex: /./, token: "comment" }
        ],
        meta: {
          blockCommentStart: "{{--",
          blockCommentEnd: "--}}"
        }
      });
      CodeMirror.defineMode("handlebars", function(config, parserConfig) {
        var handlebars2 = CodeMirror.getMode(config, "handlebars-tags");
        if (!parserConfig || !parserConfig.base) return handlebars2;
        return CodeMirror.multiplexingMode(
          CodeMirror.getMode(config, parserConfig.base),
          { open: "{{", close: /\}\}\}?/, mode: handlebars2, parseDelimiters: true }
        );
      });
      CodeMirror.defineMIME("text/x-handlebars-template", "handlebars");
    });
  })();
  return handlebars.exports;
}
export {
  requireHandlebars as r
};
