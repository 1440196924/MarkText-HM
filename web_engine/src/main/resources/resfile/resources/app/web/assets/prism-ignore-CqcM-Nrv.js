(function(Prism2) {
  Prism2.languages.ignore = {
    // https://git-scm.com/docs/gitignore
    "comment": /^#.*/m,
    "entry": {
      pattern: /\S(?:.*(?:(?:\\ )|\S))?/,
      alias: "string",
      inside: {
        "operator": /^!|\*\*?|\?/,
        "regex": {
          pattern: /(^|[^\\])\[[^\[\]]*\]/,
          lookbehind: true
        },
        "punctuation": /\//
      }
    }
  };
  Prism2.languages.gitignore = Prism2.languages.ignore;
  Prism2.languages.hgignore = Prism2.languages.ignore;
  Prism2.languages.npmignore = Prism2.languages.ignore;
})(Prism);
