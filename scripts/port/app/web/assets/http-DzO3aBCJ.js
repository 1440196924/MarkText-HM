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
var http$2 = { exports: {} };
var hasRequiredHttp;
function requireHttp() {
  if (hasRequiredHttp) return http$2.exports;
  hasRequiredHttp = 1;
  (function(module, exports) {
    (function(mod) {
      mod(requireCodemirror());
    })(function(CodeMirror) {
      CodeMirror.defineMode("http", function() {
        function failFirstLine(stream, state) {
          stream.skipToEnd();
          state.cur = header;
          return "error";
        }
        function start(stream, state) {
          if (stream.match(/^HTTP\/\d\.\d/)) {
            state.cur = responseStatusCode;
            return "keyword";
          } else if (stream.match(/^[A-Z]+/) && /[ \t]/.test(stream.peek())) {
            state.cur = requestPath;
            return "keyword";
          } else {
            return failFirstLine(stream, state);
          }
        }
        function responseStatusCode(stream, state) {
          var code = stream.match(/^\d+/);
          if (!code) return failFirstLine(stream, state);
          state.cur = responseStatusText;
          var status = Number(code[0]);
          if (status >= 100 && status < 200) {
            return "positive informational";
          } else if (status >= 200 && status < 300) {
            return "positive success";
          } else if (status >= 300 && status < 400) {
            return "positive redirect";
          } else if (status >= 400 && status < 500) {
            return "negative client-error";
          } else if (status >= 500 && status < 600) {
            return "negative server-error";
          } else {
            return "error";
          }
        }
        function responseStatusText(stream, state) {
          stream.skipToEnd();
          state.cur = header;
          return null;
        }
        function requestPath(stream, state) {
          stream.eatWhile(/\S/);
          state.cur = requestProtocol;
          return "string-2";
        }
        function requestProtocol(stream, state) {
          if (stream.match(/^HTTP\/\d\.\d$/)) {
            state.cur = header;
            return "keyword";
          } else {
            return failFirstLine(stream, state);
          }
        }
        function header(stream) {
          if (stream.sol() && !stream.eat(/[ \t]/)) {
            if (stream.match(/^.*?:/)) {
              return "atom";
            } else {
              stream.skipToEnd();
              return "error";
            }
          } else {
            stream.skipToEnd();
            return "string";
          }
        }
        function body(stream) {
          stream.skipToEnd();
          return null;
        }
        return {
          token: function(stream, state) {
            var cur = state.cur;
            if (cur != header && cur != body && stream.eatSpace()) return null;
            return cur(stream, state);
          },
          blankLine: function(state) {
            state.cur = body;
          },
          startState: function() {
            return { cur: start };
          }
        };
      });
      CodeMirror.defineMIME("message/http", "http");
    });
  })();
  return http$2.exports;
}
var httpExports = requireHttp();
const http = /* @__PURE__ */ getDefaultExportFromCjs(httpExports);
const http$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: http
}, [httpExports]);
export {
  http$1 as h
};
