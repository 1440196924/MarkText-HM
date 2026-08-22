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
var prismElixir_min$2 = {};
var hasRequiredPrismElixir_min;
function requirePrismElixir_min() {
  if (hasRequiredPrismElixir_min) return prismElixir_min$2;
  hasRequiredPrismElixir_min = 1;
  Prism.languages.elixir = { doc: { pattern: /@(?:doc|moduledoc)\s+(?:("""|''')[\s\S]*?\1|("|')(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2)/, inside: { attribute: /^@\w+/, string: /['"][\s\S]+/ } }, comment: { pattern: /#.*/, greedy: true }, regex: { pattern: /~[rR](?:("""|''')(?:\\[\s\S]|(?!\1)[^\\])+\1|([\/|"'])(?:\\.|(?!\2)[^\\\r\n])+\2|\((?:\\.|[^\\)\r\n])+\)|\[(?:\\.|[^\\\]\r\n])+\]|\{(?:\\.|[^\\}\r\n])+\}|<(?:\\.|[^\\>\r\n])+>)[uismxfr]*/, greedy: true }, string: [{ pattern: /~[cCsSwW](?:("""|''')(?:\\[\s\S]|(?!\1)[^\\])+\1|([\/|"'])(?:\\.|(?!\2)[^\\\r\n])+\2|\((?:\\.|[^\\)\r\n])+\)|\[(?:\\.|[^\\\]\r\n])+\]|\{(?:\\.|#\{[^}]+\}|#(?!\{)|[^#\\}\r\n])+\}|<(?:\\.|[^\\>\r\n])+>)[csa]?/, greedy: true, inside: {} }, { pattern: /("""|''')[\s\S]*?\1/, greedy: true, inside: {} }, { pattern: /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/, greedy: true, inside: {} }], atom: { pattern: /(^|[^:]):\w+/, lookbehind: true, alias: "symbol" }, module: { pattern: /\b[A-Z]\w*\b/, alias: "class-name" }, "attr-name": /\b\w+\??:(?!:)/, argument: { pattern: /(^|[^&])&\d+/, lookbehind: true, alias: "variable" }, attribute: { pattern: /@\w+/, alias: "variable" }, function: /\b[_a-zA-Z]\w*[?!]?(?:(?=\s*(?:\.\s*)?\()|(?=\/\d))/, number: /\b(?:0[box][a-f\d_]+|\d[\d_]*)(?:\.[\d_]+)?(?:e[+-]?[\d_]+)?\b/i, keyword: /\b(?:after|alias|and|case|catch|cond|def(?:callback|delegate|exception|impl|macro|module|n|np|p|protocol|struct)?|do|else|end|fn|for|if|import|not|or|quote|raise|require|rescue|try|unless|unquote|use|when)\b/, boolean: /\b(?:false|nil|true)\b/, operator: [/\bin\b|&&?|\|[|>]?|\\\\|::|\.\.\.?|\+\+?|-[->]?|<[-=>]|>=|!==?|\B!|=(?:==?|[>~])?|[*\/^]/, { pattern: /([^<])<(?!<)/, lookbehind: true }, { pattern: /([^>])>(?!>)/, lookbehind: true }], punctuation: /<<|>>|[.,%\[\]{}()]/ }, Prism.languages.elixir.string.forEach((function(e) {
    e.inside = { interpolation: { pattern: /#\{[^}]+\}/, inside: { delimiter: { pattern: /^#\{|\}$/, alias: "punctuation" }, rest: Prism.languages.elixir } } };
  }));
  return prismElixir_min$2;
}
var prismElixir_minExports = requirePrismElixir_min();
const prismElixir_min = /* @__PURE__ */ getDefaultExportFromCjs(prismElixir_minExports);
const prismElixir_min$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: prismElixir_min
}, [prismElixir_minExports]);
export {
  prismElixir_min$1 as p
};
