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
var prismTcl$2 = {};
var hasRequiredPrismTcl;
function requirePrismTcl() {
  if (hasRequiredPrismTcl) return prismTcl$2;
  hasRequiredPrismTcl = 1;
  Prism.languages.tcl = {
    "comment": {
      pattern: /(^|[^\\])#.*/,
      lookbehind: true
    },
    "string": {
      pattern: /"(?:[^"\\\r\n]|\\(?:\r\n|[\s\S]))*"/,
      greedy: true
    },
    "variable": [
      {
        pattern: /(\$)(?:::)?(?:[a-zA-Z0-9]+::)*\w+/,
        lookbehind: true
      },
      {
        pattern: /(\$)\{[^}]+\}/,
        lookbehind: true
      },
      {
        pattern: /(^[\t ]*set[ \t]+)(?:::)?(?:[a-zA-Z0-9]+::)*\w+/m,
        lookbehind: true
      }
    ],
    "function": {
      pattern: /(^[\t ]*proc[ \t]+)\S+/m,
      lookbehind: true
    },
    "builtin": [
      {
        pattern: /(^[\t ]*)(?:break|class|continue|error|eval|exit|for|foreach|if|proc|return|switch|while)\b/m,
        lookbehind: true
      },
      /\b(?:else|elseif)\b/
    ],
    "scope": {
      pattern: /(^[\t ]*)(?:global|upvar|variable)\b/m,
      lookbehind: true,
      alias: "constant"
    },
    "keyword": {
      pattern: /(^[\t ]*|\[)(?:Safe_Base|Tcl|after|append|apply|array|auto_(?:execok|import|load|mkindex|qualify|reset)|automkindex_old|bgerror|binary|catch|cd|chan|clock|close|concat|dde|dict|encoding|eof|exec|expr|fblocked|fconfigure|fcopy|file(?:event|name)?|flush|gets|glob|history|http|incr|info|interp|join|lappend|lassign|lindex|linsert|list|llength|load|lrange|lrepeat|lreplace|lreverse|lsearch|lset|lsort|math(?:func|op)|memory|msgcat|namespace|open|package|parray|pid|pkg_mkIndex|platform|puts|pwd|re_syntax|read|refchan|regexp|registry|regsub|rename|scan|seek|set|socket|source|split|string|subst|tcl(?:_endOfWord|_findLibrary|startOf(?:Next|Previous)Word|test|vars|wordBreak(?:After|Before))|tell|time|tm|trace|unknown|unload|unset|update|uplevel|vwait)\b/m,
      lookbehind: true
    },
    "operator": /!=?|\*\*?|==|&&?|\|\|?|<[=<]?|>[=>]?|[-+~\/%?^]|\b(?:eq|in|ne|ni)\b/,
    "punctuation": /[{}()\[\]]/
  };
  return prismTcl$2;
}
var prismTclExports = requirePrismTcl();
const prismTcl = /* @__PURE__ */ getDefaultExportFromCjs(prismTclExports);
const prismTcl$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: prismTcl
}, [prismTclExports]);
export {
  prismTcl$1 as p
};
