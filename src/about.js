export function renderAbout() {
  const contentDiv = document.querySelector("#content");
  const body = document.querySelector("body");

  body.classList.add("home-section");

  const heading = document.createElement("h1");
  heading.textContent = "About Golden Crust Bakery";

  const firstParagraph = document.createElement("p");
  firstParagraph.textContent =
    "At Golden Crust Bakery, we believe that real taste comes from simple, natural ingredients and a touch of love. Our mission is to fill every table with joy and comfort through freshly baked bread and irresistible pastries, crafted from time-honored recipes.";

  const secondParagraph = document.createElement("p");
  secondParagraph.textContent =
    "Each day begins before sunrise, as we prepare breads and sweets that greet you with warmth and care. For us, baking is more than just a craft—it’s an art, and a way to share happiness.";

  const thirdParagraph = document.createElement("p");
  const boldText = document.createElement("strong");
  boldText.textContent =
    "Golden Crust – the golden touch to brighten your day.";
  boldText.classList.add("subtitle");

  contentDiv.appendChild(heading);
  contentDiv.appendChild(firstParagraph);
  contentDiv.appendChild(secondParagraph);
  contentDiv.appendChild(thirdParagraph);
  thirdParagraph.appendChild(boldText);
}
