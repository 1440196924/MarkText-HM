import { g as getDefaultExportFromCjs } from "./index-1FfQlz0g.js";
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
var prismAgda$2 = {};
var hasRequiredPrismAgda;
function requirePrismAgda() {
  if (hasRequiredPrismAgda) return prismAgda$2;
  hasRequiredPrismAgda = 1;
  (function(Prism2) {
    Prism2.languages.agda = {
      "comment": /\{-[\s\S]*?(?:-\}|$)|--.*/,
      "string": {
        pattern: /"(?:\\(?:\r\n|[\s\S])|[^\\\r\n"])*"/,
        greedy: true
      },
      "punctuation": /[(){}⦃⦄.;@]/,
      "class-name": {
        pattern: /((?:data|record) +)\S+/,
        lookbehind: true
      },
      "function": {
        pattern: /(^[ \t]*)(?!\s)[^:\r\n]+(?=:)/m,
        lookbehind: true
      },
      "operator": {
        pattern: /(^\s*|\s)(?:[=|:∀→λ\\?_]|->)(?=\s)/,
        lookbehind: true
      },
      "keyword": /\b(?:Set|abstract|constructor|data|eta-equality|field|forall|hiding|import|in|inductive|infix|infixl|infixr|instance|let|macro|module|mutual|no-eta-equality|open|overlap|pattern|postulate|primitive|private|public|quote|quoteContext|quoteGoal|quoteTerm|record|renaming|rewrite|syntax|tactic|unquote|unquoteDecl|unquoteDef|using|variable|where|with)\b/
    };
  })(Prism);
  return prismAgda$2;
}
var prismAgdaExports = requirePrismAgda();
const prismAgda = /* @__PURE__ */ getDefaultExportFromCjs(prismAgdaExports);
const prismAgda$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: prismAgda
}, [prismAgdaExports]);
export {
  prismAgda$1 as p
};
