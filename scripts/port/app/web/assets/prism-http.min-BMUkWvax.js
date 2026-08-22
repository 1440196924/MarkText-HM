!(function(t) {
  function a(t2) {
    return RegExp("(^(?:" + t2 + "):[ 	]*(?![ 	]))[^]+", "i");
  }
  t.languages.http = { "request-line": { pattern: /^(?:CONNECT|DELETE|GET|HEAD|OPTIONS|PATCH|POST|PRI|PUT|SEARCH|TRACE)\s(?:https?:\/\/|\/)\S*\sHTTP\/[\d.]+/m, inside: { method: { pattern: /^[A-Z]+\b/, alias: "property" }, "request-target": { pattern: /^(\s)(?:https?:\/\/|\/)\S*(?=\s)/, lookbehind: true, alias: "url", inside: t.languages.uri }, "http-version": { pattern: /^(\s)HTTP\/[\d.]+/, lookbehind: true, alias: "property" } } }, "response-status": { pattern: /^HTTP\/[\d.]+ \d+ .+/m, inside: { "http-version": { pattern: /^HTTP\/[\d.]+/, alias: "property" }, "status-code": { pattern: /^(\s)\d+(?=\s)/, lookbehind: true, alias: "number" }, "reason-phrase": { pattern: /^(\s).+/, lookbehind: true, alias: "string" } } }, header: { pattern: /^[\w-]+:.+(?:(?:\r\n?|\n)[ \t].+)*/m, inside: { "header-value": [{ pattern: a("Content-Security-Policy"), lookbehind: true, alias: ["csp", "languages-csp"], inside: t.languages.csp }, { pattern: a("Public-Key-Pins(?:-Report-Only)?"), lookbehind: true, alias: ["hpkp", "languages-hpkp"], inside: t.languages.hpkp }, { pattern: a("Strict-Transport-Security"), lookbehind: true, alias: ["hsts", "languages-hsts"], inside: t.languages.hsts }, { pattern: a("[^:]+"), lookbehind: true }], "header-name": { pattern: /^[^:]+/, alias: "keyword" }, punctuation: /^:/ } } };
  var e, n = t.languages, s = { "application/javascript": n.javascript, "application/json": n.json || n.javascript, "application/xml": n.xml, "text/xml": n.xml, "text/html": n.html, "text/css": n.css, "text/plain": n.plain }, i = { "application/json": true, "application/xml": true };
  function r(t2) {
    var a2 = t2.replace(/^[a-z]+\//, "");
    return "(?:" + t2 + "|\\w+/(?:[\\w.-]+\\+)+" + a2 + "(?![+\\w.-]))";
  }
  for (var p in s) if (s[p]) {
    e = e || {};
    var l = i[p] ? r(p) : p;
    e[p.replace(/\//g, "-")] = { pattern: RegExp("(content-type:\\s*" + l + "(?:(?:\r\n?|\n)[\\w-].*)*(?:\r(?:\n|(?!\n))|\n))[^ 	\\w-][^]*", "i"), lookbehind: true, inside: s[p] };
  }
  e && t.languages.insertBefore("http", "header", e);
})(Prism);
