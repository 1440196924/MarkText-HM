import { a as requireCodemirror, b as requireOverlay, r as requireXml, g as getDefaultExportFromCjs } from "./index-CsLNvl25.js";
import { r as requireJavascript } from "./javascript-CI2zbmuE.js";
import { r as requireCoffeescript } from "./coffeescript-DZHgBNrS.js";
import { r as requireCss } from "./css-3oUmybGb.js";
import { r as requireSass } from "./sass-CE3rZeRl.js";
import { r as requireStylus } from "./stylus-DTXKwZ6d.js";
import { r as requirePug } from "./pug-D_9c2oot.js";
import { r as requireHandlebars } from "./handlebars-CImEqSXs.js";
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
var vue$2 = { exports: {} };
var hasRequiredVue;
function requireVue() {
  if (hasRequiredVue) return vue$2.exports;
  hasRequiredVue = 1;
  (function(module, exports) {
    (function(mod) {
      {
        mod(
          requireCodemirror(),
          requireOverlay(),
          requireXml(),
          requireJavascript(),
          requireCoffeescript(),
          requireCss(),
          requireSass(),
          requireStylus(),
          requirePug(),
          requireHandlebars()
        );
      }
    })(function(CodeMirror) {
      var tagLanguages = {
        script: [
          ["lang", /coffee(script)?/, "coffeescript"],
          ["type", /^(?:text|application)\/(?:x-)?coffee(?:script)?$/, "coffeescript"],
          ["lang", /^babel$/, "javascript"],
          ["type", /^text\/babel$/, "javascript"],
          ["type", /^text\/ecmascript-\d+$/, "javascript"]
        ],
        style: [
          ["lang", /^stylus$/i, "stylus"],
          ["lang", /^sass$/i, "sass"],
          ["lang", /^less$/i, "text/x-less"],
          ["lang", /^scss$/i, "text/x-scss"],
          ["type", /^(text\/)?(x-)?styl(us)?$/i, "stylus"],
          ["type", /^text\/sass/i, "sass"],
          ["type", /^(text\/)?(x-)?scss$/i, "text/x-scss"],
          ["type", /^(text\/)?(x-)?less$/i, "text/x-less"]
        ],
        template: [
          ["lang", /^vue-template$/i, "vue"],
          ["lang", /^pug$/i, "pug"],
          ["lang", /^handlebars$/i, "handlebars"],
          ["type", /^(text\/)?(x-)?pug$/i, "pug"],
          ["type", /^text\/x-handlebars-template$/i, "handlebars"],
          [null, null, "vue-template"]
        ]
      };
      CodeMirror.defineMode("vue-template", function(config, parserConfig) {
        var mustacheOverlay = {
          token: function(stream) {
            if (stream.match(/^\{\{.*?\}\}/)) return "meta mustache";
            while (stream.next() && !stream.match("{{", false)) {
            }
            return null;
          }
        };
        return CodeMirror.overlayMode(CodeMirror.getMode(config, parserConfig.backdrop || "text/html"), mustacheOverlay);
      });
      CodeMirror.defineMode("vue", function(config) {
        return CodeMirror.getMode(config, { name: "htmlmixed", tags: tagLanguages });
      }, "htmlmixed", "xml", "javascript", "coffeescript", "css", "sass", "stylus", "pug", "handlebars");
      CodeMirror.defineMIME("script/x-vue", "vue");
      CodeMirror.defineMIME("text/x-vue", "vue");
    });
  })();
  return vue$2.exports;
}
var vueExports = requireVue();
const vue = /* @__PURE__ */ getDefaultExportFromCjs(vueExports);
const vue$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: vue
}, [vueExports]);
export {
  vue$1 as v
};
