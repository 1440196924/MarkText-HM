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
var prismPascal_min$2 = {};
var hasRequiredPrismPascal_min;
function requirePrismPascal_min() {
  if (hasRequiredPrismPascal_min) return prismPascal_min$2;
  hasRequiredPrismPascal_min = 1;
  Prism.languages.pascal = { directive: { pattern: /\{\$[\s\S]*?\}/, greedy: true, alias: ["marco", "property"] }, comment: { pattern: /\(\*[\s\S]*?\*\)|\{[\s\S]*?\}|\/\/.*/, greedy: true }, string: { pattern: /(?:'(?:''|[^'\r\n])*'(?!')|#[&$%]?[a-f\d]+)+|\^[a-z]/i, greedy: true }, asm: { pattern: /(\basm\b)[\s\S]+?(?=\bend\s*[;[])/i, lookbehind: true, greedy: true, inside: null }, keyword: [{ pattern: /(^|[^&])\b(?:absolute|array|asm|begin|case|const|constructor|destructor|do|downto|else|end|file|for|function|goto|if|implementation|inherited|inline|interface|label|nil|object|of|operator|packed|procedure|program|record|reintroduce|repeat|self|set|string|then|to|type|unit|until|uses|var|while|with)\b/i, lookbehind: true }, { pattern: /(^|[^&])\b(?:dispose|exit|false|new|true)\b/i, lookbehind: true }, { pattern: /(^|[^&])\b(?:class|dispinterface|except|exports|finalization|finally|initialization|inline|library|on|out|packed|property|raise|resourcestring|threadvar|try)\b/i, lookbehind: true }, { pattern: /(^|[^&])\b(?:absolute|abstract|alias|assembler|bitpacked|break|cdecl|continue|cppdecl|cvar|default|deprecated|dynamic|enumerator|experimental|export|external|far|far16|forward|generic|helper|implements|index|interrupt|iochecks|local|message|name|near|nodefault|noreturn|nostackframe|oldfpccall|otherwise|overload|override|pascal|platform|private|protected|public|published|read|register|reintroduce|result|safecall|saveregisters|softfloat|specialize|static|stdcall|stored|strict|unaligned|unimplemented|varargs|virtual|write)\b/i, lookbehind: true }], number: [/(?:[&%]\d+|\$[a-f\d]+)/i, /\b\d+(?:\.\d+)?(?:e[+-]?\d+)?/i], operator: [/\.\.|\*\*|:=|<[<=>]?|>[>=]?|[+\-*\/]=?|[@^=]/, { pattern: /(^|[^&])\b(?:and|as|div|exclude|in|include|is|mod|not|or|shl|shr|xor)\b/, lookbehind: true }], punctuation: /\(\.|\.\)|[()\[\]:;,.]/ }, Prism.languages.pascal.asm.inside = Prism.languages.extend("pascal", { asm: void 0, keyword: void 0, operator: void 0 }), Prism.languages.objectpascal = Prism.languages.pascal;
  return prismPascal_min$2;
}
var prismPascal_minExports = requirePrismPascal_min();
const prismPascal_min = /* @__PURE__ */ getDefaultExportFromCjs(prismPascal_minExports);
const prismPascal_min$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: prismPascal_min
}, [prismPascal_minExports]);
export {
  prismPascal_min$1 as p
};
