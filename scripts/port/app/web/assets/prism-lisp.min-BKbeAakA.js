import { g as getDefaultExportFromCjs } from "./index-Ccykuj0R.js";
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
var prismLisp_min$2 = {};
var hasRequiredPrismLisp_min;
function requirePrismLisp_min() {
  if (hasRequiredPrismLisp_min) return prismLisp_min$2;
  hasRequiredPrismLisp_min = 1;
  !(function(e) {
    function n(e2) {
      return RegExp("(\\()(?:" + e2 + ")(?=[\\s\\)])");
    }
    function a(e2) {
      return RegExp("([\\s([])(?:" + e2 + ")(?=[\\s)])");
    }
    var t = "(?!\\d)[-+*/~!@$%^=<>{}\\w]+", r = "(\\()", i = "(?:[^()]|\\((?:[^()]|\\((?:[^()]|\\((?:[^()]|\\((?:[^()]|\\([^()]*\\))*\\))*\\))*\\))*\\))*", s = { heading: { pattern: /;;;.*/, alias: ["comment", "title"] }, comment: /;.*/, string: { pattern: /"(?:[^"\\]|\\.)*"/, greedy: true, inside: { argument: /[-A-Z]+(?=[.,\s])/, symbol: RegExp("`" + t + "'") } }, "quoted-symbol": { pattern: RegExp("#?'" + t), alias: ["variable", "symbol"] }, "lisp-property": { pattern: RegExp(":" + t), alias: "property" }, splice: { pattern: RegExp(",@?" + t), alias: ["symbol", "variable"] }, keyword: [{ pattern: RegExp("(\\()(?:and|(?:cl-)?letf|cl-loop|cond|cons|error|if|(?:lexical-)?let\\*?|message|not|null|or|provide|require|setq|unless|use-package|when|while)(?=\\s)"), lookbehind: true }, { pattern: RegExp("(\\()(?:append|by|collect|concat|do|finally|for|in|return)(?=\\s)"), lookbehind: true }], declare: { pattern: n("declare"), lookbehind: true, alias: "keyword" }, interactive: { pattern: n("interactive"), lookbehind: true, alias: "keyword" }, boolean: { pattern: a("nil|t"), lookbehind: true }, number: { pattern: a("[-+]?\\d+(?:\\.\\d*)?"), lookbehind: true }, defvar: { pattern: RegExp("(\\()def(?:const|custom|group|var)\\s+" + t), lookbehind: true, inside: { keyword: /^def[a-z]+/, variable: RegExp(t) } }, defun: { pattern: RegExp("(\\()(?:cl-)?(?:defmacro|defun\\*?)\\s+" + t + "\\s+\\(" + i + "\\)"), lookbehind: true, greedy: true, inside: { keyword: /^(?:cl-)?def\S+/, arguments: null, function: { pattern: RegExp("(^\\s)" + t), lookbehind: true }, punctuation: /[()]/ } }, lambda: { pattern: RegExp("(\\()lambda\\s+\\(\\s*(?:&?" + t + "(?:\\s+&?" + t + ")*\\s*)?\\)"), lookbehind: true, greedy: true, inside: { keyword: /^lambda/, arguments: null, punctuation: /[()]/ } }, car: { pattern: RegExp(r + t), lookbehind: true }, punctuation: [/(?:['`,]?\(|[)\[\]])/, { pattern: /(\s)\.(?=\s)/, lookbehind: true }] }, l = { "lisp-marker": RegExp("&(?!\\d)[-+*/~!@$%^=<>{}\\w]+"), varform: { pattern: RegExp("\\(" + t + "\\s+(?=\\S)" + i + "\\)"), inside: s }, argument: { pattern: RegExp("(^|[\\s(])" + t), lookbehind: true, alias: "variable" }, rest: s }, o = "\\S+(?:\\s+\\S+)*", p = { pattern: RegExp(r + i + "(?=\\))"), lookbehind: true, inside: { "rest-vars": { pattern: RegExp("&(?:body|rest)\\s+" + o), inside: l }, "other-marker-vars": { pattern: RegExp("&(?:aux|optional)\\s+" + o), inside: l }, keys: { pattern: RegExp("&key\\s+" + o + "(?:\\s+&allow-other-keys)?"), inside: l }, argument: { pattern: RegExp(t), alias: "variable" }, punctuation: /[()]/ } };
    s.lambda.inside.arguments = p, s.defun.inside.arguments = e.util.clone(p), s.defun.inside.arguments.inside.sublist = p, e.languages.lisp = s, e.languages.elisp = s, e.languages.emacs = s, e.languages["emacs-lisp"] = s;
  })(Prism);
  return prismLisp_min$2;
}
var prismLisp_minExports = requirePrismLisp_min();
const prismLisp_min = /* @__PURE__ */ getDefaultExportFromCjs(prismLisp_minExports);
const prismLisp_min$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: prismLisp_min
}, [prismLisp_minExports]);
export {
  prismLisp_min$1 as p
};
