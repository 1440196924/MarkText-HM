!(function(e) {
  var a = /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/, t = /\b\d+(?:\.\d+)?(?:[eE][+-]?\d+)?\b|\b0x[\dA-F]+\b/;
  e.languages.soy = { comment: [/\/\*[\s\S]*?\*\//, { pattern: /(\s)\/\/.*/, lookbehind: true, greedy: true }], "command-arg": { pattern: /(\{+\/?\s*(?:alias|call|delcall|delpackage|deltemplate|namespace|template)\s+)\.?[\w.]+/, lookbehind: true, alias: "string", inside: { punctuation: /\./ } }, parameter: { pattern: /(\{+\/?\s*@?param\??\s+)\.?[\w.]+/, lookbehind: true, alias: "variable" }, keyword: [{ pattern: /(\{+\/?[^\S\r\n]*)(?:\\[nrt]|alias|call|case|css|default|delcall|delpackage|deltemplate|else(?:if)?|fallbackmsg|for(?:each)?|if(?:empty)?|lb|let|literal|msg|namespace|nil|@?param\??|rb|sp|switch|template|xid)/, lookbehind: true }, /\b(?:any|as|attributes|bool|css|float|html|in|int|js|list|map|null|number|string|uri)\b/], delimiter: { pattern: /^\{+\/?|\/?\}+$/, alias: "punctuation" }, property: /\w+(?==)/, variable: { pattern: /\$[^\W\d]\w*(?:\??(?:\.\w+|\[[^\]]+\]))*/, inside: { string: { pattern: a, greedy: true }, number: t, punctuation: /[\[\].?]/ } }, string: { pattern: a, greedy: true }, function: [/\w+(?=\()/, { pattern: /(\|[^\S\r\n]*)\w+/, lookbehind: true }], boolean: /\b(?:false|true)\b/, number: t, operator: /\?:?|<=?|>=?|==?|!=|[+*/%-]|\b(?:and|not|or)\b/, punctuation: /[{}()\[\]|.,:]/ }, e.hooks.add("before-tokenize", (function(a2) {
    var t2 = false;
    e.languages["markup-templating"].buildPlaceholders(a2, "soy", /\{\{.+?\}\}|\{.+?\}|\s\/\/.*|\/\*[\s\S]*?\*\//g, (function(e2) {
      return "{/literal}" === e2 && (t2 = false), !t2 && ("{literal}" === e2 && (t2 = true), true);
    }));
  })), e.hooks.add("after-tokenize", (function(a2) {
    e.languages["markup-templating"].tokenizePlaceholders(a2, "soy");
  }));
})(Prism);
