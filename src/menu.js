export function renderMenu() {
    const contentDiv = document.querySelector("#content");
    const body = document.querySelector("body");

    body.classList.add("menu-section");

    const heading = document.createElement("h1");
    heading.textContent = "Welcome to Golden Crust Bakery Menu!";

    contentDiv.appendChild(heading);
}