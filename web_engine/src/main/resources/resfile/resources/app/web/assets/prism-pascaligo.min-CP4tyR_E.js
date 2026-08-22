!(function(e) {
  var n = "(?:\\b\\w+(?:<braces>)?|<braces>)".replace(/<braces>/g, (function() {
    return "\\((?:[^()]|\\((?:[^()]|\\([^()]*\\))*\\))*\\)";
  })), t = e.languages.pascaligo = { comment: /\(\*[\s\S]+?\*\)|\/\/.*/, string: { pattern: /(["'`])(?:\\[\s\S]|(?!\1)[^\\])*\1|\^[a-z]/i, greedy: true }, "class-name": [{ pattern: RegExp("(\\btype\\s+\\w+\\s+is\\s+)<type>".replace(/<type>/g, (function() {
    return n;
  })), "i"), lookbehind: true, inside: null }, { pattern: RegExp("<type>(?=\\s+is\\b)".replace(/<type>/g, (function() {
    return n;
  })), "i"), inside: null }, { pattern: RegExp("(:\\s*)<type>".replace(/<type>/g, (function() {
    return n;
  }))), lookbehind: true, inside: null }], keyword: { pattern: /(^|[^&])\b(?:begin|block|case|const|else|end|fail|for|from|function|if|is|nil|of|remove|return|skip|then|type|var|while|with)\b/i, lookbehind: true }, boolean: { pattern: /(^|[^&])\b(?:False|True)\b/i, lookbehind: true }, builtin: { pattern: /(^|[^&])\b(?:bool|int|list|map|nat|record|string|unit)\b/i, lookbehind: true }, function: /\b\w+(?=\s*\()/, number: [/%[01]+|&[0-7]+|\$[a-f\d]+/i, /\b\d+(?:\.\d+)?(?:e[+-]?\d+)?(?:mtz|n)?/i], operator: /->|=\/=|\.\.|\*\*|:=|<[<=>]?|>[>=]?|[+\-*\/]=?|[@^=|]|\b(?:and|mod|or)\b/, punctuation: /\(\.|\.\)|[()\[\]:;,.{}]/ }, i = ["comment", "keyword", "builtin", "operator", "punctuation"].reduce((function(e2, n2) {
    return e2[n2] = t[n2], e2;
  }), {});
  t["class-name"].forEach((function(e2) {
    e2.inside = i;
  }));
})(Prism);
