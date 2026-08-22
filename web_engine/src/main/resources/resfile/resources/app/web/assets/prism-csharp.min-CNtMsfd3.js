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
var prismCsharp_min$2 = {};
var hasRequiredPrismCsharp_min;
function requirePrismCsharp_min() {
  if (hasRequiredPrismCsharp_min) return prismCsharp_min$2;
  hasRequiredPrismCsharp_min = 1;
  !(function(e) {
    function n(e2, n2) {
      return e2.replace(/<<(\d+)>>/g, (function(e3, s2) {
        return "(?:" + n2[+s2] + ")";
      }));
    }
    function s(e2, s2, a2) {
      return RegExp(n(e2, s2), "");
    }
    function a(e2, n2) {
      for (var s2 = 0; s2 < n2; s2++) e2 = e2.replace(/<<self>>/g, (function() {
        return "(?:" + e2 + ")";
      }));
      return e2.replace(/<<self>>/g, "[^\\s\\S]");
    }
    var t = "bool byte char decimal double dynamic float int long object sbyte short string uint ulong ushort var void", r = "class enum interface record struct", i = "add alias and ascending async await by descending from(?=\\s*(?:\\w|$)) get global group into init(?=\\s*;) join let nameof not notnull on or orderby partial remove select set unmanaged value when where with(?=\\s*{)", o = "abstract as base break case catch checked const continue default delegate do else event explicit extern finally fixed for foreach goto if implicit in internal is lock namespace new null operator out override params private protected public readonly ref return sealed sizeof stackalloc static switch this throw try typeof unchecked unsafe using virtual volatile while yield";
    function l(e2) {
      return "\\b(?:" + e2.trim().replace(/ /g, "|") + ")\\b";
    }
    var d = l(r), p = RegExp(l(t + " " + r + " " + i + " " + o)), c = l(r + " " + i + " " + o), u = l(t + " " + r + " " + o), g = a("<(?:[^<>;=+\\-*/%&|^]|<<self>>)*>", 2), b = a("\\((?:[^()]|<<self>>)*\\)", 2), h = "@?\\b[A-Za-z_]\\w*\\b", f = n("<<0>>(?:\\s*<<1>>)?", [h, g]), m = n("(?!<<0>>)<<1>>(?:\\s*\\.\\s*<<1>>)*", [c, f]), k = "\\[\\s*(?:,\\s*)*\\]", y = n("<<0>>(?:\\s*(?:\\?\\s*)?<<1>>)*(?:\\s*\\?)?", [m, k]), w = n("[^,()<>[\\];=+\\-*/%&|^]|<<0>>|<<1>>|<<2>>", [g, b, k]), v = n("\\(<<0>>+(?:,<<0>>+)+\\)", [w]), x = n("(?:<<0>>|<<1>>)(?:\\s*(?:\\?\\s*)?<<2>>)*(?:\\s*\\?)?", [v, m, k]), $ = { keyword: p, punctuation: /[<>()?,.:[\]]/ }, _ = "'(?:[^\r\n'\\\\]|\\\\.|\\\\[Uux][\\da-fA-F]{1,8})'", B = '"(?:\\\\.|[^\\\\"\r\n])*"';
    e.languages.csharp = e.languages.extend("clike", { string: [{ pattern: s("(^|[^$\\\\])<<0>>", ['@"(?:""|\\\\[^]|[^\\\\"])*"(?!")']), lookbehind: true, greedy: true }, { pattern: s("(^|[^@$\\\\])<<0>>", [B]), lookbehind: true, greedy: true }], "class-name": [{ pattern: s("(\\busing\\s+static\\s+)<<0>>(?=\\s*;)", [m]), lookbehind: true, inside: $ }, { pattern: s("(\\busing\\s+<<0>>\\s*=\\s*)<<1>>(?=\\s*;)", [h, x]), lookbehind: true, inside: $ }, { pattern: s("(\\busing\\s+)<<0>>(?=\\s*=)", [h]), lookbehind: true }, { pattern: s("(\\b<<0>>\\s+)<<1>>", [d, f]), lookbehind: true, inside: $ }, { pattern: s("(\\bcatch\\s*\\(\\s*)<<0>>", [m]), lookbehind: true, inside: $ }, { pattern: s("(\\bwhere\\s+)<<0>>", [h]), lookbehind: true }, { pattern: s("(\\b(?:is(?:\\s+not)?|as)\\s+)<<0>>", [y]), lookbehind: true, inside: $ }, { pattern: s("\\b<<0>>(?=\\s+(?!<<1>>|with\\s*\\{)<<2>>(?:\\s*[=,;:{)\\]]|\\s+(?:in|when)\\b))", [x, u, h]), inside: $ }], keyword: p, number: /(?:\b0(?:x[\da-f_]*[\da-f]|b[01_]*[01])|(?:\B\.\d+(?:_+\d+)*|\b\d+(?:_+\d+)*(?:\.\d+(?:_+\d+)*)?)(?:e[-+]?\d+(?:_+\d+)*)?)(?:[dflmu]|lu|ul)?\b/i, operator: />>=?|<<=?|[-=]>|([-+&|])\1|~|\?\?=?|[-+*/%&|^!=<>]=?/, punctuation: /\?\.?|::|[{}[\];(),.:]/ }), e.languages.insertBefore("csharp", "number", { range: { pattern: /\.\./, alias: "operator" } }), e.languages.insertBefore("csharp", "punctuation", { "named-parameter": { pattern: s("([(,]\\s*)<<0>>(?=\\s*:)", [h]), lookbehind: true, alias: "punctuation" } }), e.languages.insertBefore("csharp", "class-name", { namespace: { pattern: s("(\\b(?:namespace|using)\\s+)<<0>>(?:\\s*\\.\\s*<<0>>)*(?=\\s*[;{])", [h]), lookbehind: true, inside: { punctuation: /\./ } }, "type-expression": { pattern: s("(\\b(?:default|sizeof|typeof)\\s*\\(\\s*(?!\\s))(?:[^()\\s]|\\s(?!\\s)|<<0>>)*(?=\\s*\\))", [b]), lookbehind: true, alias: "class-name", inside: $ }, "return-type": { pattern: s("<<0>>(?=\\s+(?:<<1>>\\s*(?:=>|[({]|\\.\\s*this\\s*\\[)|this\\s*\\[))", [x, m]), inside: $, alias: "class-name" }, "constructor-invocation": { pattern: s("(\\bnew\\s+)<<0>>(?=\\s*[[({])", [x]), lookbehind: true, inside: $, alias: "class-name" }, "generic-method": { pattern: s("<<0>>\\s*<<1>>(?=\\s*\\()", [h, g]), inside: { function: s("^<<0>>", [h]), generic: { pattern: RegExp(g), alias: "class-name", inside: $ } } }, "type-list": { pattern: s("\\b((?:<<0>>\\s+<<1>>|record\\s+<<1>>\\s*<<5>>|where\\s+<<2>>)\\s*:\\s*)(?:<<3>>|<<4>>|<<1>>\\s*<<5>>|<<6>>)(?:\\s*,\\s*(?:<<3>>|<<4>>|<<6>>))*(?=\\s*(?:where|[{;]|=>|$))", [d, f, h, x, p.source, b, "\\bnew\\s*\\(\\s*\\)"]), lookbehind: true, inside: { "record-arguments": { pattern: s("(^(?!new\\s*\\()<<0>>\\s*)<<1>>", [f, b]), lookbehind: true, greedy: true, inside: e.languages.csharp }, keyword: p, "class-name": { pattern: RegExp(x), greedy: true, inside: $ }, punctuation: /[,()]/ } }, preprocessor: { pattern: /(^[\t ]*)#.*/m, lookbehind: true, alias: "property", inside: { directive: { pattern: /(#)\b(?:define|elif|else|endif|endregion|error|if|line|nullable|pragma|region|undef|warning)\b/, lookbehind: true, alias: "keyword" } } } });
    var E = B + "|" + _, R = n("/(?![*/])|//[^\r\n]*[\r\n]|/\\*(?:[^*]|\\*(?!/))*\\*/|<<0>>", [E]), z = a(n(`[^"'/()]|<<0>>|\\(<<self>>*\\)`, [R]), 2), S = "\\b(?:assembly|event|field|method|module|param|property|return|type)\\b", j = n("<<0>>(?:\\s*\\(<<1>>*\\))?", [m, z]);
    e.languages.insertBefore("csharp", "class-name", { attribute: { pattern: s("((?:^|[^\\s\\w>)?])\\s*\\[\\s*)(?:<<0>>\\s*:\\s*)?<<1>>(?:\\s*,\\s*<<1>>)*(?=\\s*\\])", [S, j]), lookbehind: true, greedy: true, inside: { target: { pattern: s("^<<0>>(?=\\s*:)", [S]), alias: "keyword" }, "attribute-arguments": { pattern: s("\\(<<0>>*\\)", [z]), inside: e.languages.csharp }, "class-name": { pattern: RegExp(m), inside: { punctuation: /\./ } }, punctuation: /[:,]/ } } });
    var A = ":[^}\r\n]+", F = a(n(`[^"'/()]|<<0>>|\\(<<self>>*\\)`, [R]), 2), P = n("\\{(?!\\{)(?:(?![}:])<<0>>)*<<1>>?\\}", [F, A]), U = a(n(`[^"'/()]|/(?!\\*)|/\\*(?:[^*]|\\*(?!/))*\\*/|<<0>>|\\(<<self>>*\\)`, [E]), 2), Z = n("\\{(?!\\{)(?:(?![}:])<<0>>)*<<1>>?\\}", [U, A]);
    function q(n2, a2) {
      return { interpolation: { pattern: s("((?:^|[^{])(?:\\{\\{)*)<<0>>", [n2]), lookbehind: true, inside: { "format-string": { pattern: s("(^\\{(?:(?![}:])<<0>>)*)<<1>>(?=\\}$)", [a2, A]), lookbehind: true, inside: { punctuation: /^:/ } }, punctuation: /^\{|\}$/, expression: { pattern: /[\s\S]+/, alias: "language-csharp", inside: e.languages.csharp } } }, string: /[\s\S]+/ };
    }
    e.languages.insertBefore("csharp", "string", { "interpolation-string": [{ pattern: s('(^|[^\\\\])(?:\\$@|@\\$)"(?:""|\\\\[^]|\\{\\{|<<0>>|[^\\\\{"])*"', [P]), lookbehind: true, greedy: true, inside: q(P, F) }, { pattern: s('(^|[^@\\\\])\\$"(?:\\\\.|\\{\\{|<<0>>|[^\\\\"{])*"', [Z]), lookbehind: true, greedy: true, inside: q(Z, U) }], char: { pattern: RegExp(_), greedy: true } }), e.languages.dotnet = e.languages.cs = e.languages.csharp;
  })(Prism);
  return prismCsharp_min$2;
}
var prismCsharp_minExports = requirePrismCsharp_min();
const prismCsharp_min = /* @__PURE__ */ getDefaultExportFromCjs(prismCsharp_minExports);
const prismCsharp_min$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: prismCsharp_min
}, [prismCsharp_minExports]);
export {
  prismCsharp_min$1 as p
};
