!(function(e) {
  e.languages.smarty = { comment: { pattern: /^\{\*[\s\S]*?\*\}/, greedy: true }, "embedded-php": { pattern: /^\{php\}[\s\S]*?\{\/php\}/, greedy: true, inside: { smarty: { pattern: /^\{php\}|\{\/php\}$/, inside: null }, php: { pattern: /[\s\S]+/, alias: "language-php", inside: e.languages.php } } }, string: [{ pattern: /"(?:\\.|[^"\\\r\n])*"/, greedy: true, inside: { interpolation: { pattern: /\{[^{}]*\}|`[^`]*`/, inside: { "interpolation-punctuation": { pattern: /^[{`]|[`}]$/, alias: "punctuation" }, expression: { pattern: /[\s\S]+/, inside: null } } }, variable: /\$\w+/ } }, { pattern: /'(?:\\.|[^'\\\r\n])*'/, greedy: true }], keyword: { pattern: /(^\{\/?)[a-z_]\w*\b(?!\()/i, lookbehind: true, greedy: true }, delimiter: { pattern: /^\{\/?|\}$/, greedy: true, alias: "punctuation" }, number: /\b0x[\dA-Fa-f]+|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee][-+]?\d+)?/, variable: [/\$(?!\d)\w+/, /#(?!\d)\w+#/, { pattern: /(\.|->|\w\s*=)(?!\d)\w+\b(?!\()/, lookbehind: true }, { pattern: /(\[)(?!\d)\w+(?=\])/, lookbehind: true }], function: { pattern: /(\|\s*)@?[a-z_]\w*|\b[a-z_]\w*(?=\()/i, lookbehind: true }, "attr-name": /\b[a-z_]\w*(?=\s*=)/i, boolean: /\b(?:false|no|off|on|true|yes)\b/, punctuation: /[\[\](){}.,:`]|->/, operator: [/[+\-*\/%]|==?=?|[!<>]=?|&&|\|\|?/, /\bis\s+(?:not\s+)?(?:div|even|odd)(?:\s+by)?\b/, /\b(?:and|eq|gt?e|gt|lt?e|lt|mod|neq?|not|or)\b/] }, e.languages.smarty["embedded-php"].inside.smarty.inside = e.languages.smarty, e.languages.smarty.string[0].inside.interpolation.inside.expression.inside = e.languages.smarty;
  var n = /"(?:\\.|[^"\\\r\n])*"|'(?:\\.|[^'\\\r\n])*'/, t = RegExp("\\{\\*[^]*?\\*\\}|\\{php\\}[^]*?\\{/php\\}|" + `\\{(?:[^{}"']|<str>|\\{(?:[^{}"']|<str>|\\{(?:[^{}"']|<str>)*\\})*\\})*\\}`.replace(/<str>/g, (function() {
    return n.source;
  })), "g");
  e.hooks.add("before-tokenize", (function(n2) {
    var a = false;
    e.languages["markup-templating"].buildPlaceholders(n2, "smarty", t, (function(e2) {
      return "{/literal}" === e2 && (a = false), !a && ("{literal}" === e2 && (a = true), true);
    }));
  })), e.hooks.add("after-tokenize", (function(n2) {
    e.languages["markup-templating"].tokenizePlaceholders(n2, "smarty");
  }));
})(Prism);
