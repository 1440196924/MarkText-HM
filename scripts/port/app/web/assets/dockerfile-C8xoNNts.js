import { a as requireCodemirror, g as getDefaultExportFromCjs } from "./index-Nx_AZTXs.js";
import { r as requireSimple } from "./simple-B3VdnKH9.js";
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
var dockerfile$2 = { exports: {} };
var hasRequiredDockerfile;
function requireDockerfile() {
  if (hasRequiredDockerfile) return dockerfile$2.exports;
  hasRequiredDockerfile = 1;
  (function(module, exports) {
    (function(mod) {
      mod(requireCodemirror(), requireSimple());
    })(function(CodeMirror) {
      var from = "from";
      var fromRegex = new RegExp("^(\\s*)\\b(" + from + ")\\b", "i");
      var shells = ["run", "cmd", "entrypoint", "shell"];
      var shellsAsArrayRegex = new RegExp("^(\\s*)(" + shells.join("|") + ")(\\s+\\[)", "i");
      var expose = "expose";
      var exposeRegex = new RegExp("^(\\s*)(" + expose + ")(\\s+)", "i");
      var others = [
        "arg",
        "from",
        "maintainer",
        "label",
        "env",
        "add",
        "copy",
        "volume",
        "user",
        "workdir",
        "onbuild",
        "stopsignal",
        "healthcheck",
        "shell"
      ];
      var instructions = [from, expose].concat(shells).concat(others), instructionRegex = "(" + instructions.join("|") + ")", instructionOnlyLine = new RegExp("^(\\s*)" + instructionRegex + "(\\s*)(#.*)?$", "i"), instructionWithArguments = new RegExp("^(\\s*)" + instructionRegex + "(\\s+)", "i");
      CodeMirror.defineSimpleMode("dockerfile", {
        start: [
          // Block comment: This is a line starting with a comment
          {
            regex: /^\s*#.*$/,
            sol: true,
            token: "comment"
          },
          {
            regex: fromRegex,
            token: [null, "keyword"],
            sol: true,
            next: "from"
          },
          // Highlight an instruction without any arguments (for convenience)
          {
            regex: instructionOnlyLine,
            token: [null, "keyword", null, "error"],
            sol: true
          },
          {
            regex: shellsAsArrayRegex,
            token: [null, "keyword", null],
            sol: true,
            next: "array"
          },
          {
            regex: exposeRegex,
            token: [null, "keyword", null],
            sol: true,
            next: "expose"
          },
          // Highlight an instruction followed by arguments
          {
            regex: instructionWithArguments,
            token: [null, "keyword", null],
            sol: true,
            next: "arguments"
          },
          {
            regex: /./,
            token: null
          }
        ],
        from: [
          {
            regex: /\s*$/,
            token: null,
            next: "start"
          },
          {
            // Line comment without instruction arguments is an error
            regex: /(\s*)(#.*)$/,
            token: [null, "error"],
            next: "start"
          },
          {
            regex: /(\s*\S+\s+)(as)/i,
            token: [null, "keyword"],
            next: "start"
          },
          // Fail safe return to start
          {
            token: null,
            next: "start"
          }
        ],
        single: [
          {
            regex: /(?:[^\\']|\\.)/,
            token: "string"
          },
          {
            regex: /'/,
            token: "string",
            pop: true
          }
        ],
        double: [
          {
            regex: /(?:[^\\"]|\\.)/,
            token: "string"
          },
          {
            regex: /"/,
            token: "string",
            pop: true
          }
        ],
        array: [
          {
            regex: /\]/,
            token: null,
            next: "start"
          },
          {
            regex: /"(?:[^\\"]|\\.)*"?/,
            token: "string"
          }
        ],
        expose: [
          {
            regex: /\d+$/,
            token: "number",
            next: "start"
          },
          {
            regex: /[^\d]+$/,
            token: null,
            next: "start"
          },
          {
            regex: /\d+/,
            token: "number"
          },
          {
            regex: /[^\d]+/,
            token: null
          },
          // Fail safe return to start
          {
            token: null,
            next: "start"
          }
        ],
        arguments: [
          {
            regex: /^\s*#.*$/,
            sol: true,
            token: "comment"
          },
          {
            regex: /"(?:[^\\"]|\\.)*"?$/,
            token: "string",
            next: "start"
          },
          {
            regex: /"/,
            token: "string",
            push: "double"
          },
          {
            regex: /'(?:[^\\']|\\.)*'?$/,
            token: "string",
            next: "start"
          },
          {
            regex: /'/,
            token: "string",
            push: "single"
          },
          {
            regex: /[^#"']+[\\`]$/,
            token: null
          },
          {
            regex: /[^#"']+$/,
            token: null,
            next: "start"
          },
          {
            regex: /[^#"']+/,
            token: null
          },
          // Fail safe return to start
          {
            token: null,
            next: "start"
          }
        ],
        meta: {
          lineComment: "#"
        }
      });
      CodeMirror.defineMIME("text/x-dockerfile", "dockerfile");
    });
  })();
  return dockerfile$2.exports;
}
var dockerfileExports = requireDockerfile();
const dockerfile = /* @__PURE__ */ getDefaultExportFromCjs(dockerfileExports);
const dockerfile$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: dockerfile
}, [dockerfileExports]);
export {
  dockerfile$1 as d
};
