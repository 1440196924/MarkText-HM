!(function(e) {
  for (var t = `[^<()"']|\\((?:<expr>)*\\)|<(?!#--)|<#--(?:[^-]|-(?!->))*-->|"(?:[^\\\\"]|\\\\.)*"|'(?:[^\\\\']|\\\\.)*'`, n = 0; n < 2; n++) t = t.replace(/<expr>/g, (function() {
    return t;
  }));
  t = t.replace(/<expr>/g, "[^\\s\\S]");
  var i = { comment: /<#--[\s\S]*?-->/, string: [{ pattern: /\br("|')(?:(?!\1)[^\\]|\\.)*\1/, greedy: true }, { pattern: RegExp(`("|')(?:(?!\\1|\\$\\{)[^\\\\]|\\\\.|\\$\\{(?:(?!\\})(?:<expr>))*\\})*\\1`.replace(/<expr>/g, (function() {
    return t;
  }))), greedy: true, inside: { interpolation: { pattern: RegExp("((?:^|[^\\\\])(?:\\\\\\\\)*)\\$\\{(?:(?!\\})(?:<expr>))*\\}".replace(/<expr>/g, (function() {
    return t;
  }))), lookbehind: true, inside: { "interpolation-punctuation": { pattern: /^\$\{|\}$/, alias: "punctuation" }, rest: null } } } }], keyword: /\b(?:as)\b/, boolean: /\b(?:false|true)\b/, "builtin-function": { pattern: /((?:^|[^?])\?\s*)\w+/, lookbehind: true, alias: "function" }, function: /\b\w+(?=\s*\()/, number: /\b\d+(?:\.\d+)?\b/, operator: /\.\.[<*!]?|->|--|\+\+|&&|\|\||\?{1,2}|[-+*/%!=<>]=?|\b(?:gt|gte|lt|lte)\b/, punctuation: /[,;.:()[\]{}]/ };
  i.string[1].inside.interpolation.inside.rest = i, e.languages.ftl = { "ftl-comment": { pattern: /^<#--[\s\S]*/, alias: "comment" }, "ftl-directive": { pattern: /^<[\s\S]+>$/, inside: { directive: { pattern: /(^<\/?)[#@][a-z]\w*/i, lookbehind: true, alias: "keyword" }, punctuation: /^<\/?|\/?>$/, content: { pattern: /\s*\S[\s\S]*/, alias: "ftl", inside: i } } }, "ftl-interpolation": { pattern: /^\$\{[\s\S]*\}$/, inside: { punctuation: /^\$\{|\}$/, content: { pattern: /\s*\S[\s\S]*/, alias: "ftl", inside: i } } } }, e.hooks.add("before-tokenize", (function(n2) {
    var i2 = RegExp("<#--[^]*?-->|</?[#@][a-zA-Z](?:<expr>)*?>|\\$\\{(?:<expr>)*?\\}".replace(/<expr>/g, (function() {
      return t;
    })), "gi");
    e.languages["markup-templating"].buildPlaceholders(n2, "ftl", i2);
  })), e.hooks.add("after-tokenize", (function(t2) {
    e.languages["markup-templating"].tokenizePlaceholders(t2, "ftl");
  }));
})(Prism);
