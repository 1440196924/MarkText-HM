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
var mbox$2 = { exports: {} };
var hasRequiredMbox;
function requireMbox() {
  if (hasRequiredMbox) return mbox$2.exports;
  hasRequiredMbox = 1;
  (function(module, exports) {
    (function(mod) {
      mod(requireCodemirror());
    })(function(CodeMirror) {
      var rfc2822 = [
        "From",
        "Sender",
        "Reply-To",
        "To",
        "Cc",
        "Bcc",
        "Message-ID",
        "In-Reply-To",
        "References",
        "Resent-From",
        "Resent-Sender",
        "Resent-To",
        "Resent-Cc",
        "Resent-Bcc",
        "Resent-Message-ID",
        "Return-Path",
        "Received"
      ];
      var rfc2822NoEmail = [
        "Date",
        "Subject",
        "Comments",
        "Keywords",
        "Resent-Date"
      ];
      CodeMirror.registerHelper("hintWords", "mbox", rfc2822.concat(rfc2822NoEmail));
      var whitespace = /^[ \t]/;
      var separator = /^From /;
      var rfc2822Header = new RegExp("^(" + rfc2822.join("|") + "): ");
      var rfc2822HeaderNoEmail = new RegExp("^(" + rfc2822NoEmail.join("|") + "): ");
      var header = /^[^:]+:/;
      var email = /^[^ ]+@[^ ]+/;
      var untilEmail = /^.*?(?=[^ ]+?@[^ ]+)/;
      var bracketedEmail = /^<.*?>/;
      var untilBracketedEmail = /^.*?(?=<.*>)/;
      function styleForHeader(header2) {
        if (header2 === "Subject") return "header";
        return "string";
      }
      function readToken(stream, state) {
        if (stream.sol()) {
          state.inSeparator = false;
          if (state.inHeader && stream.match(whitespace)) {
            return null;
          } else {
            state.inHeader = false;
            state.header = null;
          }
          if (stream.match(separator)) {
            state.inHeaders = true;
            state.inSeparator = true;
            return "atom";
          }
          var match;
          var emailPermitted = false;
          if ((match = stream.match(rfc2822HeaderNoEmail)) || (emailPermitted = true) && (match = stream.match(rfc2822Header))) {
            state.inHeaders = true;
            state.inHeader = true;
            state.emailPermitted = emailPermitted;
            state.header = match[1];
            return "atom";
          }
          if (state.inHeaders && (match = stream.match(header))) {
            state.inHeader = true;
            state.emailPermitted = true;
            state.header = match[1];
            return "atom";
          }
          state.inHeaders = false;
          stream.skipToEnd();
          return null;
        }
        if (state.inSeparator) {
          if (stream.match(email)) return "link";
          if (stream.match(untilEmail)) return "atom";
          stream.skipToEnd();
          return "atom";
        }
        if (state.inHeader) {
          var style = styleForHeader(state.header);
          if (state.emailPermitted) {
            if (stream.match(bracketedEmail)) return style + " link";
            if (stream.match(untilBracketedEmail)) return style;
          }
          stream.skipToEnd();
          return style;
        }
        stream.skipToEnd();
        return null;
      }
      CodeMirror.defineMode("mbox", function() {
        return {
          startState: function() {
            return {
              // Is in a mbox separator
              inSeparator: false,
              // Is in a mail header
              inHeader: false,
              // If bracketed email is permitted. Only applicable when inHeader
              emailPermitted: false,
              // Name of current header
              header: null,
              // Is in a region of mail headers
              inHeaders: false
            };
          },
          token: readToken,
          blankLine: function(state) {
            state.inHeaders = state.inSeparator = state.inHeader = false;
          }
        };
      });
      CodeMirror.defineMIME("application/mbox", "mbox");
    });
  })();
  return mbox$2.exports;
}
var mboxExports = requireMbox();
const mbox = /* @__PURE__ */ getDefaultExportFromCjs(mboxExports);
const mbox$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: mbox
}, [mboxExports]);
export {
  mbox$1 as m
};
