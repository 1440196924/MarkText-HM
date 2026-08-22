!(function(t) {
  var n = { pattern: /(^[ \t]*| {2}|\t)#.*/m, lookbehind: true, greedy: true }, e = { pattern: /((?:^|[^\\])(?:\\{2})*)[$@&%]\{(?:[^{}\r\n]|\{[^{}\r\n]*\})*\}/, lookbehind: true, inside: { punctuation: /^[$@&%]\{|\}$/ } };
  function a(t2, a2) {
    var r2 = { "section-header": { pattern: /^ ?\*{3}.+?\*{3}/, alias: "keyword" } };
    for (var o2 in a2) r2[o2] = a2[o2];
    return r2.tag = { pattern: /([\r\n](?: {2}|\t)[ \t]*)\[[-\w]+\]/, lookbehind: true, inside: { punctuation: /\[|\]/ } }, r2.variable = e, r2.comment = n, { pattern: RegExp("^ ?\\*{3}[ 	]*<name>[ 	]*\\*{3}(?:.|[\r\n](?!\\*{3}))*".replace(/<name>/g, (function() {
      return t2;
    })), "im"), alias: "section", inside: r2 };
  }
  var r = { pattern: /(\[Documentation\](?: {2}|\t)[ \t]*)(?![ \t]|#)(?:.|(?:\r\n?|\n)[ \t]*\.{3})+/, lookbehind: true, alias: "string" }, o = { pattern: /([\r\n] ?)(?!#)(?:\S(?:[ \t]\S)*)+/, lookbehind: true, alias: "function", inside: { variable: e } }, i = { pattern: /([\r\n](?: {2}|\t)[ \t]*)(?!\[|\.{3}|#)(?:\S(?:[ \t]\S)*)+/, lookbehind: true, inside: { variable: e } };
  t.languages.robotframework = { settings: a("Settings", { documentation: { pattern: /([\r\n] ?Documentation(?: {2}|\t)[ \t]*)(?![ \t]|#)(?:.|(?:\r\n?|\n)[ \t]*\.{3})+/, lookbehind: true, alias: "string" }, property: { pattern: /([\r\n] ?)(?!\.{3}|#)(?:\S(?:[ \t]\S)*)+/, lookbehind: true } }), variables: a("Variables"), "test-cases": a("Test Cases", { "test-name": o, documentation: r, property: i }), keywords: a("Keywords", { "keyword-name": o, documentation: r, property: i }), tasks: a("Tasks", { "task-name": o, documentation: r, property: i }), comment: n }, t.languages.robot = t.languages.robotframework;
})(Prism);
