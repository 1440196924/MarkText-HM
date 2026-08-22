!(function(e) {
  function t(e2, t2, a) {
    return { pattern: RegExp("<#" + e2 + "[\\s\\S]*?#>"), alias: "block", inside: { delimiter: { pattern: RegExp("^<#" + e2 + "|#>$"), alias: "important" }, content: { pattern: /[\s\S]+/, inside: t2, alias: a } } };
  }
  e.languages["t4-templating"] = Object.defineProperty({}, "createT4", { value: function(a) {
    var n = e.languages[a], i = "language-" + a;
    return { block: { pattern: /<#[\s\S]+?#>/, inside: { directive: t("@", { "attr-value": { pattern: /=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+)/, inside: { punctuation: /^=|^["']|["']$/ } }, keyword: /\b\w+(?=\s)/, "attr-name": /\b\w+/ }), expression: t("=", n, i), "class-feature": t("\\+", n, i), standard: t("", n, i) } } };
  } });
})(Prism);
