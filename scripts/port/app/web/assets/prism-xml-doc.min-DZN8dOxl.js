!(function(a) {
  function e(e2, n2) {
    a.languages[e2] && a.languages.insertBefore(e2, "comment", { "doc-comment": n2 });
  }
  var n = a.languages.markup.tag, t = { pattern: /\/\/\/.*/, greedy: true, alias: "comment", inside: { tag: n } }, g = { pattern: /'''.*/, greedy: true, alias: "comment", inside: { tag: n } };
  e("csharp", t), e("fsharp", t), e("vbnet", g);
})(Prism);
