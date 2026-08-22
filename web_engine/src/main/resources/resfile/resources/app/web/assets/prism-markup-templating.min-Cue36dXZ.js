!(function(e) {
  function n(e2, n2) {
    return "___" + e2.toUpperCase() + n2 + "___";
  }
  Object.defineProperties(e.languages["markup-templating"] = {}, { buildPlaceholders: { value: function(t, a, r, o) {
    if (t.language === a) {
      var c = t.tokenStack = [];
      t.code = t.code.replace(r, (function(e2) {
        if ("function" == typeof o && !o(e2)) return e2;
        for (var r2, i = c.length; -1 !== t.code.indexOf(r2 = n(a, i)); ) ++i;
        return c[i] = e2, r2;
      })), t.grammar = e.languages.markup;
    }
  } }, tokenizePlaceholders: { value: function(t, a) {
    if (t.language === a && t.tokenStack) {
      t.grammar = e.languages[a];
      var r = 0, o = Object.keys(t.tokenStack);
      !(function c(i) {
        for (var u = 0; u < i.length && !(r >= o.length); u++) {
          var g = i[u];
          if ("string" == typeof g || g.content && "string" == typeof g.content) {
            var l = o[r], s = t.tokenStack[l], f = "string" == typeof g ? g : g.content, p = n(a, l), k = f.indexOf(p);
            if (k > -1) {
              ++r;
              var m = f.substring(0, k), d = new e.Token(a, e.tokenize(s, t.grammar), "language-" + a, s), h = f.substring(k + p.length), v = [];
              m && v.push.apply(v, c([m])), v.push(d), h && v.push.apply(v, c([h])), "string" == typeof g ? i.splice.apply(i, [u, 1].concat(v)) : g.content = v;
            }
          } else g.content && c(g.content);
        }
        return i;
      })(t.tokens);
    }
  } } });
})(Prism);
