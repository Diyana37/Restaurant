import { bodySectionClasses } from "./constants.js";
import { renderHome } from "./home.js";
import { renderMenu } from "./menu.js";

export function removeBodyClasses() {
  const body = document.querySelector("body");

  bodySectionClasses.forEach((bodyClass) => {
    body.classList.remove(bodyClass);
  });
}

export function cleanState() {
  const main = document.querySelector("main");
  const contentDiv = document.querySelector("#content");

  main.removeChild(contentDiv);

  const contentDivNew = document.createElement("div");
  contentDivNew.setAttribute("id", "content");

  main.appendChild(contentDivNew);
}

export function switchContent(btnId) {
  removeBodyClasses();
  cleanState();

  if (btnId === "home-nav") {
    renderHome();
  } else if (btnId === "menu-nav" || btnId === "menu-main") {
    renderMenu();
  }
}