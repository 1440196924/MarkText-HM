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
var prismD_min$2 = {};
var hasRequiredPrismD_min;
function requirePrismD_min() {
  if (hasRequiredPrismD_min) return prismD_min$2;
  hasRequiredPrismD_min = 1;
  Prism.languages.d = Prism.languages.extend("clike", { comment: [{ pattern: /^\s*#!.+/, greedy: true }, { pattern: RegExp("(^|[^\\\\])(?:" + ["/\\+(?:/\\+(?:[^+]|\\+(?!/))*\\+/|(?!/\\+)[^])*?\\+/", "//.*", "/\\*[^]*?\\*/"].join("|") + ")"), lookbehind: true, greedy: true }], string: [{ pattern: RegExp(['\\b[rx]"(?:\\\\[^]|[^\\\\"])*"[cwd]?', '\\bq"(?:\\[[^]*?\\]|\\([^]*?\\)|<[^]*?>|\\{[^]*?\\})"', '\\bq"((?!\\d)\\w+)$[^]*?^\\1"', '\\bq"(.)[^]*?\\2"', '(["`])(?:\\\\[^]|(?!\\3)[^\\\\])*\\3[cwd]?'].join("|"), "m"), greedy: true }, { pattern: /\bq\{(?:\{[^{}]*\}|[^{}])*\}/, greedy: true, alias: "token-string" }], keyword: /\$|\b(?:__(?:(?:DATE|EOF|FILE|FUNCTION|LINE|MODULE|PRETTY_FUNCTION|TIMESTAMP|TIME|VENDOR|VERSION)__|gshared|parameters|traits|vector)|abstract|alias|align|asm|assert|auto|body|bool|break|byte|case|cast|catch|cdouble|cent|cfloat|char|class|const|continue|creal|dchar|debug|default|delegate|delete|deprecated|do|double|dstring|else|enum|export|extern|false|final|finally|float|for|foreach|foreach_reverse|function|goto|idouble|if|ifloat|immutable|import|inout|int|interface|invariant|ireal|lazy|long|macro|mixin|module|new|nothrow|null|out|override|package|pragma|private|protected|ptrdiff_t|public|pure|real|ref|return|scope|shared|short|size_t|static|string|struct|super|switch|synchronized|template|this|throw|true|try|typedef|typeid|typeof|ubyte|ucent|uint|ulong|union|unittest|ushort|version|void|volatile|wchar|while|with|wstring)\b/, number: [/\b0x\.?[a-f\d_]+(?:(?!\.\.)\.[a-f\d_]*)?(?:p[+-]?[a-f\d_]+)?[ulfi]{0,4}/i, { pattern: /((?:\.\.)?)(?:\b0b\.?|\b|\.)\d[\d_]*(?:(?!\.\.)\.[\d_]*)?(?:e[+-]?\d[\d_]*)?[ulfi]{0,4}/i, lookbehind: true }], operator: /\|[|=]?|&[&=]?|\+[+=]?|-[-=]?|\.?\.\.|=[>=]?|!(?:i[ns]\b|<>?=?|>=?|=)?|\bi[ns]\b|(?:<[<>]?|>>?>?|\^\^|[*\/%^~])=?/ }), Prism.languages.insertBefore("d", "string", { char: /'(?:\\(?:\W|\w+)|[^\\])'/ }), Prism.languages.insertBefore("d", "keyword", { property: /\B@\w*/ }), Prism.languages.insertBefore("d", "function", { register: { pattern: /\b(?:[ABCD][LHX]|E?(?:BP|DI|SI|SP)|[BS]PL|[ECSDGF]S|CR[0234]|[DS]IL|DR[012367]|E[ABCD]X|X?MM[0-7]|R(?:1[0-5]|[89])[BWD]?|R[ABCD]X|R[BS]P|R[DS]I|TR[3-7]|XMM(?:1[0-5]|[89])|YMM(?:1[0-5]|\d))\b|\bST(?:\([0-7]\)|\b)/, alias: "variable" } });
  return prismD_min$2;
}
var prismD_minExports = requirePrismD_min();
const prismD_min = /* @__PURE__ */ getDefaultExportFromCjs(prismD_minExports);
const prismD_min$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: prismD_min
}, [prismD_minExports]);
export {
  prismD_min$1 as p
};
