import { g as getDefaultExportFromCjs } from "./index-Nx_AZTXs.js";
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
var prismJavastacktrace_min$2 = {};
var hasRequiredPrismJavastacktrace_min;
function requirePrismJavastacktrace_min() {
  if (hasRequiredPrismJavastacktrace_min) return prismJavastacktrace_min$2;
  hasRequiredPrismJavastacktrace_min = 1;
  Prism.languages.javastacktrace = { summary: { pattern: /^([\t ]*)(?:(?:Caused by:|Suppressed:|Exception in thread "[^"]*")[\t ]+)?[\w$.]+(?::.*)?$/m, lookbehind: true, inside: { keyword: { pattern: /^([\t ]*)(?:(?:Caused by|Suppressed)(?=:)|Exception in thread)/m, lookbehind: true }, string: { pattern: /^(\s*)"[^"]*"/, lookbehind: true }, exceptions: { pattern: /^(:?\s*)[\w$.]+(?=:|$)/, lookbehind: true, inside: { "class-name": /[\w$]+$/, namespace: /\b[a-z]\w*\b/, punctuation: /\./ } }, message: { pattern: /(:\s*)\S.*/, lookbehind: true, alias: "string" }, punctuation: /:/ } }, "stack-frame": { pattern: /^([\t ]*)at (?:[\w$./]|@[\w$.+-]*\/)+(?:<init>)?\([^()]*\)/m, lookbehind: true, inside: { keyword: { pattern: /^(\s*)at(?= )/, lookbehind: true }, source: [{ pattern: /(\()\w+\.\w+:\d+(?=\))/, lookbehind: true, inside: { file: /^\w+\.\w+/, punctuation: /:/, "line-number": { pattern: /\b\d+\b/, alias: "number" } } }, { pattern: /(\()[^()]*(?=\))/, lookbehind: true, inside: { keyword: /^(?:Native Method|Unknown Source)$/ } }], "class-name": /[\w$]+(?=\.(?:<init>|[\w$]+)\()/, function: /(?:<init>|[\w$]+)(?=\()/, "class-loader": { pattern: /(\s)[a-z]\w*(?:\.[a-z]\w*)*(?=\/[\w@$.]*\/)/, lookbehind: true, alias: "namespace", inside: { punctuation: /\./ } }, module: { pattern: /([\s/])[a-z]\w*(?:\.[a-z]\w*)*(?:@[\w$.+-]*)?(?=\/)/, lookbehind: true, inside: { version: { pattern: /(@)[\s\S]+/, lookbehind: true, alias: "number" }, punctuation: /[@.]/ } }, namespace: { pattern: /(?:\b[a-z]\w*\.)+/, inside: { punctuation: /\./ } }, punctuation: /[()/.]/ } }, more: { pattern: /^([\t ]*)\.{3} \d+ [a-z]+(?: [a-z]+)*/m, lookbehind: true, inside: { punctuation: /\.{3}/, number: /\d+/, keyword: /\b[a-z]+(?: [a-z]+)*\b/ } } };
  return prismJavastacktrace_min$2;
}
var prismJavastacktrace_minExports = requirePrismJavastacktrace_min();
const prismJavastacktrace_min = /* @__PURE__ */ getDefaultExportFromCjs(prismJavastacktrace_minExports);
const prismJavastacktrace_min$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: prismJavastacktrace_min
}, [prismJavastacktrace_minExports]);
export {
  prismJavastacktrace_min$1 as p
};
