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
var prismMaxscript_min$2 = {};
var hasRequiredPrismMaxscript_min;
function requirePrismMaxscript_min() {
  if (hasRequiredPrismMaxscript_min) return prismMaxscript_min$2;
  hasRequiredPrismMaxscript_min = 1;
  !(function(t) {
    var e = /\b(?:about|and|animate|as|at|attributes|by|case|catch|collect|continue|coordsys|do|else|exit|fn|for|from|function|global|if|in|local|macroscript|mapped|max|not|of|off|on|or|parameters|persistent|plugin|rcmenu|return|rollout|set|struct|then|throw|to|tool|try|undo|utility|when|where|while|with)\b/i;
    t.languages.maxscript = { comment: { pattern: /\/\*[\s\S]*?(?:\*\/|$)|--.*/, greedy: true }, string: { pattern: /(^|[^"\\@])(?:"(?:[^"\\]|\\[\s\S])*"|@"[^"]*")/, lookbehind: true, greedy: true }, path: { pattern: /\$(?:[\w/\\.*?]|'[^']*')*/, greedy: true, alias: "string" }, "function-call": { pattern: RegExp("((?:^|[;=<>+\\-*/^({\\[]|\\b(?:and|by|case|catch|collect|do|else|if|in|not|or|return|then|to|try|where|while|with)\\b)[ 	]*)(?!" + e.source + ")[a-z_]\\w*\\b(?=[ 	]*(?:(?!" + e.source + `)[a-z_]|\\d|-\\.?\\d|[({'"$@#?]))`, "im"), lookbehind: true, greedy: true, alias: "function" }, "function-definition": { pattern: /(\b(?:fn|function)\s+)\w+\b/i, lookbehind: true, alias: "function" }, argument: { pattern: /\b[a-z_]\w*(?=:)/i, alias: "attr-name" }, keyword: e, boolean: /\b(?:false|true)\b/, time: { pattern: /(^|[^\w.])(?:(?:(?:\d+(?:\.\d*)?|\.\d+)(?:[eEdD][+-]\d+|[LP])?[msft])+|\d+:\d+(?:\.\d*)?)(?![\w.:])/, lookbehind: true, alias: "number" }, number: [{ pattern: /(^|[^\w.])(?:(?:\d+(?:\.\d*)?|\.\d+)(?:[eEdD][+-]\d+|[LP])?|0x[a-fA-F0-9]+)(?![\w.:])/, lookbehind: true }, /\b(?:e|pi)\b/], constant: /\b(?:dontcollect|ok|silentValue|undefined|unsupplied)\b/, color: { pattern: /\b(?:black|blue|brown|gray|green|orange|red|white|yellow)\b/i, alias: "constant" }, operator: /[-+*/<>=!]=?|[&^?]|#(?!\()/, punctuation: /[()\[\]{}.:,;]|#(?=\()|\\$/m };
  })(Prism);
  return prismMaxscript_min$2;
}
var prismMaxscript_minExports = requirePrismMaxscript_min();
const prismMaxscript_min = /* @__PURE__ */ getDefaultExportFromCjs(prismMaxscript_minExports);
const prismMaxscript_min$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: prismMaxscript_min
}, [prismMaxscript_minExports]);
export {
  prismMaxscript_min$1 as p
};
