import { g as getDefaultExportFromCjs } from "./index-Ccykuj0R.js";
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
var prismAgda_min$2 = {};
var hasRequiredPrismAgda_min;
function requirePrismAgda_min() {
  if (hasRequiredPrismAgda_min) return prismAgda_min$2;
  hasRequiredPrismAgda_min = 1;
  !(function(t) {
    t.languages.agda = { comment: /\{-[\s\S]*?(?:-\}|$)|--.*/, string: { pattern: /"(?:\\(?:\r\n|[\s\S])|[^\\\r\n"])*"/, greedy: true }, punctuation: /[(){}⦃⦄.;@]/, "class-name": { pattern: /((?:data|record) +)\S+/, lookbehind: true }, function: { pattern: /(^[ \t]*)(?!\s)[^:\r\n]+(?=:)/m, lookbehind: true }, operator: { pattern: /(^\s*|\s)(?:[=|:∀→λ\\?_]|->)(?=\s)/, lookbehind: true }, keyword: /\b(?:Set|abstract|constructor|data|eta-equality|field|forall|hiding|import|in|inductive|infix|infixl|infixr|instance|let|macro|module|mutual|no-eta-equality|open|overlap|pattern|postulate|primitive|private|public|quote|quoteContext|quoteGoal|quoteTerm|record|renaming|rewrite|syntax|tactic|unquote|unquoteDecl|unquoteDef|using|variable|where|with)\b/ };
  })(Prism);
  return prismAgda_min$2;
}
var prismAgda_minExports = requirePrismAgda_min();
const prismAgda_min = /* @__PURE__ */ getDefaultExportFromCjs(prismAgda_minExports);
const prismAgda_min$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: prismAgda_min
}, [prismAgda_minExports]);
export {
  prismAgda_min$1 as p
};
