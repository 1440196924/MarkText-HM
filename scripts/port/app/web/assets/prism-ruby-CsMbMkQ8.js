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
var prismRuby$2 = {};
var hasRequiredPrismRuby;
function requirePrismRuby() {
  if (hasRequiredPrismRuby) return prismRuby$2;
  hasRequiredPrismRuby = 1;
  (function(Prism2) {
    Prism2.languages.ruby = Prism2.languages.extend("clike", {
      "comment": {
        pattern: /#.*|^=begin\s[\s\S]*?^=end/m,
        greedy: true
      },
      "class-name": {
        pattern: /(\b(?:class|module)\s+|\bcatch\s+\()[\w.\\]+|\b[A-Z_]\w*(?=\s*\.\s*new\b)/,
        lookbehind: true,
        inside: {
          "punctuation": /[.\\]/
        }
      },
      "keyword": /\b(?:BEGIN|END|alias|and|begin|break|case|class|def|define_method|defined|do|each|else|elsif|end|ensure|extend|for|if|in|include|module|new|next|nil|not|or|prepend|private|protected|public|raise|redo|require|rescue|retry|return|self|super|then|throw|undef|unless|until|when|while|yield)\b/,
      "operator": /\.{2,3}|&\.|===|<?=>|[!=]?~|(?:&&|\|\||<<|>>|\*\*|[+\-*/%<>!^&|=])=?|[?:]/,
      "punctuation": /[(){}[\].,;]/
    });
    Prism2.languages.insertBefore("ruby", "operator", {
      "double-colon": {
        pattern: /::/,
        alias: "punctuation"
      }
    });
    var interpolation = {
      pattern: /((?:^|[^\\])(?:\\{2})*)#\{(?:[^{}]|\{[^{}]*\})*\}/,
      lookbehind: true,
      inside: {
        "content": {
          pattern: /^(#\{)[\s\S]+(?=\}$)/,
          lookbehind: true,
          inside: Prism2.languages.ruby
        },
        "delimiter": {
          pattern: /^#\{|\}$/,
          alias: "punctuation"
        }
      }
    };
    delete Prism2.languages.ruby.function;
    var percentExpression = "(?:" + [
      /([^a-zA-Z0-9\s{(\[<=])(?:(?!\1)[^\\]|\\[\s\S])*\1/.source,
      /\((?:[^()\\]|\\[\s\S]|\((?:[^()\\]|\\[\s\S])*\))*\)/.source,
      /\{(?:[^{}\\]|\\[\s\S]|\{(?:[^{}\\]|\\[\s\S])*\})*\}/.source,
      /\[(?:[^\[\]\\]|\\[\s\S]|\[(?:[^\[\]\\]|\\[\s\S])*\])*\]/.source,
      /<(?:[^<>\\]|\\[\s\S]|<(?:[^<>\\]|\\[\s\S])*>)*>/.source
    ].join("|") + ")";
    var symbolName = /(?:"(?:\\.|[^"\\\r\n])*"|(?:\b[a-zA-Z_]\w*|[^\s\0-\x7F]+)[?!]?|\$.)/.source;
    Prism2.languages.insertBefore("ruby", "keyword", {
      "regex-literal": [
        {
          pattern: RegExp(/%r/.source + percentExpression + /[egimnosux]{0,6}/.source),
          greedy: true,
          inside: {
            "interpolation": interpolation,
            "regex": /[\s\S]+/
          }
        },
        {
          pattern: /(^|[^/])\/(?!\/)(?:\[[^\r\n\]]+\]|\\.|[^[/\\\r\n])+\/[egimnosux]{0,6}(?=\s*(?:$|[\r\n,.;})#]))/,
          lookbehind: true,
          greedy: true,
          inside: {
            "interpolation": interpolation,
            "regex": /[\s\S]+/
          }
        }
      ],
      "variable": /[@$]+[a-zA-Z_]\w*(?:[?!]|\b)/,
      "symbol": [
        {
          pattern: RegExp(/(^|[^:]):/.source + symbolName),
          lookbehind: true,
          greedy: true
        },
        {
          pattern: RegExp(/([\r\n{(,][ \t]*)/.source + symbolName + /(?=:(?!:))/.source),
          lookbehind: true,
          greedy: true
        }
      ],
      "method-definition": {
        pattern: /(\bdef\s+)\w+(?:\s*\.\s*\w+)?/,
        lookbehind: true,
        inside: {
          "function": /\b\w+$/,
          "keyword": /^self\b/,
          "class-name": /^\w+/,
          "punctuation": /\./
        }
      }
    });
    Prism2.languages.insertBefore("ruby", "string", {
      "string-literal": [
        {
          pattern: RegExp(/%[qQiIwWs]?/.source + percentExpression),
          greedy: true,
          inside: {
            "interpolation": interpolation,
            "string": /[\s\S]+/
          }
        },
        {
          pattern: /("|')(?:#\{[^}]+\}|#(?!\{)|\\(?:\r\n|[\s\S])|(?!\1)[^\\#\r\n])*\1/,
          greedy: true,
          inside: {
            "interpolation": interpolation,
            "string": /[\s\S]+/
          }
        },
        {
          pattern: /<<[-~]?([a-z_]\w*)[\r\n](?:.*[\r\n])*?[\t ]*\1/i,
          alias: "heredoc-string",
          greedy: true,
          inside: {
            "delimiter": {
              pattern: /^<<[-~]?[a-z_]\w*|\b[a-z_]\w*$/i,
              inside: {
                "symbol": /\b\w+/,
                "punctuation": /^<<[-~]?/
              }
            },
            "interpolation": interpolation,
            "string": /[\s\S]+/
          }
        },
        {
          pattern: /<<[-~]?'([a-z_]\w*)'[\r\n](?:.*[\r\n])*?[\t ]*\1/i,
          alias: "heredoc-string",
          greedy: true,
          inside: {
            "delimiter": {
              pattern: /^<<[-~]?'[a-z_]\w*'|\b[a-z_]\w*$/i,
              inside: {
                "symbol": /\b\w+/,
                "punctuation": /^<<[-~]?'|'$/
              }
            },
            "string": /[\s\S]+/
          }
        }
      ],
      "command-literal": [
        {
          pattern: RegExp(/%x/.source + percentExpression),
          greedy: true,
          inside: {
            "interpolation": interpolation,
            "command": {
              pattern: /[\s\S]+/,
              alias: "string"
            }
          }
        },
        {
          pattern: /`(?:#\{[^}]+\}|#(?!\{)|\\(?:\r\n|[\s\S])|[^\\`#\r\n])*`/,
          greedy: true,
          inside: {
            "interpolation": interpolation,
            "command": {
              pattern: /[\s\S]+/,
              alias: "string"
            }
          }
        }
      ]
    });
    delete Prism2.languages.ruby.string;
    Prism2.languages.insertBefore("ruby", "number", {
      "builtin": /\b(?:Array|Bignum|Binding|Class|Continuation|Dir|Exception|FalseClass|File|Fixnum|Float|Hash|IO|Integer|MatchData|Method|Module|NilClass|Numeric|Object|Proc|Range|Regexp|Stat|String|Struct|Symbol|TMS|Thread|ThreadGroup|Time|TrueClass)\b/,
      "constant": /\b[A-Z][A-Z0-9_]*(?:[?!]|\b)/
    });
    Prism2.languages.rb = Prism2.languages.ruby;
  })(Prism);
  return prismRuby$2;
}
var prismRubyExports = requirePrismRuby();
const prismRuby = /* @__PURE__ */ getDefaultExportFromCjs(prismRubyExports);
const prismRuby$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: prismRuby
}, [prismRubyExports]);
export {
  prismRuby$1 as p
};
