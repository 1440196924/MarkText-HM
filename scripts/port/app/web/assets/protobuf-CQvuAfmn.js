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
var protobuf$2 = { exports: {} };
var hasRequiredProtobuf;
function requireProtobuf() {
  if (hasRequiredProtobuf) return protobuf$2.exports;
  hasRequiredProtobuf = 1;
  (function(module, exports) {
    (function(mod) {
      mod(requireCodemirror());
    })(function(CodeMirror) {
      function wordRegexp(words) {
        return new RegExp("^((" + words.join(")|(") + "))\\b", "i");
      }
      var keywordArray = [
        "package",
        "message",
        "import",
        "syntax",
        "required",
        "optional",
        "repeated",
        "reserved",
        "default",
        "extensions",
        "packed",
        "bool",
        "bytes",
        "double",
        "enum",
        "float",
        "string",
        "int32",
        "int64",
        "uint32",
        "uint64",
        "sint32",
        "sint64",
        "fixed32",
        "fixed64",
        "sfixed32",
        "sfixed64",
        "option",
        "service",
        "rpc",
        "returns"
      ];
      var keywords = wordRegexp(keywordArray);
      CodeMirror.registerHelper("hintWords", "protobuf", keywordArray);
      var identifiers = new RegExp("^[_A-Za-z¡-￿][_A-Za-z0-9¡-￿]*");
      function tokenBase(stream) {
        if (stream.eatSpace()) return null;
        if (stream.match("//")) {
          stream.skipToEnd();
          return "comment";
        }
        if (stream.match(/^[0-9\.+-]/, false)) {
          if (stream.match(/^[+-]?0x[0-9a-fA-F]+/))
            return "number";
          if (stream.match(/^[+-]?\d*\.\d+([EeDd][+-]?\d+)?/))
            return "number";
          if (stream.match(/^[+-]?\d+([EeDd][+-]?\d+)?/))
            return "number";
        }
        if (stream.match(/^"([^"]|(""))*"/)) {
          return "string";
        }
        if (stream.match(/^'([^']|(''))*'/)) {
          return "string";
        }
        if (stream.match(keywords)) {
          return "keyword";
        }
        if (stream.match(identifiers)) {
          return "variable";
        }
        stream.next();
        return null;
      }
      CodeMirror.defineMode("protobuf", function() {
        return {
          token: tokenBase,
          fold: "brace"
        };
      });
      CodeMirror.defineMIME("text/x-protobuf", "protobuf");
    });
  })();
  return protobuf$2.exports;
}
var protobufExports = requireProtobuf();
const protobuf = /* @__PURE__ */ getDefaultExportFromCjs(protobufExports);
const protobuf$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: protobuf
}, [protobufExports]);
export {
  protobuf$1 as p
};
