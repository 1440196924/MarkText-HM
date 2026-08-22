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
var prismCsp_min$2 = {};
var hasRequiredPrismCsp_min;
function requirePrismCsp_min() {
  if (hasRequiredPrismCsp_min) return prismCsp_min$2;
  hasRequiredPrismCsp_min = 1;
  !(function(e) {
    function n(e2) {
      return RegExp("([ 	])(?:" + e2 + ")(?=[\\s;]|$)", "i");
    }
    e.languages.csp = { directive: { pattern: /(^|[\s;])(?:base-uri|block-all-mixed-content|(?:child|connect|default|font|frame|img|manifest|media|object|prefetch|script|style|worker)-src|disown-opener|form-action|frame-(?:ancestors|options)|input-protection(?:-(?:clip|selectors))?|navigate-to|plugin-types|policy-uri|referrer|reflected-xss|report-(?:to|uri)|require-sri-for|sandbox|(?:script|style)-src-(?:attr|elem)|upgrade-insecure-requests)(?=[\s;]|$)/i, lookbehind: true, alias: "property" }, scheme: { pattern: n("[a-z][a-z0-9.+-]*:"), lookbehind: true }, none: { pattern: n("'none'"), lookbehind: true, alias: "keyword" }, nonce: { pattern: n("'nonce-[-+/\\w=]+'"), lookbehind: true, alias: "number" }, hash: { pattern: n("'sha(?:256|384|512)-[-+/\\w=]+'"), lookbehind: true, alias: "number" }, host: { pattern: n("[a-z][a-z0-9.+-]*://[^\\s;,']*|\\*[^\\s;,']*|[a-z0-9-]+(?:\\.[a-z0-9-]+)+(?::[\\d*]+)?(?:/[^\\s;,']*)?"), lookbehind: true, alias: "url", inside: { important: /\*/ } }, keyword: [{ pattern: n("'unsafe-[a-z-]+'"), lookbehind: true, alias: "unsafe" }, { pattern: n("'[a-z-]+'"), lookbehind: true, alias: "safe" }], punctuation: /;/ };
  })(Prism);
  return prismCsp_min$2;
}
var prismCsp_minExports = requirePrismCsp_min();
const prismCsp_min = /* @__PURE__ */ getDefaultExportFromCjs(prismCsp_minExports);
const prismCsp_min$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: prismCsp_min
}, [prismCsp_minExports]);
export {
  prismCsp_min$1 as p
};
