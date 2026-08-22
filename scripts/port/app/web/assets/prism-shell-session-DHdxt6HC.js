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
var prismShellSession$2 = {};
var hasRequiredPrismShellSession;
function requirePrismShellSession() {
  if (hasRequiredPrismShellSession) return prismShellSession$2;
  hasRequiredPrismShellSession = 1;
  (function(Prism2) {
    var strings = [
      // normal string
      /"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/.source,
      /'[^']*'/.source,
      /\$'(?:[^'\\]|\\[\s\S])*'/.source,
      // here doc
      // 2 capturing groups
      /<<-?\s*(["']?)(\w+)\1\s[\s\S]*?[\r\n]\2/.source
    ].join("|");
    Prism2.languages["shell-session"] = {
      "command": {
        pattern: RegExp(
          // user info
          /^/.source + "(?:" + // <user> ":" ( <path> )?
          (/[^\s@:$#%*!/\\]+@[^\r\n@:$#%*!/\\]+(?::[^\0-\x1F$#%*?"<>:;|]+)?/.source + "|" + // <path>
          // Since the path pattern is quite general, we will require it to start with a special character to
          // prevent false positives.
          /[/~.][^\0-\x1F$#%*?"<>@:;|]*/.source) + ")?" + // shell symbol
          /[$#%](?=\s)/.source + // bash command
          /(?:[^\\\r\n \t'"<$]|[ \t](?:(?!#)|#.*$)|\\(?:[^\r]|\r\n?)|\$(?!')|<(?!<)|<<str>>)+/.source.replace(/<<str>>/g, function() {
            return strings;
          }),
          "m"
        ),
        greedy: true,
        inside: {
          "info": {
            // foo@bar:~/files$ exit
            // foo@bar$ exit
            // ~/files$ exit
            pattern: /^[^#$%]+/,
            alias: "punctuation",
            inside: {
              "user": /^[^\s@:$#%*!/\\]+@[^\r\n@:$#%*!/\\]+/,
              "punctuation": /:/,
              "path": /[\s\S]+/
            }
          },
          "bash": {
            pattern: /(^[$#%]\s*)\S[\s\S]*/,
            lookbehind: true,
            alias: "language-bash",
            inside: Prism2.languages.bash
          },
          "shell-symbol": {
            pattern: /^[$#%]/,
            alias: "important"
          }
        }
      },
      "output": /.(?:.*(?:[\r\n]|.$))*/
    };
    Prism2.languages["sh-session"] = Prism2.languages["shellsession"] = Prism2.languages["shell-session"];
  })(Prism);
  return prismShellSession$2;
}
var prismShellSessionExports = requirePrismShellSession();
const prismShellSession = /* @__PURE__ */ getDefaultExportFromCjs(prismShellSessionExports);
const prismShellSession$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: prismShellSession
}, [prismShellSessionExports]);
export {
  prismShellSession$1 as p
};
