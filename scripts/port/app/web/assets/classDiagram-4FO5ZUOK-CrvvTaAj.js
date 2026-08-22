import { s as styles_default, c as classRenderer_v3_unified_default, a as classDiagram_default, C as ClassDB } from "./chunk-727SXJPM-ColaHymB.js";
import { _ as __name } from "./mermaid.core-Bloi-WWU.js";
import "./chunk-FMBD7UC4-D6tG9uYu.js";
import "./chunk-ND2GUHAM-BlCOSnpn.js";
import "./chunk-55IACEB6-BAuzigWL.js";
import "./chunk-2J33WTMH-PFyjutJd.js";
import "./index-Ccykuj0R.js";
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
