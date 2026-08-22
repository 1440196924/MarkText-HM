!(function(e) {
  function n(e2, n2) {
    return e2.replace(/<<(\d+)>>/g, (function(e3, r2) {
      return "(?:" + n2[+r2] + ")";
    }));
  }
  function r(e2, r2, a2) {
    return RegExp(n(e2, r2), "");
  }
  var a = RegExp("\\b(?:" + "Adj BigInt Bool Ctl Double false Int One Pauli PauliI PauliX PauliY PauliZ Qubit Range Result String true Unit Zero Adjoint adjoint apply as auto body borrow borrowing Controlled controlled distribute elif else fail fixup for function if in internal intrinsic invert is let mutable namespace new newtype open operation repeat return self set until use using while within".trim().replace(/ /g, "|") + ")\\b"), t = n("<<0>>(?:\\s*\\.\\s*<<0>>)*", ["\\b[A-Za-z_]\\w*\\b"]), i = { keyword: a, punctuation: /[<>()?,.:[\]]/ }, s = '"(?:\\\\.|[^\\\\"])*"';
  e.languages.qsharp = e.languages.extend("clike", { comment: /\/\/.*/, string: [{ pattern: r("(^|[^$\\\\])<<0>>", [s]), lookbehind: true, greedy: true }], "class-name": [{ pattern: r("(\\b(?:as|open)\\s+)<<0>>(?=\\s*(?:;|as\\b))", [t]), lookbehind: true, inside: i }, { pattern: r("(\\bnamespace\\s+)<<0>>(?=\\s*\\{)", [t]), lookbehind: true, inside: i }], keyword: a, number: /(?:\b0(?:x[\da-f]+|b[01]+|o[0-7]+)|(?:\B\.\d+|\b\d+(?:\.\d*)?)(?:e[-+]?\d+)?)l?\b/i, operator: /\band=|\bor=|\band\b|\bnot\b|\bor\b|<[-=]|[-=]>|>>>=?|<<<=?|\^\^\^=?|\|\|\|=?|&&&=?|w\/=?|~~~|[*\/+\-^=!%]=?/, punctuation: /::|[{}[\];(),.:]/ }), e.languages.insertBefore("qsharp", "number", { range: { pattern: /\.\./, alias: "operator" } });
  var o = (function(e2, n2) {
    for (var r2 = 0; r2 < 2; r2++) e2 = e2.replace(/<<self>>/g, (function() {
      return "(?:" + e2 + ")";
    }));
    return e2.replace(/<<self>>/g, "[^\\s\\S]");
  })(n('\\{(?:[^"{}]|<<0>>|<<self>>)*\\}', [s]));
  e.languages.insertBefore("qsharp", "string", { "interpolation-string": { pattern: r('\\$"(?:\\\\.|<<0>>|[^\\\\"{])*"', [o]), greedy: true, inside: { interpolation: { pattern: r("((?:^|[^\\\\])(?:\\\\\\\\)*)<<0>>", [o]), lookbehind: true, inside: { punctuation: /^\{|\}$/, expression: { pattern: /[\s\S]+/, alias: "language-qsharp", inside: e.languages.qsharp } } }, string: /[\s\S]+/ } } });
})(Prism), Prism.languages.qs = Prism.languages.qsharp;
