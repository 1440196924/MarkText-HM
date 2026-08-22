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
var prismJsExtras_min$2 = {};
var hasRequiredPrismJsExtras_min;
function requirePrismJsExtras_min() {
  if (hasRequiredPrismJsExtras_min) return prismJsExtras_min$2;
  hasRequiredPrismJsExtras_min = 1;
  !(function(a) {
    function e(a2, e2) {
      return RegExp(a2.replace(/<ID>/g, (function() {
        return "(?!\\s)[_$a-zA-Z\\xA0-\\uFFFF](?:(?!\\s)[$\\w\\xA0-\\uFFFF])*";
      })), e2);
    }
    a.languages.insertBefore("javascript", "function-variable", { "method-variable": { pattern: RegExp("(\\.\\s*)" + a.languages.javascript["function-variable"].pattern.source), lookbehind: true, alias: ["function-variable", "method", "function", "property-access"] } }), a.languages.insertBefore("javascript", "function", { method: { pattern: RegExp("(\\.\\s*)" + a.languages.javascript.function.source), lookbehind: true, alias: ["function", "property-access"] } }), a.languages.insertBefore("javascript", "constant", { "known-class-name": [{ pattern: /\b(?:(?:Float(?:32|64)|(?:Int|Uint)(?:8|16|32)|Uint8Clamped)?Array|ArrayBuffer|BigInt|Boolean|DataView|Date|Error|Function|Intl|JSON|(?:Weak)?(?:Map|Set)|Math|Number|Object|Promise|Proxy|Reflect|RegExp|String|Symbol|WebAssembly)\b/, alias: "class-name" }, { pattern: /\b(?:[A-Z]\w*)Error\b/, alias: "class-name" }] }), a.languages.insertBefore("javascript", "keyword", { imports: { pattern: e("(\\bimport\\b\\s*)(?:<ID>(?:\\s*,\\s*(?:\\*\\s*as\\s+<ID>|\\{[^{}]*\\}))?|\\*\\s*as\\s+<ID>|\\{[^{}]*\\})(?=\\s*\\bfrom\\b)"), lookbehind: true, inside: a.languages.javascript }, exports: { pattern: e("(\\bexport\\b\\s*)(?:\\*(?:\\s*as\\s+<ID>)?(?=\\s*\\bfrom\\b)|\\{[^{}]*\\})"), lookbehind: true, inside: a.languages.javascript } }), a.languages.javascript.keyword.unshift({ pattern: /\b(?:as|default|export|from|import)\b/, alias: "module" }, { pattern: /\b(?:await|break|catch|continue|do|else|finally|for|if|return|switch|throw|try|while|yield)\b/, alias: "control-flow" }, { pattern: /\bnull\b/, alias: ["null", "nil"] }, { pattern: /\bundefined\b/, alias: "nil" }), a.languages.insertBefore("javascript", "operator", { spread: { pattern: /\.{3}/, alias: "operator" }, arrow: { pattern: /=>/, alias: "operator" } }), a.languages.insertBefore("javascript", "punctuation", { "property-access": { pattern: e("(\\.\\s*)#?<ID>"), lookbehind: true }, "maybe-class-name": { pattern: /(^|[^$\w\xA0-\uFFFF])[A-Z][$\w\xA0-\uFFFF]+/, lookbehind: true }, dom: { pattern: /\b(?:document|(?:local|session)Storage|location|navigator|performance|window)\b/, alias: "variable" }, console: { pattern: /\bconsole(?=\s*\.)/, alias: "class-name" } });
    for (var t = ["function", "function-variable", "method", "method-variable", "property-access"], r = 0; r < t.length; r++) {
      var n = t[r], s = a.languages.javascript[n];
      "RegExp" === a.util.type(s) && (s = a.languages.javascript[n] = { pattern: s });
      var o = s.inside || {};
      s.inside = o, o["maybe-class-name"] = /^[A-Z][\s\S]*/;
    }
  })(Prism);
  return prismJsExtras_min$2;
}
var prismJsExtras_minExports = requirePrismJsExtras_min();
const prismJsExtras_min = /* @__PURE__ */ getDefaultExportFromCjs(prismJsExtras_minExports);
const prismJsExtras_min$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: prismJsExtras_min
}, [prismJsExtras_minExports]);
export {
  prismJsExtras_min$1 as p
};
