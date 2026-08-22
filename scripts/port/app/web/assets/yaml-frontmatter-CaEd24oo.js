import { a as requireCodemirror, g as getDefaultExportFromCjs } from "./index-CsLNvl25.js";
import { r as requireYaml } from "./yaml-Eb09VVWv.js";
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
var yamlFrontmatter$2 = { exports: {} };
var hasRequiredYamlFrontmatter;
function requireYamlFrontmatter() {
  if (hasRequiredYamlFrontmatter) return yamlFrontmatter$2.exports;
  hasRequiredYamlFrontmatter = 1;
  (function(module, exports) {
    (function(mod) {
      mod(requireCodemirror(), requireYaml());
    })(function(CodeMirror) {
      var START = 0, FRONTMATTER = 1, BODY = 2;
      CodeMirror.defineMode("yaml-frontmatter", function(config, parserConfig) {
        var yamlMode = CodeMirror.getMode(config, "yaml");
        var innerMode = CodeMirror.getMode(config, parserConfig && parserConfig.base || "gfm");
        function localMode(state) {
          return state.state == FRONTMATTER ? { mode: yamlMode, state: state.yaml } : { mode: innerMode, state: state.inner };
        }
        return {
          startState: function() {
            return {
              state: START,
              yaml: null,
              inner: CodeMirror.startState(innerMode)
            };
          },
          copyState: function(state) {
            return {
              state: state.state,
              yaml: state.yaml && CodeMirror.copyState(yamlMode, state.yaml),
              inner: CodeMirror.copyState(innerMode, state.inner)
            };
          },
          token: function(stream, state) {
            if (state.state == START) {
              if (stream.match("---", false)) {
                state.state = FRONTMATTER;
                state.yaml = CodeMirror.startState(yamlMode);
                return yamlMode.token(stream, state.yaml);
              } else {
                state.state = BODY;
                return innerMode.token(stream, state.inner);
              }
            } else if (state.state == FRONTMATTER) {
              var end = stream.sol() && stream.match(/(---|\.\.\.)/, false);
              var style = yamlMode.token(stream, state.yaml);
              if (end) {
                state.state = BODY;
                state.yaml = null;
              }
              return style;
            } else {
              return innerMode.token(stream, state.inner);
            }
          },
          innerMode: localMode,
          indent: function(state, a, b) {
            var m = localMode(state);
            return m.mode.indent ? m.mode.indent(m.state, a, b) : CodeMirror.Pass;
          },
          blankLine: function(state) {
            var m = localMode(state);
            if (m.mode.blankLine) return m.mode.blankLine(m.state);
          }
        };
      });
    });
  })();
  return yamlFrontmatter$2.exports;
}
var yamlFrontmatterExports = requireYamlFrontmatter();
const yamlFrontmatter = /* @__PURE__ */ getDefaultExportFromCjs(yamlFrontmatterExports);
const yamlFrontmatter$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: yamlFrontmatter
}, [yamlFrontmatterExports]);
export {
  yamlFrontmatter$1 as y
};
