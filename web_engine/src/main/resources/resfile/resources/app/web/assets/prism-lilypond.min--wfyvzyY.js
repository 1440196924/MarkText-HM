!(function(e) {
  for (var n = '\\((?:[^();"#\\\\]|\\\\[^]|;.*(?!.)|"(?:[^"\\\\]|\\\\.)*"|#(?:\\{(?:(?!#\\})[^])*#\\}|[^{])|<expr>)*\\)', i = 0; i < 5; i++) n = n.replace(/<expr>/g, (function() {
    return n;
  }));
  n = n.replace(/<expr>/g, "[^\\s\\S]");
  var d = e.languages.lilypond = { comment: /%(?:(?!\{).*|\{[\s\S]*?%\})/, "embedded-scheme": { pattern: RegExp('(^|[=\\s])#(?:"(?:[^"\\\\]|\\\\.)*"|[^\\s()"]*(?:[^\\s()]|<expr>))'.replace(/<expr>/g, (function() {
    return n;
  })), "m"), lookbehind: true, greedy: true, inside: { scheme: { pattern: /^(#)[\s\S]+$/, lookbehind: true, alias: "language-scheme", inside: { "embedded-lilypond": { pattern: /#\{[\s\S]*?#\}/, greedy: true, inside: { punctuation: /^#\{|#\}$/, lilypond: { pattern: /[\s\S]+/, alias: "language-lilypond", inside: null } } }, rest: e.languages.scheme } }, punctuation: /#/ } }, string: { pattern: /"(?:[^"\\]|\\.)*"/, greedy: true }, "class-name": { pattern: /(\\new\s+)[\w-]+/, lookbehind: true }, keyword: { pattern: /\\[a-z][-\w]*/i, inside: { punctuation: /^\\/ } }, operator: /[=|]|<<|>>/, punctuation: { pattern: /(^|[a-z\d])(?:'+|,+|[_^]?-[_^]?(?:[-+^!>._]|(?=\d))|[_^]\.?|[.!])|[{}()[\]<>^~]|\\[()[\]<>\\!]|--|__/, lookbehind: true }, number: /\b\d+(?:\/\d+)?\b/ };
  d["embedded-scheme"].inside.scheme.inside["embedded-lilypond"].inside.lilypond.inside = d, e.languages.ly = d;
})(Prism);
