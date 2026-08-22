(function(Prism2) {
  Prism2.languages.erb = {
    "delimiter": {
      pattern: /^(\s*)<%=?|%>(?=\s*$)/,
      lookbehind: true,
      alias: "punctuation"
    },
    "ruby": {
      pattern: /\s*\S[\s\S]*/,
      alias: "language-ruby",
      inside: Prism2.languages.ruby
    }
  };
  Prism2.hooks.add("before-tokenize", function(env) {
    var erbPattern = /<%=?(?:[^\r\n]|[\r\n](?!=begin)|[\r\n]=begin\s(?:[^\r\n]|[\r\n](?!=end))*[\r\n]=end)+?%>/g;
    Prism2.languages["markup-templating"].buildPlaceholders(env, "erb", erbPattern);
  });
  Prism2.hooks.add("after-tokenize", function(env) {
    Prism2.languages["markup-templating"].tokenizePlaceholders(env, "erb");
  });
})(Prism);
