import { g as getDefaultExportFromCjs } from "./index-ouHvDw0s.js";
function _mergeNamespaces(n, m) {
  for (var i = 0; i < m.length; i++) {
    const e = m[i];
    if (typeof e !== "string" && !Array.isArray(e)) {
      for (const k in e) {
        if (k !== "default" && !(k in n)) {
          const d = Object.getOwnPropertyDescriptor(e, k);
          if (d) {
            Object.defineProperty(n, k, d.get ? d : {
              enumerable: true,
              get: () => e[k]
            });
          }
        }
      }
    }
  }
  return Object.freeze(Object.defineProperty(n, Symbol.toStringTag, { value: "Module" }));
}
var prismJsTemplates_min$2 = {};
var hasRequiredPrismJsTemplates_min;
function requirePrismJsTemplates_min() {
  if (hasRequiredPrismJsTemplates_min) return prismJsTemplates_min$2;
  hasRequiredPrismJsTemplates_min = 1;
  !(function(e) {
    var t = e.languages.javascript["template-string"], n = t.pattern.source, r = t.inside.interpolation, a = r.inside["interpolation-punctuation"], i = r.pattern.source;
    function o(t2, r2) {
      if (e.languages[t2]) return { pattern: RegExp("((?:" + r2 + ")\\s*)" + n), lookbehind: true, greedy: true, inside: { "template-punctuation": { pattern: /^`|`$/, alias: "string" }, "embedded-code": { pattern: /[\s\S]+/, alias: t2 } } };
    }
    function s(e2, t2) {
      return "___" + t2.toUpperCase() + "_" + e2 + "___";
    }
    function p(t2, n2, r2) {
      var a2 = { code: t2, grammar: n2, language: r2 };
      return e.hooks.run("before-tokenize", a2), a2.tokens = e.tokenize(a2.code, a2.grammar), e.hooks.run("after-tokenize", a2), a2.tokens;
    }
    function l(t2) {
      var n2 = {};
      n2["interpolation-punctuation"] = a;
      var i2 = e.tokenize(t2, n2);
      if (3 === i2.length) {
        var o2 = [1, 1];
        o2.push.apply(o2, p(i2[1], e.languages.javascript, "javascript")), i2.splice.apply(i2, o2);
      }
      return new e.Token("interpolation", i2, r.alias, t2);
    }
    function g(t2, n2, r2) {
      var a2 = e.tokenize(t2, { interpolation: { pattern: RegExp(i), lookbehind: true } }), o2 = 0, g2 = {}, u2 = p(a2.map((function(e2) {
        if ("string" == typeof e2) return e2;
        for (var n3, a3 = e2.content; -1 !== t2.indexOf(n3 = s(o2++, r2)); ) ;
        return g2[n3] = a3, n3;
      })).join(""), n2, r2), c2 = Object.keys(g2);
      return o2 = 0, (function e2(t3) {
        for (var n3 = 0; n3 < t3.length; n3++) {
          if (o2 >= c2.length) return;
          var r3 = t3[n3];
          if ("string" == typeof r3 || "string" == typeof r3.content) {
            var a3 = c2[o2], i2 = "string" == typeof r3 ? r3 : r3.content, s2 = i2.indexOf(a3);
            if (-1 !== s2) {
              ++o2;
              var p2 = i2.substring(0, s2), u3 = l(g2[a3]), f = i2.substring(s2 + a3.length), y = [];
              if (p2 && y.push(p2), y.push(u3), f) {
                var v = [f];
                e2(v), y.push.apply(y, v);
              }
              "string" == typeof r3 ? (t3.splice.apply(t3, [n3, 1].concat(y)), n3 += y.length - 1) : r3.content = y;
            }
          } else {
            var d = r3.content;
            Array.isArray(d) ? e2(d) : e2([d]);
          }
        }
      })(u2), new e.Token(r2, u2, "language-" + r2, t2);
    }
    e.languages.javascript["template-string"] = [o("css", "\\b(?:styled(?:\\([^)]*\\))?(?:\\s*\\.\\s*\\w+(?:\\([^)]*\\))*)*|css(?:\\s*\\.\\s*(?:global|resolve))?|createGlobalStyle|keyframes)"), o("html", "\\bhtml|\\.\\s*(?:inner|outer)HTML\\s*\\+?="), o("svg", "\\bsvg"), o("markdown", "\\b(?:markdown|md)"), o("graphql", "\\b(?:gql|graphql(?:\\s*\\.\\s*experimental)?)"), o("sql", "\\bsql"), t].filter(Boolean);
    var u = { javascript: true, js: true, typescript: true, ts: true, jsx: true, tsx: true };
    function c(e2) {
      return "string" == typeof e2 ? e2 : Array.isArray(e2) ? e2.map(c).join("") : c(e2.content);
    }
    e.hooks.add("after-tokenize", (function(t2) {
      t2.language in u && (function t3(n2) {
        for (var r2 = 0, a2 = n2.length; r2 < a2; r2++) {
          var i2 = n2[r2];
          if ("string" != typeof i2) {
            var o2 = i2.content;
            if (Array.isArray(o2)) if ("template-string" === i2.type) {
              var s2 = o2[1];
              if (3 === o2.length && "string" != typeof s2 && "embedded-code" === s2.type) {
                var p2 = c(s2), l2 = s2.alias, u2 = Array.isArray(l2) ? l2[0] : l2, f = e.languages[u2];
                if (!f) continue;
                o2[1] = g(p2, f, u2);
              }
            } else t3(o2);
            else "string" != typeof o2 && t3([o2]);
          }
        }
      })(t2.tokens);
    }));
  })(Prism);
  return prismJsTemplates_min$2;
}
var prismJsTemplates_minExports = requirePrismJsTemplates_min();
const prismJsTemplates_min = /* @__PURE__ */ getDefaultExportFromCjs(prismJsTemplates_minExports);
const prismJsTemplates_min$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: prismJsTemplates_min
}, [prismJsTemplates_minExports]);
export {
  prismJsTemplates_min$1 as p
};
