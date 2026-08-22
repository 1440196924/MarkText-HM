import { s as styles_default, c as classRenderer_v3_unified_default, a as classDiagram_default, C as ClassDB } from "./chunk-727SXJPM-CvvQUBVT.js";
import { _ as __name } from "./mermaid.core-CQdzWWkx.js";
import "./chunk-FMBD7UC4-BOm7B8Ck.js";
import "./chunk-ND2GUHAM-B51gr0hb.js";
import "./chunk-55IACEB6-DO2TQlMo.js";
import "./chunk-2J33WTMH-BQECQ_29.js";
import "./index-D8xk56-E.js";
import "./step-B2M6Y14w.js";
var diagram = {
  parser: classDiagram_default,
  get db() {
    return new ClassDB();
  },
  renderer: classRenderer_v3_unified_default,
  styles: styles_default,
  init: /* @__PURE__ */ __name((cnf) => {
    if (!cnf.class) {
      cnf.class = {};
    }
    cnf.class.arrowMarkerAbsolute = cnf.arrowMarkerAbsolute;
  }, "init")
};
export {
  diagram
};
