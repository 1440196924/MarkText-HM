import { s as styles_default, c as classRenderer_v3_unified_default, a as classDiagram_default, C as ClassDB } from "./chunk-727SXJPM-B3cXeeCB.js";
import { _ as __name } from "./mermaid.core-Bg0XQCyF.js";
import "./chunk-FMBD7UC4-Dza9Iguk.js";
import "./chunk-ND2GUHAM-HsfoNzZ3.js";
import "./chunk-55IACEB6-DJhcEhKy.js";
import "./chunk-2J33WTMH-qaMLTtH2.js";
import "./index-ouHvDw0s.js";
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
