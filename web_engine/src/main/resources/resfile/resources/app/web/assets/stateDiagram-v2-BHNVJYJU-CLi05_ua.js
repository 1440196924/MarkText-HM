import { s as styles_default, b as stateRenderer_v3_unified_default, a as stateDiagram_default, S as StateDB } from "./chunk-AQP2D5EJ-BVOa6tEO.js";
import { _ as __name } from "./mermaid.core-BAhq02UD.js";
import "./chunk-55IACEB6-bz6mQV4v.js";
import "./chunk-2J33WTMH-Dxo5ptcP.js";
import "./index-1FfQlz0g.js";
import "./step-B2M6Y14w.js";
var diagram = {
  parser: stateDiagram_default,
  get db() {
    return new StateDB(2);
  },
  renderer: stateRenderer_v3_unified_default,
  styles: styles_default,
  init: /* @__PURE__ */ __name((cnf) => {
    if (!cnf.state) {
      cnf.state = {};
    }
    cnf.state.arrowMarkerAbsolute = cnf.arrowMarkerAbsolute;
  }, "init")
};
export {
  diagram
};
