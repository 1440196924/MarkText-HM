import { g as getDefaultExportFromCjs } from "./index-CsLNvl25.js";
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
var prismBro_min$2 = {};
var hasRequiredPrismBro_min;
function requirePrismBro_min() {
  if (hasRequiredPrismBro_min) return prismBro_min$2;
  hasRequiredPrismBro_min = 1;
  Prism.languages.bro = { comment: { pattern: /(^|[^\\$])#.*/, lookbehind: true, inside: { italic: /\b(?:FIXME|TODO|XXX)\b/ } }, string: { pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/, greedy: true }, boolean: /\b[TF]\b/, function: { pattern: /(\b(?:event|function|hook)[ \t]+)\w+(?:::\w+)?/, lookbehind: true }, builtin: /(?:@(?:load(?:-(?:plugin|sigs))?|unload|prefixes|ifn?def|else|(?:end)?if|DIR|FILENAME))|(?:&?(?:add_func|create_expire|default|delete_func|encrypt|error_handler|expire_func|group|log|mergeable|optional|persistent|priority|raw_output|read_expire|redef|rotate_interval|rotate_size|synchronized|type_column|write_expire))/, constant: { pattern: /(\bconst[ \t]+)\w+/i, lookbehind: true }, keyword: /\b(?:add|addr|alarm|any|bool|break|const|continue|count|delete|double|else|enum|event|export|file|for|function|global|hook|if|in|int|interval|local|module|next|of|opaque|pattern|port|print|record|return|schedule|set|string|subnet|table|time|timeout|using|vector|when)\b/, operator: /--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&|\|\|?|\?|\*|\/|~|\^|%/, number: /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i, punctuation: /[{}[\];(),.:]/ };
  return prismBro_min$2;
}
var prismBro_minExports = requirePrismBro_min();
const prismBro_min = /* @__PURE__ */ getDefaultExportFromCjs(prismBro_minExports);
const prismBro_min$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: prismBro_min
}, [prismBro_minExports]);
export {
  prismBro_min$1 as p
};
