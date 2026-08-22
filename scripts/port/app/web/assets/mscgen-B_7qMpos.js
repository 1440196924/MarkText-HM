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
var mscgen$2 = { exports: {} };
var hasRequiredMscgen;
function requireMscgen() {
  if (hasRequiredMscgen) return mscgen$2.exports;
  hasRequiredMscgen = 1;
  (function(module, exports) {
    (function(mod) {
      mod(requireCodemirror());
    })(function(CodeMirror) {
      var languages = {
        mscgen: {
          "keywords": ["msc"],
          "options": ["hscale", "width", "arcgradient", "wordwraparcs"],
          "constants": ["true", "false", "on", "off"],
          "attributes": ["label", "idurl", "id", "url", "linecolor", "linecolour", "textcolor", "textcolour", "textbgcolor", "textbgcolour", "arclinecolor", "arclinecolour", "arctextcolor", "arctextcolour", "arctextbgcolor", "arctextbgcolour", "arcskip"],
          "brackets": ["\\{", "\\}"],
          // [ and  ] are brackets too, but these get handled in with lists
          "arcsWords": ["note", "abox", "rbox", "box"],
          "arcsOthers": ["\\|\\|\\|", "\\.\\.\\.", "---", "--", "<->", "==", "<<=>>", "<=>", "\\.\\.", "<<>>", "::", "<:>", "->", "=>>", "=>", ">>", ":>", "<-", "<<=", "<=", "<<", "<:", "x-", "-x"],
          "singlecomment": ["//", "#"],
          "operators": ["="]
        },
        xu: {
          "keywords": ["msc", "xu"],
          "options": ["hscale", "width", "arcgradient", "wordwraparcs", "wordwrapentities", "watermark"],
          "constants": ["true", "false", "on", "off", "auto"],
          "attributes": ["label", "idurl", "id", "url", "linecolor", "linecolour", "textcolor", "textcolour", "textbgcolor", "textbgcolour", "arclinecolor", "arclinecolour", "arctextcolor", "arctextcolour", "arctextbgcolor", "arctextbgcolour", "arcskip", "title", "deactivate", "activate", "activation"],
          "brackets": ["\\{", "\\}"],
          // [ and  ] are brackets too, but these get handled in with lists
          "arcsWords": ["note", "abox", "rbox", "box", "alt", "else", "opt", "break", "par", "seq", "strict", "neg", "critical", "ignore", "consider", "assert", "loop", "ref", "exc"],
          "arcsOthers": ["\\|\\|\\|", "\\.\\.\\.", "---", "--", "<->", "==", "<<=>>", "<=>", "\\.\\.", "<<>>", "::", "<:>", "->", "=>>", "=>", ">>", ":>", "<-", "<<=", "<=", "<<", "<:", "x-", "-x"],
          "singlecomment": ["//", "#"],
          "operators": ["="]
        },
        msgenny: {
          "keywords": null,
          "options": ["hscale", "width", "arcgradient", "wordwraparcs", "wordwrapentities", "watermark"],
          "constants": ["true", "false", "on", "off", "auto"],
          "attributes": null,
          "brackets": ["\\{", "\\}"],
          "arcsWords": ["note", "abox", "rbox", "box", "alt", "else", "opt", "break", "par", "seq", "strict", "neg", "critical", "ignore", "consider", "assert", "loop", "ref", "exc"],
          "arcsOthers": ["\\|\\|\\|", "\\.\\.\\.", "---", "--", "<->", "==", "<<=>>", "<=>", "\\.\\.", "<<>>", "::", "<:>", "->", "=>>", "=>", ">>", ":>", "<-", "<<=", "<=", "<<", "<:", "x-", "-x"],
          "singlecomment": ["//", "#"],
          "operators": ["="]
        }
      };
      CodeMirror.defineMode("mscgen", function(_, modeConfig) {
        var language = languages[modeConfig && modeConfig.language || "mscgen"];
        return {
          startState: startStateFn,
          copyState: copyStateFn,
          token: produceTokenFunction(language),
          lineComment: "#",
          blockCommentStart: "/*",
          blockCommentEnd: "*/"
        };
      });
      CodeMirror.defineMIME("text/x-mscgen", "mscgen");
      CodeMirror.defineMIME("text/x-xu", { name: "mscgen", language: "xu" });
      CodeMirror.defineMIME("text/x-msgenny", { name: "mscgen", language: "msgenny" });
      function wordRegexpBoundary(pWords) {
        return new RegExp("^\\b(?:" + pWords.join("|") + ")\\b", "i");
      }
      function wordRegexp(pWords) {
        return new RegExp("^(?:" + pWords.join("|") + ")", "i");
      }
      function startStateFn() {
        return {
          inComment: false,
          inString: false,
          inAttributeList: false,
          inScript: false
        };
      }
      function copyStateFn(pState) {
        return {
          inComment: pState.inComment,
          inString: pState.inString,
          inAttributeList: pState.inAttributeList,
          inScript: pState.inScript
        };
      }
      function produceTokenFunction(pConfig) {
        return function(pStream, pState) {
          if (pStream.match(wordRegexp(pConfig.brackets), true, true)) {
            return "bracket";
          }
          if (!pState.inComment) {
            if (pStream.match(/\/\*[^\*\/]*/, true, true)) {
              pState.inComment = true;
              return "comment";
            }
            if (pStream.match(wordRegexp(pConfig.singlecomment), true, true)) {
              pStream.skipToEnd();
              return "comment";
            }
          }
          if (pState.inComment) {
            if (pStream.match(/[^\*\/]*\*\//, true, true))
              pState.inComment = false;
            else
              pStream.skipToEnd();
            return "comment";
          }
          if (!pState.inString && pStream.match(/\"(\\\"|[^\"])*/, true, true)) {
            pState.inString = true;
            return "string";
          }
          if (pState.inString) {
            if (pStream.match(/[^\"]*\"/, true, true))
              pState.inString = false;
            else
              pStream.skipToEnd();
            return "string";
          }
          if (!!pConfig.keywords && pStream.match(wordRegexpBoundary(pConfig.keywords), true, true))
            return "keyword";
          if (pStream.match(wordRegexpBoundary(pConfig.options), true, true))
            return "keyword";
          if (pStream.match(wordRegexpBoundary(pConfig.arcsWords), true, true))
            return "keyword";
          if (pStream.match(wordRegexp(pConfig.arcsOthers), true, true))
            return "keyword";
          if (!!pConfig.operators && pStream.match(wordRegexp(pConfig.operators), true, true))
            return "operator";
          if (!!pConfig.constants && pStream.match(wordRegexp(pConfig.constants), true, true))
            return "variable";
          if (!pConfig.inAttributeList && !!pConfig.attributes && pStream.match("[", true, true)) {
            pConfig.inAttributeList = true;
            return "bracket";
          }
          if (pConfig.inAttributeList) {
            if (pConfig.attributes !== null && pStream.match(wordRegexpBoundary(pConfig.attributes), true, true)) {
              return "attribute";
            }
            if (pStream.match("]", true, true)) {
              pConfig.inAttributeList = false;
              return "bracket";
            }
          }
          pStream.next();
          return "base";
        };
      }
    });
  })();
  return mscgen$2.exports;
}
var mscgenExports = requireMscgen();
const mscgen = /* @__PURE__ */ getDefaultExportFromCjs(mscgenExports);
const mscgen$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: mscgen
}, [mscgenExports]);
export {
  mscgen$1 as m
};
