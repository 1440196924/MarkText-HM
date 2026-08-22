(function(Prism2) {
  function insertDocComment(lang, docComment) {
    if (Prism2.languages[lang]) {
      Prism2.languages.insertBefore(lang, "comment", {
        "doc-comment": docComment
      });
    }
  }
  var tag = Prism2.languages.markup.tag;
  var slashDocComment = {
    pattern: /\/\/\/.*/,
    greedy: true,
    alias: "comment",
    inside: {
      "tag": tag
    }
  };
  var tickDocComment = {
    pattern: /'''.*/,
    greedy: true,
    alias: "comment",
    inside: {
      "tag": tag
    }
  };
  insertDocComment("csharp", slashDocComment);
  insertDocComment("fsharp", slashDocComment);
  insertDocComment("vbnet", tickDocComment);
})(Prism);
