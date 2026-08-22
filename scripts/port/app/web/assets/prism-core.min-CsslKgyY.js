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
var prismCore_min$2 = { exports: {} };
var hasRequiredPrismCore_min;
function requirePrismCore_min() {
  if (hasRequiredPrismCore_min) return prismCore_min$2.exports;
  hasRequiredPrismCore_min = 1;
  (function(module) {
    var _self = "undefined" != typeof window ? window : "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope ? self : {}, Prism = (function(e) {
      var n = /(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i, t = 0, r = {}, a = { manual: e.Prism && e.Prism.manual, disableWorkerMessageHandler: e.Prism && e.Prism.disableWorkerMessageHandler, util: { encode: function e2(n2) {
        return n2 instanceof i ? new i(n2.type, e2(n2.content), n2.alias) : Array.isArray(n2) ? n2.map(e2) : n2.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ");
      }, type: function(e2) {
        return Object.prototype.toString.call(e2).slice(8, -1);
      }, objId: function(e2) {
        return e2.__id || Object.defineProperty(e2, "__id", { value: ++t }), e2.__id;
      }, clone: function e2(n2, t2) {
        var r2, i2;
        switch (t2 = t2 || {}, a.util.type(n2)) {
          case "Object":
            if (i2 = a.util.objId(n2), t2[i2]) return t2[i2];
            for (var l2 in r2 = {}, t2[i2] = r2, n2) n2.hasOwnProperty(l2) && (r2[l2] = e2(n2[l2], t2));
            return r2;
          case "Array":
            return i2 = a.util.objId(n2), t2[i2] ? t2[i2] : (r2 = [], t2[i2] = r2, n2.forEach((function(n3, a2) {
              r2[a2] = e2(n3, t2);
            })), r2);
          default:
            return n2;
        }
      }, getLanguage: function(e2) {
        for (; e2; ) {
          var t2 = n.exec(e2.className);
          if (t2) return t2[1].toLowerCase();
          e2 = e2.parentElement;
        }
        return "none";
      }, setLanguage: function(e2, t2) {
        e2.className = e2.className.replace(RegExp(n, "gi"), ""), e2.classList.add("language-" + t2);
      }, currentScript: function() {
        if ("undefined" == typeof document) return null;
        if (document.currentScript && "SCRIPT" === document.currentScript.tagName) return document.currentScript;
        try {
          throw new Error();
        } catch (r2) {
          var e2 = (/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(r2.stack) || [])[1];
          if (e2) {
            var n2 = document.getElementsByTagName("script");
            for (var t2 in n2) if (n2[t2].src == e2) return n2[t2];
          }
          return null;
        }
      }, isActive: function(e2, n2, t2) {
        for (var r2 = "no-" + n2; e2; ) {
          var a2 = e2.classList;
          if (a2.contains(n2)) return true;
          if (a2.contains(r2)) return false;
          e2 = e2.parentElement;
        }
        return !!t2;
      } }, languages: { plain: r, plaintext: r, text: r, txt: r, extend: function(e2, n2) {
        var t2 = a.util.clone(a.languages[e2]);
        for (var r2 in n2) t2[r2] = n2[r2];
        return t2;
      }, insertBefore: function(e2, n2, t2, r2) {
        var i2 = (r2 = r2 || a.languages)[e2], l2 = {};
        for (var o2 in i2) if (i2.hasOwnProperty(o2)) {
          if (o2 == n2) for (var s2 in t2) t2.hasOwnProperty(s2) && (l2[s2] = t2[s2]);
          t2.hasOwnProperty(o2) || (l2[o2] = i2[o2]);
        }
        var u2 = r2[e2];
        return r2[e2] = l2, a.languages.DFS(a.languages, (function(n3, t3) {
          t3 === u2 && n3 != e2 && (this[n3] = l2);
        })), l2;
      }, DFS: function e2(n2, t2, r2, i2) {
        i2 = i2 || {};
        var l2 = a.util.objId;
        for (var o2 in n2) if (n2.hasOwnProperty(o2)) {
          t2.call(n2, o2, n2[o2], r2 || o2);
          var s2 = n2[o2], u2 = a.util.type(s2);
          "Object" !== u2 || i2[l2(s2)] ? "Array" !== u2 || i2[l2(s2)] || (i2[l2(s2)] = true, e2(s2, t2, o2, i2)) : (i2[l2(s2)] = true, e2(s2, t2, null, i2));
        }
      } }, plugins: {}, highlightAll: function(e2, n2) {
        a.highlightAllUnder(document, e2, n2);
      }, highlightAllUnder: function(e2, n2, t2) {
        var r2 = { callback: t2, container: e2, selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code' };
        a.hooks.run("before-highlightall", r2), r2.elements = Array.prototype.slice.apply(r2.container.querySelectorAll(r2.selector)), a.hooks.run("before-all-elements-highlight", r2);
        for (var i2, l2 = 0; i2 = r2.elements[l2++]; ) a.highlightElement(i2, true === n2, r2.callback);
      }, highlightElement: function(n2, t2, r2) {
        var i2 = a.util.getLanguage(n2), l2 = a.languages[i2];
        a.util.setLanguage(n2, i2);
        var o2 = n2.parentElement;
        o2 && "pre" === o2.nodeName.toLowerCase() && a.util.setLanguage(o2, i2);
        var s2 = { element: n2, language: i2, grammar: l2, code: n2.textContent };
        function u2(e2) {
          s2.highlightedCode = e2, a.hooks.run("before-insert", s2), s2.element.innerHTML = s2.highlightedCode, a.hooks.run("after-highlight", s2), a.hooks.run("complete", s2), r2 && r2.call(s2.element);
        }
        if (a.hooks.run("before-sanity-check", s2), (o2 = s2.element.parentElement) && "pre" === o2.nodeName.toLowerCase() && !o2.hasAttribute("tabindex") && o2.setAttribute("tabindex", "0"), !s2.code) return a.hooks.run("complete", s2), void (r2 && r2.call(s2.element));
        if (a.hooks.run("before-highlight", s2), s2.grammar) if (t2 && e.Worker) {
          var c2 = new Worker(a.filename);
          c2.onmessage = function(e2) {
            u2(e2.data);
          }, c2.postMessage(JSON.stringify({ language: s2.language, code: s2.code, immediateClose: true }));
        } else u2(a.highlight(s2.code, s2.grammar, s2.language));
        else u2(a.util.encode(s2.code));
      }, highlight: function(e2, n2, t2) {
        var r2 = { code: e2, grammar: n2, language: t2 };
        if (a.hooks.run("before-tokenize", r2), !r2.grammar) throw new Error('The language "' + r2.language + '" has no grammar.');
        return r2.tokens = a.tokenize(r2.code, r2.grammar), a.hooks.run("after-tokenize", r2), i.stringify(a.util.encode(r2.tokens), r2.language);
      }, tokenize: function(e2, n2) {
        var t2 = n2.rest;
        if (t2) {
          for (var r2 in t2) n2[r2] = t2[r2];
          delete n2.rest;
        }
        var a2 = new s();
        return u(a2, a2.head, e2), o(e2, a2, n2, a2.head, 0), (function(e3) {
          for (var n3 = [], t3 = e3.head.next; t3 !== e3.tail; ) n3.push(t3.value), t3 = t3.next;
          return n3;
        })(a2);
      }, hooks: { all: {}, add: function(e2, n2) {
        var t2 = a.hooks.all;
        t2[e2] = t2[e2] || [], t2[e2].push(n2);
      }, run: function(e2, n2) {
        var t2 = a.hooks.all[e2];
        if (t2 && t2.length) for (var r2, i2 = 0; r2 = t2[i2++]; ) r2(n2);
      } }, Token: i };
      function i(e2, n2, t2, r2) {
        this.type = e2, this.content = n2, this.alias = t2, this.length = 0 | (r2 || "").length;
      }
      function l(e2, n2, t2, r2) {
        e2.lastIndex = n2;
        var a2 = e2.exec(t2);
        if (a2 && r2 && a2[1]) {
          var i2 = a2[1].length;
          a2.index += i2, a2[0] = a2[0].slice(i2);
        }
        return a2;
      }
      function o(e2, n2, t2, r2, s2, g2) {
        for (var f2 in t2) if (t2.hasOwnProperty(f2) && t2[f2]) {
          var h2 = t2[f2];
          h2 = Array.isArray(h2) ? h2 : [h2];
          for (var d = 0; d < h2.length; ++d) {
            if (g2 && g2.cause == f2 + "," + d) return;
            var v = h2[d], p = v.inside, m = !!v.lookbehind, y = !!v.greedy, k = v.alias;
            if (y && !v.pattern.global) {
              var x = v.pattern.toString().match(/[imsuy]*$/)[0];
              v.pattern = RegExp(v.pattern.source, x + "g");
            }
            for (var b = v.pattern || v, w = r2.next, A = s2; w !== n2.tail && !(g2 && A >= g2.reach); A += w.value.length, w = w.next) {
              var P = w.value;
              if (n2.length > e2.length) return;
              if (!(P instanceof i)) {
                var E, S = 1;
                if (y) {
                  if (!(E = l(b, A, e2, m)) || E.index >= e2.length) break;
                  var L = E.index, O = E.index + E[0].length, C = A;
                  for (C += w.value.length; L >= C; ) C += (w = w.next).value.length;
                  if (A = C -= w.value.length, w.value instanceof i) continue;
                  for (var j = w; j !== n2.tail && (C < O || "string" == typeof j.value); j = j.next) S++, C += j.value.length;
                  S--, P = e2.slice(A, C), E.index -= A;
                } else if (!(E = l(b, 0, P, m))) continue;
                L = E.index;
                var N = E[0], _ = P.slice(0, L), M = P.slice(L + N.length), W = A + P.length;
                g2 && W > g2.reach && (g2.reach = W);
                var I = w.prev;
                if (_ && (I = u(n2, I, _), A += _.length), c(n2, I, S), w = u(n2, I, new i(f2, p ? a.tokenize(N, p) : N, k, N)), M && u(n2, w, M), S > 1) {
                  var T = { cause: f2 + "," + d, reach: W };
                  o(e2, n2, t2, w.prev, A, T), g2 && T.reach > g2.reach && (g2.reach = T.reach);
                }
              }
            }
          }
        }
      }
      function s() {
        var e2 = { value: null, prev: null, next: null }, n2 = { value: null, prev: e2, next: null };
        e2.next = n2, this.head = e2, this.tail = n2, this.length = 0;
      }
      function u(e2, n2, t2) {
        var r2 = n2.next, a2 = { value: t2, prev: n2, next: r2 };
        return n2.next = a2, r2.prev = a2, e2.length++, a2;
      }
      function c(e2, n2, t2) {
        for (var r2 = n2.next, a2 = 0; a2 < t2 && r2 !== e2.tail; a2++) r2 = r2.next;
        n2.next = r2, r2.prev = n2, e2.length -= a2;
      }
      if (e.Prism = a, i.stringify = function e2(n2, t2) {
        if ("string" == typeof n2) return n2;
        if (Array.isArray(n2)) {
          var r2 = "";
          return n2.forEach((function(n3) {
            r2 += e2(n3, t2);
          })), r2;
        }
        var i2 = { type: n2.type, content: e2(n2.content, t2), tag: "span", classes: ["token", n2.type], attributes: {}, language: t2 }, l2 = n2.alias;
        l2 && (Array.isArray(l2) ? Array.prototype.push.apply(i2.classes, l2) : i2.classes.push(l2)), a.hooks.run("wrap", i2);
        var o2 = "";
        for (var s2 in i2.attributes) o2 += " " + s2 + '="' + (i2.attributes[s2] || "").replace(/"/g, "&quot;") + '"';
        return "<" + i2.tag + ' class="' + i2.classes.join(" ") + '"' + o2 + ">" + i2.content + "</" + i2.tag + ">";
      }, !e.document) return e.addEventListener ? (a.disableWorkerMessageHandler || e.addEventListener("message", (function(n2) {
        var t2 = JSON.parse(n2.data), r2 = t2.language, i2 = t2.code, l2 = t2.immediateClose;
        e.postMessage(a.highlight(i2, a.languages[r2], r2)), l2 && e.close();
      }), false), a) : a;
      var g = a.util.currentScript();
      function f() {
        a.manual || a.highlightAll();
      }
      if (g && (a.filename = g.src, g.hasAttribute("data-manual") && (a.manual = true)), !a.manual) {
        var h = document.readyState;
        "loading" === h || "interactive" === h && g && g.defer ? document.addEventListener("DOMContentLoaded", f) : window.requestAnimationFrame ? window.requestAnimationFrame(f) : window.setTimeout(f, 16);
      }
      return a;
    })(_self);
    module.exports && (module.exports = Prism), "undefined" != typeof globalThis && (globalThis.Prism = Prism);
  })(prismCore_min$2);
  return prismCore_min$2.exports;
}
var prismCore_minExports = requirePrismCore_min();
const prismCore_min = /* @__PURE__ */ getDefaultExportFromCjs(prismCore_minExports);
const prismCore_min$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: prismCore_min
}, [prismCore_minExports]);
export {
  prismCore_min$1 as p
};
