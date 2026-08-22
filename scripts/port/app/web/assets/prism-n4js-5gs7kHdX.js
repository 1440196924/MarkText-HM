import { g as getDefaultExportFromCjs } from "./index-D8xk56-E.js";
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
var prismN4js$2 = {};
var hasRequiredPrismN4js;
function requirePrismN4js() {
  if (hasRequiredPrismN4js) return prismN4js$2;
  hasRequiredPrismN4js = 1;
  Prism.languages.n4js = Prism.languages.extend("javascript", {
    // Keywords from N4JS language spec: https://numberfour.github.io/n4js/spec/N4JSSpec.html
    "keyword": /\b(?:Array|any|boolean|break|case|catch|class|const|constructor|continue|debugger|declare|default|delete|do|else|enum|export|extends|false|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|module|new|null|number|package|private|protected|public|return|set|static|string|super|switch|this|throw|true|try|typeof|var|void|while|with|yield)\b/
  });
  Prism.languages.insertBefore("n4js", "constant", {
    // Annotations in N4JS spec: https://numberfour.github.io/n4js/spec/N4JSSpec.html#_annotations
    "annotation": {
      pattern: /@+\w+/,
      alias: "operator"
    }
  });
  Prism.languages.n4jsd = Prism.languages.n4js;
  return prismN4js$2;
}
var prismN4jsExports = requirePrismN4js();
const prismN4js = /* @__PURE__ */ getDefaultExportFromCjs(prismN4jsExports);
const prismN4js$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: prismN4js
}, [prismN4jsExports]);
export {
  prismN4js$1 as p
};
