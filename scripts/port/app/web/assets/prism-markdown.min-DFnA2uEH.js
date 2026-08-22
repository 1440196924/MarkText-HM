!(function(n) {
  function e(n2) {
    return n2 = n2.replace(/<inner>/g, (function() {
      return "(?:\\\\.|[^\\\\\n\r]|(?:\n|\r\n?)(?![\r\n]))";
    })), RegExp("((?:^|[^\\\\])(?:\\\\{2})*)(?:" + n2 + ")");
  }
  var t = "(?:\\\\.|``(?:[^`\r\n]|`(?!`))+``|`[^`\r\n]+`|[^\\\\|\r\n`])+", a = "\\|?__(?:\\|__)+\\|?(?:(?:\n|\r\n?)|(?![^]))".replace(/__/g, (function() {
    return t;
  })), i = "\\|?[ 	]*:?-{3,}:?[ 	]*(?:\\|[ 	]*:?-{3,}:?[ 	]*)+\\|?(?:\n|\r\n?)";
  n.languages.markdown = n.languages.extend("markup", {}), n.languages.insertBefore("markdown", "prolog", { "front-matter-block": { pattern: /(^(?:\s*[\r\n])?)---(?!.)[\s\S]*?[\r\n]---(?!.)/, lookbehind: true, greedy: true, inside: { punctuation: /^---|---$/, "front-matter": { pattern: /\S+(?:\s+\S+)*/, alias: ["yaml", "language-yaml"], inside: n.languages.yaml } } }, blockquote: { pattern: /^>(?:[\t ]*>)*/m, alias: "punctuation" }, table: { pattern: RegExp("^" + a + i + "(?:" + a + ")*", "m"), inside: { "table-data-rows": { pattern: RegExp("^(" + a + i + ")(?:" + a + ")*$"), lookbehind: true, inside: { "table-data": { pattern: RegExp(t), inside: n.languages.markdown }, punctuation: /\|/ } }, "table-line": { pattern: RegExp("^(" + a + ")" + i + "$"), lookbehind: true, inside: { punctuation: /\||:?-{3,}:?/ } }, "table-header-row": { pattern: RegExp("^" + a + "$"), inside: { "table-header": { pattern: RegExp(t), alias: "important", inside: n.languages.markdown }, punctuation: /\|/ } } } }, code: [{ pattern: /((?:^|\n)[ \t]*\n|(?:^|\r\n?)[ \t]*\r\n?)(?: {4}|\t).+(?:(?:\n|\r\n?)(?: {4}|\t).+)*/, lookbehind: true, alias: "keyword" }, { pattern: /^```[\s\S]*?^```$/m, greedy: true, inside: { "code-block": { pattern: /^(```.*(?:\n|\r\n?))[\s\S]+?(?=(?:\n|\r\n?)^```$)/m, lookbehind: true }, "code-language": { pattern: /^(```).+/, lookbehind: true }, punctuation: /```/ } }], title: [{ pattern: /\S.*(?:\n|\r\n?)(?:==+|--+)(?=[ \t]*$)/m, alias: "important", inside: { punctuation: /==+$|--+$/ } }, { pattern: /(^\s*)#.+/m, lookbehind: true, alias: "important", inside: { punctuation: /^#+|#+$/ } }], hr: { pattern: /(^\s*)([*-])(?:[\t ]*\2){2,}(?=\s*$)/m, lookbehind: true, alias: "punctuation" }, list: { pattern: /(^\s*)(?:[*+-]|\d+\.)(?=[\t ].)/m, lookbehind: true, alias: "punctuation" }, "url-reference": { pattern: /!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[\t ]+(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\)))?/, inside: { variable: { pattern: /^(!?\[)[^\]]+/, lookbehind: true }, string: /(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\))$/, punctuation: /^[\[\]!:]|[<>]/ }, alias: "url" }, bold: { pattern: e("\\b__(?:(?!_)<inner>|_(?:(?!_)<inner>)+_)+__\\b|\\*\\*(?:(?!\\*)<inner>|\\*(?:(?!\\*)<inner>)+\\*)+\\*\\*"), lookbehind: true, greedy: true, inside: { content: { pattern: /(^..)[\s\S]+(?=..$)/, lookbehind: true, inside: {} }, punctuation: /\*\*|__/ } }, italic: { pattern: e("\\b_(?:(?!_)<inner>|__(?:(?!_)<inner>)+__)+_\\b|\\*(?:(?!\\*)<inner>|\\*\\*(?:(?!\\*)<inner>)+\\*\\*)+\\*"), lookbehind: true, greedy: true, inside: { content: { pattern: /(^.)[\s\S]+(?=.$)/, lookbehind: true, inside: {} }, punctuation: /[*_]/ } }, strike: { pattern: e("(~~?)(?:(?!~)<inner>)+\\2"), lookbehind: true, greedy: true, inside: { content: { pattern: /(^~~?)[\s\S]+(?=\1$)/, lookbehind: true, inside: {} }, punctuation: /~~?/ } }, "code-snippet": { pattern: /(^|[^\\`])(?:``[^`\r\n]+(?:`[^`\r\n]+)*``(?!`)|`[^`\r\n]+`(?!`))/, lookbehind: true, greedy: true, alias: ["code", "keyword"] }, url: { pattern: e('!?\\[(?:(?!\\])<inner>)+\\](?:\\([^\\s)]+(?:[	 ]+"(?:\\\\.|[^"\\\\])*")?\\)|[ 	]?\\[(?:(?!\\])<inner>)+\\])'), lookbehind: true, greedy: true, inside: { operator: /^!/, content: { pattern: /(^\[)[^\]]+(?=\])/, lookbehind: true, inside: {} }, variable: { pattern: /(^\][ \t]?\[)[^\]]+(?=\]$)/, lookbehind: true }, url: { pattern: /(^\]\()[^\s)]+/, lookbehind: true }, string: { pattern: /(^[ \t]+)"(?:\\.|[^"\\])*"(?=\)$)/, lookbehind: true } } } }), ["url", "bold", "italic", "strike"].forEach((function(e2) {
    ["url", "bold", "italic", "strike", "code-snippet"].forEach((function(t2) {
      e2 !== t2 && (n.languages.markdown[e2].inside.content.inside[t2] = n.languages.markdown[t2]);
    }));
  })), n.hooks.add("after-tokenize", (function(n2) {
    "markdown" !== n2.language && "md" !== n2.language || (function n3(e2) {
      if (e2 && "string" != typeof e2) for (var t2 = 0, a2 = e2.length; t2 < a2; t2++) {
        var i2 = e2[t2];
        if ("code" === i2.type) {
          var r2 = i2.content[1], o2 = i2.content[3];
          if (r2 && o2 && "code-language" === r2.type && "code-block" === o2.type && "string" == typeof r2.content) {
            var l2 = r2.content.replace(/\b#/g, "sharp").replace(/\b\+\+/g, "pp"), s = "language-" + (l2 = (/[a-z][\w-]*/i.exec(l2) || [""])[0].toLowerCase());
            o2.alias ? "string" == typeof o2.alias ? o2.alias = [o2.alias, s] : o2.alias.push(s) : o2.alias = [s];
          }
        } else n3(i2.content);
      }
    })(n2.tokens);
  })), n.hooks.add("wrap", (function(e2) {
    if ("code-block" === e2.type) {
      for (var t2 = "", a2 = 0, i2 = e2.classes.length; a2 < i2; a2++) {
        var s = e2.classes[a2], d = /language-(.+)/.exec(s);
        if (d) {
          t2 = d[1];
          break;
        }
      }
      var p = n.languages[t2];
      if (p) e2.content = n.highlight(e2.content.replace(r, "").replace(/&(\w{1,8}|#x?[\da-f]{1,8});/gi, (function(n2, e3) {
        var t3;
        return "#" === (e3 = e3.toLowerCase())[0] ? (t3 = "x" === e3[1] ? parseInt(e3.slice(2), 16) : Number(e3.slice(1)), l(t3)) : o[e3] || n2;
      })), p, t2);
      else if (t2 && "none" !== t2 && n.plugins.autoloader) {
        var u = "md-" + (/* @__PURE__ */ new Date()).valueOf() + "-" + Math.floor(1e16 * Math.random());
        e2.attributes.id = u, n.plugins.autoloader.loadLanguages(t2, (function() {
          var e3 = document.getElementById(u);
          e3 && (e3.innerHTML = n.highlight(e3.textContent, n.languages[t2], t2));
        }));
      }
    }
  }));
  var r = RegExp(n.languages.markup.tag.pattern.source, "gi"), o = { amp: "&", lt: "<", gt: ">", quot: '"' }, l = String.fromCodePoint || String.fromCharCode;
  n.languages.md = n.languages.markdown;
})(Prism);
