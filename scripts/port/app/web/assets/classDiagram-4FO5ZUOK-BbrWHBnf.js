import { s as styles_default, c as classRenderer_v3_unified_default, a as classDiagram_default, C as ClassDB } from "./chunk-727SXJPM-CteZG5kV.js";
import { _ as __name } from "./mermaid.core-ChV6Ok9d.js";
import "./chunk-FMBD7UC4-CrEpUpwc.js";
import "./chunk-ND2GUHAM-CziLy9Ce.js";
import "./chunk-55IACEB6-CATDzoJU.js";
import "./chunk-2J33WTMH-DLIeltJj.js";
import "./index-CsLNvl25.js";
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
