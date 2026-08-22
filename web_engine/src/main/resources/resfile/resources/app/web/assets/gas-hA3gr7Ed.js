import { a as requireCodemirror, g as getDefaultExportFromCjs } from "./index-D8xk56-E.js";
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
var gas$2 = { exports: {} };
var hasRequiredGas;
function requireGas() {
  if (hasRequiredGas) return gas$2.exports;
  hasRequiredGas = 1;
  (function(module, exports) {
    (function(mod) {
      mod(requireCodemirror());
    })(function(CodeMirror2) {
      CodeMirror2.defineMode("gas", function(_config, parserConfig) {
        var custom = [];
        var lineCommentStartSymbol = "";
        var directives = {
          ".abort": "builtin",
          ".align": "builtin",
          ".altmacro": "builtin",
          ".ascii": "builtin",
          ".asciz": "builtin",
          ".balign": "builtin",
          ".balignw": "builtin",
          ".balignl": "builtin",
          ".bundle_align_mode": "builtin",
          ".bundle_lock": "builtin",
          ".bundle_unlock": "builtin",
          ".byte": "builtin",
          ".cfi_startproc": "builtin",
          ".comm": "builtin",
          ".data": "builtin",
          ".def": "builtin",
          ".desc": "builtin",
          ".dim": "builtin",
          ".double": "builtin",
          ".eject": "builtin",
          ".else": "builtin",
          ".elseif": "builtin",
          ".end": "builtin",
          ".endef": "builtin",
          ".endfunc": "builtin",
          ".endif": "builtin",
          ".equ": "builtin",
          ".equiv": "builtin",
          ".eqv": "builtin",
          ".err": "builtin",
          ".error": "builtin",
          ".exitm": "builtin",
          ".extern": "builtin",
          ".fail": "builtin",
          ".file": "builtin",
          ".fill": "builtin",
          ".float": "builtin",
          ".func": "builtin",
          ".global": "builtin",
          ".gnu_attribute": "builtin",
          ".hidden": "builtin",
          ".hword": "builtin",
          ".ident": "builtin",
          ".if": "builtin",
          ".incbin": "builtin",
          ".include": "builtin",
          ".int": "builtin",
          ".internal": "builtin",
          ".irp": "builtin",
          ".irpc": "builtin",
          ".lcomm": "builtin",
          ".lflags": "builtin",
          ".line": "builtin",
          ".linkonce": "builtin",
          ".list": "builtin",
          ".ln": "builtin",
          ".loc": "builtin",
          ".loc_mark_labels": "builtin",
          ".local": "builtin",
          ".long": "builtin",
          ".macro": "builtin",
          ".mri": "builtin",
          ".noaltmacro": "builtin",
          ".nolist": "builtin",
          ".octa": "builtin",
          ".offset": "builtin",
          ".org": "builtin",
          ".p2align": "builtin",
          ".popsection": "builtin",
          ".previous": "builtin",
          ".print": "builtin",
          ".protected": "builtin",
          ".psize": "builtin",
          ".purgem": "builtin",
          ".pushsection": "builtin",
          ".quad": "builtin",
          ".reloc": "builtin",
          ".rept": "builtin",
          ".sbttl": "builtin",
          ".scl": "builtin",
          ".section": "builtin",
          ".set": "builtin",
          ".short": "builtin",
          ".single": "builtin",
          ".size": "builtin",
          ".skip": "builtin",
          ".sleb128": "builtin",
          ".space": "builtin",
          ".stab": "builtin",
          ".string": "builtin",
          ".struct": "builtin",
          ".subsection": "builtin",
          ".symver": "builtin",
          ".tag": "builtin",
          ".text": "builtin",
          ".title": "builtin",
          ".type": "builtin",
          ".uleb128": "builtin",
          ".val": "builtin",
          ".version": "builtin",
          ".vtable_entry": "builtin",
          ".vtable_inherit": "builtin",
          ".warning": "builtin",
          ".weak": "builtin",
          ".weakref": "builtin",
          ".word": "builtin"
        };
        var registers = {};
        function x86(_parserConfig) {
          lineCommentStartSymbol = "#";
          registers.al = "variable";
          registers.ah = "variable";
          registers.ax = "variable";
          registers.eax = "variable-2";
          registers.rax = "variable-3";
          registers.bl = "variable";
          registers.bh = "variable";
          registers.bx = "variable";
          registers.ebx = "variable-2";
          registers.rbx = "variable-3";
          registers.cl = "variable";
          registers.ch = "variable";
          registers.cx = "variable";
          registers.ecx = "variable-2";
          registers.rcx = "variable-3";
          registers.dl = "variable";
          registers.dh = "variable";
          registers.dx = "variable";
          registers.edx = "variable-2";
          registers.rdx = "variable-3";
          registers.si = "variable";
          registers.esi = "variable-2";
          registers.rsi = "variable-3";
          registers.di = "variable";
          registers.edi = "variable-2";
          registers.rdi = "variable-3";
          registers.sp = "variable";
          registers.esp = "variable-2";
          registers.rsp = "variable-3";
          registers.bp = "variable";
          registers.ebp = "variable-2";
          registers.rbp = "variable-3";
          registers.ip = "variable";
          registers.eip = "variable-2";
          registers.rip = "variable-3";
          registers.cs = "keyword";
          registers.ds = "keyword";
          registers.ss = "keyword";
          registers.es = "keyword";
          registers.fs = "keyword";
          registers.gs = "keyword";
        }
        function armv6(_parserConfig) {
          lineCommentStartSymbol = "@";
          directives.syntax = "builtin";
          registers.r0 = "variable";
          registers.r1 = "variable";
          registers.r2 = "variable";
          registers.r3 = "variable";
          registers.r4 = "variable";
          registers.r5 = "variable";
          registers.r6 = "variable";
          registers.r7 = "variable";
          registers.r8 = "variable";
          registers.r9 = "variable";
          registers.r10 = "variable";
          registers.r11 = "variable";
          registers.r12 = "variable";
          registers.sp = "variable-2";
          registers.lr = "variable-2";
          registers.pc = "variable-2";
          registers.r13 = registers.sp;
          registers.r14 = registers.lr;
          registers.r15 = registers.pc;
          custom.push(function(ch, stream) {
            if (ch === "#") {
              stream.eatWhile(/\w/);
              return "number";
            }
          });
        }
        var arch = (parserConfig.architecture || "x86").toLowerCase();
        if (arch === "x86") {
          x86();
        } else if (arch === "arm" || arch === "armv6") {
          armv6();
        }
        function nextUntilUnescaped(stream, end) {
          var escaped = false, next;
          while ((next = stream.next()) != null) {
            if (next === end && !escaped) {
              return false;
            }
            escaped = !escaped && next === "\\";
          }
          return escaped;
        }
        function clikeComment(stream, state) {
          var maybeEnd = false, ch;
          while ((ch = stream.next()) != null) {
            if (ch === "/" && maybeEnd) {
              state.tokenize = null;
              break;
            }
            maybeEnd = ch === "*";
          }
          return "comment";
        }
        return {
          startState: function() {
            return {
              tokenize: null
            };
          },
          token: function(stream, state) {
            if (state.tokenize) {
              return state.tokenize(stream, state);
            }
            if (stream.eatSpace()) {
              return null;
            }
            var style, cur, ch = stream.next();
            if (ch === "/") {
              if (stream.eat("*")) {
                state.tokenize = clikeComment;
                return clikeComment(stream, state);
              }
            }
            if (ch === lineCommentStartSymbol) {
              stream.skipToEnd();
              return "comment";
            }
            if (ch === '"') {
              nextUntilUnescaped(stream, '"');
              return "string";
            }
            if (ch === ".") {
              stream.eatWhile(/\w/);
              cur = stream.current().toLowerCase();
              style = directives[cur];
              return style || null;
            }
            if (ch === "=") {
              stream.eatWhile(/\w/);
              return "tag";
            }
            if (ch === "{") {
              return "bracket";
            }
            if (ch === "}") {
              return "bracket";
            }
            if (/\d/.test(ch)) {
              if (ch === "0" && stream.eat("x")) {
                stream.eatWhile(/[0-9a-fA-F]/);
                return "number";
              }
              stream.eatWhile(/\d/);
              return "number";
            }
            if (/\w/.test(ch)) {
              stream.eatWhile(/\w/);
              if (stream.eat(":")) {
                return "tag";
              }
              cur = stream.current().toLowerCase();
              style = registers[cur];
              return style || null;
            }
            for (var i = 0; i < custom.length; i++) {
              style = custom[i](ch, stream, state);
              if (style) {
                return style;
              }
            }
          },
          lineComment: lineCommentStartSymbol,
          blockCommentStart: "/*",
          blockCommentEnd: "*/"
        };
      });
      CodeMirror2.defineMIME("text/x-gas", "gas");
    });
  })();
  return gas$2.exports;
}
var gasExports = requireGas();
const gas = /* @__PURE__ */ getDefaultExportFromCjs(gasExports);
const gas$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: gas
}, [gasExports]);
export {
  gas$1 as g
};
