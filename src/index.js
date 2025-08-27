import { renderHome } from "./home.js";
import "./styles.css";
import { cleanState } from "./utils.js";

function init() {
  cleanState();
  renderHome();
}

init();
