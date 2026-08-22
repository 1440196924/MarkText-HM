import { s as styles_default, c as classRenderer_v3_unified_default, a as classDiagram_default, C as ClassDB } from "./chunk-727SXJPM-B4t_pSsY.js";
import { _ as __name } from "./mermaid.core-UAbW6O5Q.js";
import "./chunk-FMBD7UC4-KQsafvWo.js";
import "./chunk-ND2GUHAM-D_O7Nnhy.js";
import "./chunk-55IACEB6-BjsEjzmJ.js";
import "./chunk-2J33WTMH-hWbPxllf.js";
import "./index-Nx_AZTXs.js";
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
