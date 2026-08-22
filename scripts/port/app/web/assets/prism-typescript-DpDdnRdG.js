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
var prismTypescript$2 = {};
var hasRequiredPrismTypescript;
function requirePrismTypescript() {
  if (hasRequiredPrismTypescript) return prismTypescript$2;
  hasRequiredPrismTypescript = 1;
  (function(Prism2) {
    Prism2.languages.typescript = Prism2.languages.extend("javascript", {
      "class-name": {
        pattern: /(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,
        lookbehind: true,
        greedy: true,
        inside: null
        // see below
      },
      "builtin": /\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/
    });
    Prism2.languages.typescript.keyword.push(
      /\b(?:abstract|declare|is|keyof|readonly|require)\b/,
      // keywords that have to be followed by an identifier
      /\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/,
      // This is for `import type *, {}`
      /\btype\b(?=\s*(?:[\{*]|$))/
    );
    delete Prism2.languages.typescript["parameter"];
    delete Prism2.languages.typescript["literal-property"];
    var typeInside = Prism2.languages.extend("typescript", {});
    delete typeInside["class-name"];
    Prism2.languages.typescript["class-name"].inside = typeInside;
    Prism2.languages.insertBefore("typescript", "function", {
      "decorator": {
        pattern: /@[$\w\xA0-\uFFFF]+/,
        inside: {
          "at": {
            pattern: /^@/,
            alias: "operator"
          },
          "function": /^[\s\S]+/
        }
      },
      "generic-function": {
        // e.g. foo<T extends "bar" | "baz">( ...
        pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,
        greedy: true,
        inside: {
          "function": /^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,
          "generic": {
            pattern: /<[\s\S]+/,
            // everything after the first <
            alias: "class-name",
            inside: typeInside
          }
        }
      }
    });
    Prism2.languages.ts = Prism2.languages.typescript;
  })(Prism);
  return prismTypescript$2;
}
var prismTypescriptExports = requirePrismTypescript();
const prismTypescript = /* @__PURE__ */ getDefaultExportFromCjs(prismTypescriptExports);
const prismTypescript$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: prismTypescript
}, [prismTypescriptExports]);
export {
  prismTypescript$1 as p
};
