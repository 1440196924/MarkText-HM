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
var prismPeoplecode$2 = {};
var hasRequiredPrismPeoplecode;
function requirePrismPeoplecode() {
  if (hasRequiredPrismPeoplecode) return prismPeoplecode$2;
  hasRequiredPrismPeoplecode = 1;
  Prism.languages.peoplecode = {
    "comment": RegExp([
      // C-style multiline comments
      /\/\*[\s\S]*?\*\//.source,
      // REM comments
      /\bREM[^;]*;/.source,
      // Nested <* *> comments
      /<\*(?:[^<*]|\*(?!>)|<(?!\*)|<\*(?:(?!\*>)[\s\S])*\*>)*\*>/.source,
      // /+ +/ comments
      /\/\+[\s\S]*?\+\//.source
    ].join("|")),
    "string": {
      pattern: /'(?:''|[^'\r\n])*'(?!')|"(?:""|[^"\r\n])*"(?!")/,
      greedy: true
    },
    "variable": /%\w+/,
    "function-definition": {
      pattern: /((?:^|[^\w-])(?:function|method)\s+)\w+/i,
      lookbehind: true,
      alias: "function"
    },
    "class-name": {
      pattern: /((?:^|[^-\w])(?:as|catch|class|component|create|extends|global|implements|instance|local|of|property|returns)\s+)\w+(?::\w+)*/i,
      lookbehind: true,
      inside: {
        "punctuation": /:/
      }
    },
    "keyword": /\b(?:abstract|alias|as|catch|class|component|constant|create|declare|else|end-(?:class|evaluate|for|function|get|if|method|set|try|while)|evaluate|extends|for|function|get|global|if|implements|import|instance|library|local|method|null|of|out|peopleCode|private|program|property|protected|readonly|ref|repeat|returns?|set|step|then|throw|to|try|until|value|when(?:-other)?|while)\b/i,
    "operator-keyword": {
      pattern: /\b(?:and|not|or)\b/i,
      alias: "operator"
    },
    "function": /[_a-z]\w*(?=\s*\()/i,
    "boolean": /\b(?:false|true)\b/i,
    "number": /\b\d+(?:\.\d+)?\b/,
    "operator": /<>|[<>]=?|!=|\*\*|[-+*/|=@]/,
    "punctuation": /[:.;,()[\]]/
  };
  Prism.languages.pcode = Prism.languages.peoplecode;
  return prismPeoplecode$2;
}
var prismPeoplecodeExports = requirePrismPeoplecode();
const prismPeoplecode = /* @__PURE__ */ getDefaultExportFromCjs(prismPeoplecodeExports);
const prismPeoplecode$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: prismPeoplecode
}, [prismPeoplecodeExports]);
export {
  prismPeoplecode$1 as p
};
