import { a as requireCodemirror, g as getDefaultExportFromCjs } from "./index-1FfQlz0g.js";
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
var cypher$2 = { exports: {} };
var hasRequiredCypher;
function requireCypher() {
  if (hasRequiredCypher) return cypher$2.exports;
  hasRequiredCypher = 1;
  (function(module, exports) {
    (function(mod) {
      mod(requireCodemirror());
    })(function(CodeMirror) {
      var wordRegexp = function(words) {
        return new RegExp("^(?:" + words.join("|") + ")$", "i");
      };
      CodeMirror.defineMode("cypher", function(config) {
        var tokenBase = function(stream) {
          curPunc = null;
          var ch = stream.next();
          if (ch === '"') {
            stream.match(/^[^"]*"/);
            return "string";
          }
          if (ch === "'") {
            stream.match(/^[^']*'/);
            return "string";
          }
          if (/[{}\(\),\.;\[\]]/.test(ch)) {
            curPunc = ch;
            return "node";
          } else if (ch === "/" && stream.eat("/")) {
            stream.skipToEnd();
            return "comment";
          } else if (operatorChars.test(ch)) {
            stream.eatWhile(operatorChars);
            return null;
          } else {
            stream.eatWhile(/[_\w\d]/);
            if (stream.eat(":")) {
              stream.eatWhile(/[\w\d_\-]/);
              return "atom";
            }
            var word = stream.current();
            if (funcs.test(word)) return "builtin";
            if (preds.test(word)) return "def";
            if (keywords.test(word) || systemKeywords.test(word)) return "keyword";
            return "variable";
          }
        };
        var pushContext = function(state, type, col) {
          return state.context = {
            prev: state.context,
            indent: state.indent,
            col,
            type
          };
        };
        var popContext = function(state) {
          state.indent = state.context.indent;
          return state.context = state.context.prev;
        };
        var indentUnit = config.indentUnit;
        var curPunc;
        var funcs = wordRegexp(["abs", "acos", "allShortestPaths", "asin", "atan", "atan2", "avg", "ceil", "coalesce", "collect", "cos", "cot", "count", "degrees", "e", "endnode", "exp", "extract", "filter", "floor", "haversin", "head", "id", "keys", "labels", "last", "left", "length", "log", "log10", "lower", "ltrim", "max", "min", "node", "nodes", "percentileCont", "percentileDisc", "pi", "radians", "rand", "range", "reduce", "rel", "relationship", "relationships", "replace", "reverse", "right", "round", "rtrim", "shortestPath", "sign", "sin", "size", "split", "sqrt", "startnode", "stdev", "stdevp", "str", "substring", "sum", "tail", "tan", "timestamp", "toFloat", "toInt", "toString", "trim", "type", "upper"]);
        var preds = wordRegexp(["all", "and", "any", "contains", "exists", "has", "in", "none", "not", "or", "single", "xor"]);
        var keywords = wordRegexp(["as", "asc", "ascending", "assert", "by", "case", "commit", "constraint", "create", "csv", "cypher", "delete", "desc", "descending", "detach", "distinct", "drop", "else", "end", "ends", "explain", "false", "fieldterminator", "foreach", "from", "headers", "in", "index", "is", "join", "limit", "load", "match", "merge", "null", "on", "optional", "order", "periodic", "profile", "remove", "return", "scan", "set", "skip", "start", "starts", "then", "true", "union", "unique", "unwind", "using", "when", "where", "with", "call", "yield"]);
        var systemKeywords = wordRegexp(["access", "active", "assign", "all", "alter", "as", "catalog", "change", "copy", "create", "constraint", "constraints", "current", "database", "databases", "dbms", "default", "deny", "drop", "element", "elements", "exists", "from", "grant", "graph", "graphs", "if", "index", "indexes", "label", "labels", "management", "match", "name", "names", "new", "node", "nodes", "not", "of", "on", "or", "password", "populated", "privileges", "property", "read", "relationship", "relationships", "remove", "replace", "required", "revoke", "role", "roles", "set", "show", "start", "status", "stop", "suspended", "to", "traverse", "type", "types", "user", "users", "with", "write"]);
        var operatorChars = /[*+\-<>=&|~%^]/;
        return {
          startState: function() {
            return {
              tokenize: tokenBase,
              context: null,
              indent: 0,
              col: 0
            };
          },
          token: function(stream, state) {
            if (stream.sol()) {
              if (state.context && state.context.align == null) {
                state.context.align = false;
              }
              state.indent = stream.indentation();
            }
            if (stream.eatSpace()) {
              return null;
            }
            var style = state.tokenize(stream, state);
            if (style !== "comment" && state.context && state.context.align == null && state.context.type !== "pattern") {
              state.context.align = true;
            }
            if (curPunc === "(") {
              pushContext(state, ")", stream.column());
            } else if (curPunc === "[") {
              pushContext(state, "]", stream.column());
            } else if (curPunc === "{") {
              pushContext(state, "}", stream.column());
            } else if (/[\]\}\)]/.test(curPunc)) {
              while (state.context && state.context.type === "pattern") {
                popContext(state);
              }
              if (state.context && curPunc === state.context.type) {
                popContext(state);
              }
            } else if (curPunc === "." && state.context && state.context.type === "pattern") {
              popContext(state);
            } else if (/atom|string|variable/.test(style) && state.context) {
              if (/[\}\]]/.test(state.context.type)) {
                pushContext(state, "pattern", stream.column());
              } else if (state.context.type === "pattern" && !state.context.align) {
                state.context.align = true;
                state.context.col = stream.column();
              }
            }
            return style;
          },
          indent: function(state, textAfter) {
            var firstChar = textAfter && textAfter.charAt(0);
            var context = state.context;
            if (/[\]\}]/.test(firstChar)) {
              while (context && context.type === "pattern") {
                context = context.prev;
              }
            }
            var closing = context && firstChar === context.type;
            if (!context) return 0;
            if (context.type === "keywords") return CodeMirror.commands.newlineAndIndent;
            if (context.align) return context.col + (closing ? 0 : 1);
            return context.indent + (closing ? 0 : indentUnit);
          }
        };
      });
      CodeMirror.modeExtensions["cypher"] = {
        autoFormatLineBreaks: function(text) {
          var i, lines, reProcessedPortion;
          var lines = text.split("\n");
          var reProcessedPortion = /\s+\b(return|where|order by|match|with|skip|limit|create|delete|set)\b\s/g;
          for (var i = 0; i < lines.length; i++)
            lines[i] = lines[i].replace(reProcessedPortion, " \n$1 ").trim();
          return lines.join("\n");
        }
      };
      CodeMirror.defineMIME("application/x-cypher-query", "cypher");
    });
  })();
  return cypher$2.exports;
}
var cypherExports = requireCypher();
const cypher = /* @__PURE__ */ getDefaultExportFromCjs(cypherExports);
const cypher$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: cypher
}, [cypherExports]);
export {
  cypher$1 as c
};
