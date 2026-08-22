import { s as styles_default, c as classRenderer_v3_unified_default, a as classDiagram_default, C as ClassDB } from "./chunk-727SXJPM-C4Teg8Do.js";
import { _ as __name } from "./mermaid.core-BAhq02UD.js";
import "./chunk-FMBD7UC4-DuhXeV5K.js";
import "./chunk-ND2GUHAM-DHs5c3f8.js";
import "./chunk-55IACEB6-bz6mQV4v.js";
import "./chunk-2J33WTMH-Dxo5ptcP.js";
import "./index-1FfQlz0g.js";
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
