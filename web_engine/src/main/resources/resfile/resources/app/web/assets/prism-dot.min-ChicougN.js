!(function(e) {
  var a = "(?:" + ["[a-zA-Z_\\x80-\\uFFFF][\\w\\x80-\\uFFFF]*", "-?(?:\\.\\d+|\\d+(?:\\.\\d*)?)", '"[^"\\\\]*(?:\\\\[^][^"\\\\]*)*"', `<(?:[^<>]|(?!<!--)<(?:[^<>"']|"[^"]*"|'[^']*')+>|<!--(?:[^-]|-(?!->))*-->)*>`].join("|") + ")", n = { markup: { pattern: /(^<)[\s\S]+(?=>$)/, lookbehind: true, alias: ["language-markup", "language-html", "language-xml"], inside: e.languages.markup } };
  function r(e2, n2) {
    return RegExp(e2.replace(/<ID>/g, (function() {
      return a;
    })), n2);
  }
  e.languages.dot = { comment: { pattern: /\/\/.*|\/\*[\s\S]*?\*\/|^#.*/m, greedy: true }, "graph-name": { pattern: r("(\\b(?:digraph|graph|subgraph)[ 	\r\n]+)<ID>", "i"), lookbehind: true, greedy: true, alias: "class-name", inside: n }, "attr-value": { pattern: r("(=[ 	\r\n]*)<ID>"), lookbehind: true, greedy: true, inside: n }, "attr-name": { pattern: r("([\\[;, 	\r\n])<ID>(?=[ 	\r\n]*=)"), lookbehind: true, greedy: true, inside: n }, keyword: /\b(?:digraph|edge|graph|node|strict|subgraph)\b/i, "compass-point": { pattern: /(:[ \t\r\n]*)(?:[ewc_]|[ns][ew]?)(?![\w\x80-\uFFFF])/, lookbehind: true, alias: "builtin" }, node: { pattern: r("(^|[^-.\\w\\x80-\\uFFFF\\\\])<ID>"), lookbehind: true, greedy: true, inside: n }, operator: /[=:]|-[->]/, punctuation: /[\[\]{};,]/ }, e.languages.gv = e.languages.dot;
})(Prism);
