import { renderHome } from "./home.js";
import "./styles.css";

function init() {
  const main = document.querySelector("main");
  const contentDiv = document.querySelector("#content");

  main.removeChild(contentDiv);
  
  const contentDivNew = document.createElement("div");
  contentDivNew.setAttribute("id", "content");

  main.appendChild(contentDivNew);

  renderHome();
}

init();
