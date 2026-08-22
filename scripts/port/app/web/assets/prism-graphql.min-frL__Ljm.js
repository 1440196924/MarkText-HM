Prism.languages.graphql = { comment: /#.*/, description: { pattern: /(?:"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*")(?=\s*[a-z_])/i, greedy: true, alias: "string", inside: { "language-markdown": { pattern: /(^"(?:"")?)(?!\1)[\s\S]+(?=\1$)/, lookbehind: true, inside: Prism.languages.markdown } } }, string: { pattern: /"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*"/, greedy: true }, number: /(?:\B-|\b)\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i, boolean: /\b(?:false|true)\b/, variable: /\$[a-z_]\w*/i, directive: { pattern: /@[a-z_]\w*/i, alias: "function" }, "attr-name": { pattern: /\b[a-z_]\w*(?=\s*(?:\((?:[^()"]|"(?:\\.|[^\\"\r\n])*")*\))?:)/i, greedy: true }, "atom-input": { pattern: /\b[A-Z]\w*Input\b/, alias: "class-name" }, scalar: /\b(?:Boolean|Float|ID|Int|String)\b/, constant: /\b[A-Z][A-Z_\d]*\b/, "class-name": { pattern: /(\b(?:enum|implements|interface|on|scalar|type|union)\s+|&\s*|:\s*|\[)[A-Z_]\w*/, lookbehind: true }, fragment: { pattern: /(\bfragment\s+|\.{3}\s*(?!on\b))[a-zA-Z_]\w*/, lookbehind: true, alias: "function" }, "definition-mutation": { pattern: /(\bmutation\s+)[a-zA-Z_]\w*/, lookbehind: true, alias: "function" }, "definition-query": { pattern: /(\bquery\s+)[a-zA-Z_]\w*/, lookbehind: true, alias: "function" }, keyword: /\b(?:directive|enum|extend|fragment|implements|input|interface|mutation|on|query|repeatable|scalar|schema|subscription|type|union)\b/, operator: /[!=|&]|\.{3}/, "property-query": /\w+(?=\s*\()/, object: /\w+(?=\s*\{)/, punctuation: /[!(){}\[\]:=,]/, property: /\w+/ }, Prism.hooks.add("after-tokenize", (function(n) {
  if ("graphql" === n.language) for (var t = n.tokens.filter((function(n2) {
    return "string" != typeof n2 && "comment" !== n2.type && "scalar" !== n2.type;
  })), e = 0; e < t.length; ) {
    var a = t[e++];
    if ("keyword" === a.type && "mutation" === a.content) {
      var r = [];
      if (c(["definition-mutation", "punctuation"]) && "(" === l(1).content) {
        e += 2;
        var i = f(/^\($/, /^\)$/);
        if (-1 === i) continue;
        for (; e < i; e++) {
          var o = l(0);
          "variable" === o.type && (b(o, "variable-input"), r.push(o.content));
        }
        e = i + 1;
      }
      if (c(["punctuation", "property-query"]) && "{" === l(0).content && (e++, b(l(0), "property-mutation"), r.length > 0)) {
        var s = f(/^\{$/, /^\}$/);
        if (-1 === s) continue;
        for (var u = e; u < s; u++) {
          var p = t[u];
          "variable" === p.type && r.indexOf(p.content) >= 0 && b(p, "variable-input");
        }
      }
    }
  }
  function l(n2) {
    return t[e + n2];
  }
  function c(n2, t2) {
    t2 = t2 || 0;
    for (var e2 = 0; e2 < n2.length; e2++) {
      var a2 = l(e2 + t2);
      if (!a2 || a2.type !== n2[e2]) return false;
    }
    return true;
  }
  function f(n2, a2) {
    for (var r2 = 1, i2 = e; i2 < t.length; i2++) {
      var o2 = t[i2], s2 = o2.content;
      if ("punctuation" === o2.type && "string" == typeof s2) {
        if (n2.test(s2)) r2++;
        else if (a2.test(s2) && 0 == --r2) return i2;
      }
    }
    return -1;
  }
  function b(n2, t2) {
    var e2 = n2.alias;
    e2 ? Array.isArray(e2) || (n2.alias = e2 = [e2]) : n2.alias = e2 = [], e2.push(t2);
  }
}));
