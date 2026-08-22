!(function(a) {
  var e = a.languages.javadoclike = { parameter: { pattern: /(^[\t ]*(?:\/{3}|\*|\/\*\*)\s*@(?:arg|arguments|param)\s+)\w+/m, lookbehind: true }, keyword: { pattern: /(^[\t ]*(?:\/{3}|\*|\/\*\*)\s*|\{)@[a-z][a-zA-Z-]+\b/m, lookbehind: true }, punctuation: /[{}]/ };
  Object.defineProperty(e, "addSupport", { value: function(e2, n) {
    "string" == typeof e2 && (e2 = [e2]), e2.forEach((function(e3) {
      !(function(e4, n2) {
        var t = "doc-comment", r = a.languages[e4];
        if (r) {
          var o = r[t];
          if (o || (o = (r = a.languages.insertBefore(e4, "comment", { "doc-comment": { pattern: /(^|[^\\])\/\*\*[^/][\s\S]*?(?:\*\/|$)/, lookbehind: true, alias: "comment" } }))[t]), o instanceof RegExp && (o = r[t] = { pattern: o }), Array.isArray(o)) for (var i = 0, s = o.length; i < s; i++) o[i] instanceof RegExp && (o[i] = { pattern: o[i] }), n2(o[i]);
          else n2(o);
        }
      })(e3, (function(a2) {
        a2.inside || (a2.inside = {}), a2.inside.rest = n;
      }));
    }));
  } }), e.addSupport(["java", "javascript", "php"], e);
})(Prism);
