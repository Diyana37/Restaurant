import { attachEventListenersToButtons } from "./event-listeners.js";

export function renderHome() {
    const contentDiv = document.querySelector("#content");
    const body = document.querySelector("body");

    body.classList.add("home-section");

    const heading = document.createElement("h1");
    heading.textContent = "Welcome to Golden Crust Bakery!";

    const subHeading = document.createElement("p");
    subHeading.textContent = "Freshly baked bread and pastries every morning";

    const button = document.createElement("button");
    button.setAttribute("id", "menu-main")
    button.classList.add("btn", "btn-link");
    button.textContent = "Menu";

    contentDiv.appendChild(heading);
    contentDiv.appendChild(subHeading);
    contentDiv.appendChild(button);

    attachEventListenersToButtons();
}