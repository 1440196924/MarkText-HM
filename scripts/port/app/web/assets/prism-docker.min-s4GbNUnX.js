!(function(e) {
  var n = "(?:[ 	]+(?![ 	])(?:<SP_BS>)?|<SP_BS>)".replace(/<SP_BS>/g, (function() {
    return "\\\\[\r\n](?:\\s|\\\\[\r\n]|#.*(?!.))*(?![\\s#]|\\\\[\r\n])";
  })), r = `"(?:[^"\\\\\r
]|\\\\(?:\r
|[^]))*"|'(?:[^'\\\\\r
]|\\\\(?:\r
|[^]))*'`, t = `--[\\w-]+=(?:<STR>|(?!["'])(?:[^\\s\\\\]|\\\\.)+)`.replace(/<STR>/g, (function() {
    return r;
  })), o = { pattern: RegExp(r), greedy: true }, i = { pattern: /(^[ \t]*)#.*/m, lookbehind: true, greedy: true };
  function a(e2, r2) {
    return e2 = e2.replace(/<OPT>/g, (function() {
      return t;
    })).replace(/<SP>/g, (function() {
      return n;
    })), RegExp(e2, r2);
  }
  e.languages.docker = { instruction: { pattern: /(^[ \t]*)(?:ADD|ARG|CMD|COPY|ENTRYPOINT|ENV|EXPOSE|FROM|HEALTHCHECK|LABEL|MAINTAINER|ONBUILD|RUN|SHELL|STOPSIGNAL|USER|VOLUME|WORKDIR)(?=\s)(?:\\.|[^\r\n\\])*(?:\\$(?:\s|#.*$)*(?![\s#])(?:\\.|[^\r\n\\])*)*/im, lookbehind: true, greedy: true, inside: { options: { pattern: a("(^(?:ONBUILD<SP>)?\\w+<SP>)<OPT>(?:<SP><OPT>)*", "i"), lookbehind: true, greedy: true, inside: { property: { pattern: /(^|\s)--[\w-]+/, lookbehind: true }, string: [o, { pattern: /(=)(?!["'])(?:[^\s\\]|\\.)+/, lookbehind: true }], operator: /\\$/m, punctuation: /=/ } }, keyword: [{ pattern: a("(^(?:ONBUILD<SP>)?HEALTHCHECK<SP>(?:<OPT><SP>)*)(?:CMD|NONE)\\b", "i"), lookbehind: true, greedy: true }, { pattern: a("(^(?:ONBUILD<SP>)?FROM<SP>(?:<OPT><SP>)*(?!--)[^ 	\\\\]+<SP>)AS", "i"), lookbehind: true, greedy: true }, { pattern: a("(^ONBUILD<SP>)\\w+", "i"), lookbehind: true, greedy: true }, { pattern: /^\w+/, greedy: true }], comment: i, string: o, variable: /\$(?:\w+|\{[^{}"'\\]*\})/, operator: /\\$/m } }, comment: i }, e.languages.dockerfile = e.languages.docker;
})(Prism);
