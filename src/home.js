export function renderHome() {
    const contentDiv = document.querySelector("#content");

    const heading = document.createElement("h1");
    heading.textContent = "Welcome to Golden Crust Bakery!";

    const subHeading = document.createElement("p");
    subHeading.textContent = "Freshly baked bread and pastries every morning";

    const button = document.createElement("button");
    button.classList.add("btn");
    button.textContent = "Menu";

    contentDiv.appendChild(heading);
    contentDiv.appendChild(subHeading);
    contentDiv.appendChild(button);
}