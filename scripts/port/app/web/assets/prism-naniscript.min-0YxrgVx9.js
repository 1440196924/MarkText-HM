!(function(e) {
  var a = /\{[^\r\n\[\]{}]*\}/, n = { "quoted-string": { pattern: /"(?:[^"\\]|\\.)*"/, alias: "operator" }, "command-param-id": { pattern: /(\s)\w+:/, lookbehind: true, alias: "property" }, "command-param-value": [{ pattern: a, alias: "selector" }, { pattern: /([\t ])\S+/, lookbehind: true, greedy: true, alias: "operator" }, { pattern: /\S(?:.*\S)?/, alias: "operator" }] };
  function t(e2) {
    return "string" == typeof e2 ? e2 : Array.isArray(e2) ? e2.map(t).join("") : t(e2.content);
  }
  e.languages.naniscript = { comment: { pattern: /^([\t ]*);.*/m, lookbehind: true }, define: { pattern: /^>.+/m, alias: "tag", inside: { value: { pattern: /(^>\w+[\t ]+)(?!\s)[^{}\r\n]+/, lookbehind: true, alias: "operator" }, key: { pattern: /(^>)\w+/, lookbehind: true } } }, label: { pattern: /^([\t ]*)#[\t ]*\w+[\t ]*$/m, lookbehind: true, alias: "regex" }, command: { pattern: /^([\t ]*)@\w+(?=[\t ]|$).*/m, lookbehind: true, alias: "function", inside: { "command-name": /^@\w+/, expression: { pattern: a, greedy: true, alias: "selector" }, "command-params": { pattern: /\s*\S[\s\S]*/, inside: n } } }, "generic-text": { pattern: /(^[ \t]*)[^#@>;\s].*/m, lookbehind: true, alias: "punctuation", inside: { "escaped-char": /\\[{}\[\]"]/, expression: { pattern: a, greedy: true, alias: "selector" }, "inline-command": { pattern: /\[[\t ]*\w[^\r\n\[\]]*\]/, greedy: true, alias: "function", inside: { "command-params": { pattern: /(^\[[\t ]*\w+\b)[\s\S]+(?=\]$)/, lookbehind: true, inside: n }, "command-param-name": { pattern: /^(\[[\t ]*)\w+/, lookbehind: true, alias: "name" }, "start-stop-char": /[\[\]]/ } } } } }, e.languages.nani = e.languages.naniscript, e.hooks.add("after-tokenize", (function(e2) {
    e2.tokens.forEach((function(e3) {
      if ("string" != typeof e3 && "generic-text" === e3.type) {
        var a2 = t(e3);
        (function(e4) {
          for (var a3 = [], n2 = 0; n2 < e4.length; n2++) {
            var t2 = e4[n2], r = "[]{}".indexOf(t2);
            if (-1 !== r) {
              if (r % 2 == 0) a3.push(r + 1);
              else if (a3.pop() !== r) return false;
            }
          }
          return 0 === a3.length;
        })(a2) || (e3.type = "bad-line", e3.content = a2);
      }
    }));
  }));
})(Prism);
