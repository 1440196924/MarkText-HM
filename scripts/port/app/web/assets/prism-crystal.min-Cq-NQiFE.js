import { g as getDefaultExportFromCjs } from "./index-CsLNvl25.js";
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
var prismCrystal_min$2 = {};
var hasRequiredPrismCrystal_min;
function requirePrismCrystal_min() {
  if (hasRequiredPrismCrystal_min) return prismCrystal_min$2;
  hasRequiredPrismCrystal_min = 1;
  !(function(e) {
    e.languages.crystal = e.languages.extend("ruby", { keyword: [/\b(?:__DIR__|__END_LINE__|__FILE__|__LINE__|abstract|alias|annotation|as|asm|begin|break|case|class|def|do|else|elsif|end|ensure|enum|extend|for|fun|if|ifdef|include|instance_sizeof|lib|macro|module|next|of|out|pointerof|private|protected|ptr|require|rescue|return|select|self|sizeof|struct|super|then|type|typeof|undef|uninitialized|union|unless|until|when|while|with|yield)\b/, { pattern: /(\.\s*)(?:is_a|responds_to)\?/, lookbehind: true }], number: /\b(?:0b[01_]*[01]|0o[0-7_]*[0-7]|0x[\da-fA-F_]*[\da-fA-F]|(?:\d(?:[\d_]*\d)?)(?:\.[\d_]*\d)?(?:[eE][+-]?[\d_]*\d)?)(?:_(?:[uif](?:8|16|32|64))?)?\b/, operator: [/->/, e.languages.ruby.operator], punctuation: /[(){}[\].,;\\]/ }), e.languages.insertBefore("crystal", "string-literal", { attribute: { pattern: /@\[.*?\]/, inside: { delimiter: { pattern: /^@\[|\]$/, alias: "punctuation" }, attribute: { pattern: /^(\s*)\w+/, lookbehind: true, alias: "class-name" }, args: { pattern: /\S(?:[\s\S]*\S)?/, inside: e.languages.crystal } } }, expansion: { pattern: /\{(?:\{.*?\}|%.*?%)\}/, inside: { content: { pattern: /^(\{.)[\s\S]+(?=.\}$)/, lookbehind: true, inside: e.languages.crystal }, delimiter: { pattern: /^\{[\{%]|[\}%]\}$/, alias: "operator" } } }, char: { pattern: /'(?:[^\\\r\n]{1,2}|\\(?:.|u(?:[A-Fa-f0-9]{1,4}|\{[A-Fa-f0-9]{1,6}\})))'/, greedy: true } });
  })(Prism);
  return prismCrystal_min$2;
}
var prismCrystal_minExports = requirePrismCrystal_min();
const prismCrystal_min = /* @__PURE__ */ getDefaultExportFromCjs(prismCrystal_minExports);
const prismCrystal_min$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: prismCrystal_min
}, [prismCrystal_minExports]);
export {
  prismCrystal_min$1 as p
};
