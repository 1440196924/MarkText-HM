import { g as getDefaultExportFromCjs } from "./index-1FfQlz0g.js";
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
var prismWasm_min$2 = {};
var hasRequiredPrismWasm_min;
function requirePrismWasm_min() {
  if (hasRequiredPrismWasm_min) return prismWasm_min$2;
  hasRequiredPrismWasm_min = 1;
  Prism.languages.wasm = { comment: [/\(;[\s\S]*?;\)/, { pattern: /;;.*/, greedy: true }], string: { pattern: /"(?:\\[\s\S]|[^"\\])*"/, greedy: true }, keyword: [{ pattern: /\b(?:align|offset)=/, inside: { operator: /=/ } }, { pattern: /\b(?:(?:f32|f64|i32|i64)(?:\.(?:abs|add|and|ceil|clz|const|convert_[su]\/i(?:32|64)|copysign|ctz|demote\/f64|div(?:_[su])?|eqz?|extend_[su]\/i32|floor|ge(?:_[su])?|gt(?:_[su])?|le(?:_[su])?|load(?:(?:8|16|32)_[su])?|lt(?:_[su])?|max|min|mul|neg?|nearest|or|popcnt|promote\/f32|reinterpret\/[fi](?:32|64)|rem_[su]|rot[lr]|shl|shr_[su]|sqrt|store(?:8|16|32)?|sub|trunc(?:_[su]\/f(?:32|64))?|wrap\/i64|xor))?|memory\.(?:grow|size))\b/, inside: { punctuation: /\./ } }, /\b(?:anyfunc|block|br(?:_if|_table)?|call(?:_indirect)?|data|drop|elem|else|end|export|func|get_(?:global|local)|global|if|import|local|loop|memory|module|mut|nop|offset|param|result|return|select|set_(?:global|local)|start|table|tee_local|then|type|unreachable)\b/], variable: /\$[\w!#$%&'*+\-./:<=>?@\\^`|~]+/, number: /[+-]?\b(?:\d(?:_?\d)*(?:\.\d(?:_?\d)*)?(?:[eE][+-]?\d(?:_?\d)*)?|0x[\da-fA-F](?:_?[\da-fA-F])*(?:\.[\da-fA-F](?:_?[\da-fA-D])*)?(?:[pP][+-]?\d(?:_?\d)*)?)\b|\binf\b|\bnan(?::0x[\da-fA-F](?:_?[\da-fA-D])*)?\b/, punctuation: /[()]/ };
  return prismWasm_min$2;
}
var prismWasm_minExports = requirePrismWasm_min();
const prismWasm_min = /* @__PURE__ */ getDefaultExportFromCjs(prismWasm_minExports);
const prismWasm_min$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: prismWasm_min
}, [prismWasm_minExports]);
export {
  prismWasm_min$1 as p
};
