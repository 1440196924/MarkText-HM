import { a as requireCodemirror, g as getDefaultExportFromCjs } from "./index-Ccykuj0R.js";
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
var rpm$2 = { exports: {} };
var hasRequiredRpm;
function requireRpm() {
  if (hasRequiredRpm) return rpm$2.exports;
  hasRequiredRpm = 1;
  (function(module, exports) {
    (function(mod) {
      mod(requireCodemirror());
    })(function(CodeMirror) {
      CodeMirror.defineMode("rpm-changes", function() {
        var headerSeparator = /^-+$/;
        var headerLine = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)  ?\d{1,2} \d{2}:\d{2}(:\d{2})? [A-Z]{3,4} \d{4} - /;
        var simpleEmail = /^[\w+.-]+@[\w.-]+/;
        return {
          token: function(stream) {
            if (stream.sol()) {
              if (stream.match(headerSeparator)) {
                return "tag";
              }
              if (stream.match(headerLine)) {
                return "tag";
              }
            }
            if (stream.match(simpleEmail)) {
              return "string";
            }
            stream.next();
            return null;
          }
        };
      });
      CodeMirror.defineMIME("text/x-rpm-changes", "rpm-changes");
      CodeMirror.defineMode("rpm-spec", function() {
        var arch = /^(i386|i586|i686|x86_64|ppc64le|ppc64|ppc|ia64|s390x|s390|sparc64|sparcv9|sparc|noarch|alphaev6|alpha|hppa|mipsel)/;
        var preamble = /^[a-zA-Z0-9()]+:/;
        var section = /^%(debug_package|package|description|prep|build|install|files|clean|changelog|preinstall|preun|postinstall|postun|pretrans|posttrans|pre|post|triggerin|triggerun|verifyscript|check|triggerpostun|triggerprein|trigger)/;
        var control_flow_complex = /^%(ifnarch|ifarch|if)/;
        var control_flow_simple = /^%(else|endif)/;
        var operators = /^(\!|\?|\<\=|\<|\>\=|\>|\=\=|\&\&|\|\|)/;
        return {
          startState: function() {
            return {
              controlFlow: false,
              macroParameters: false,
              section: false
            };
          },
          token: function(stream, state) {
            var ch = stream.peek();
            if (ch == "#") {
              stream.skipToEnd();
              return "comment";
            }
            if (stream.sol()) {
              if (stream.match(preamble)) {
                return "header";
              }
              if (stream.match(section)) {
                return "atom";
              }
            }
            if (stream.match(/^\$\w+/)) {
              return "def";
            }
            if (stream.match(/^\$\{\w+\}/)) {
              return "def";
            }
            if (stream.match(control_flow_simple)) {
              return "keyword";
            }
            if (stream.match(control_flow_complex)) {
              state.controlFlow = true;
              return "keyword";
            }
            if (state.controlFlow) {
              if (stream.match(operators)) {
                return "operator";
              }
              if (stream.match(/^(\d+)/)) {
                return "number";
              }
              if (stream.eol()) {
                state.controlFlow = false;
              }
            }
            if (stream.match(arch)) {
              if (stream.eol()) {
                state.controlFlow = false;
              }
              return "number";
            }
            if (stream.match(/^%[\w]+/)) {
              if (stream.match("(")) {
                state.macroParameters = true;
              }
              return "keyword";
            }
            if (state.macroParameters) {
              if (stream.match(/^\d+/)) {
                return "number";
              }
              if (stream.match(")")) {
                state.macroParameters = false;
                return "keyword";
              }
            }
            if (stream.match(/^%\{\??[\w \-\:\!]+\}/)) {
              if (stream.eol()) {
                state.controlFlow = false;
              }
              return "def";
            }
            stream.next();
            return null;
          }
        };
      });
      CodeMirror.defineMIME("text/x-rpm-spec", "rpm-spec");
    });
  })();
  return rpm$2.exports;
}
var rpmExports = requireRpm();
const rpm = /* @__PURE__ */ getDefaultExportFromCjs(rpmExports);
const rpm$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: rpm
}, [rpmExports]);
export {
  rpm$1 as r
};
