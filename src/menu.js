import frenchCroissantSrc from "./assets/French-Croissants-SM-2363.jpg";
import chocolateCakeSrc from "./assets/chocolate-cake.jpg";
import frenchBaguetteSrc from "./assets/French-Bread-0756-KCweb-696x522.jpg"
import blueberryMuffin from "./assets/vegan-blueberry-muffins-1-1.jpg";

export function renderMenu() {
    const contentDiv = document.querySelector("#content");
    const body = document.querySelector("body");

    body.classList.add("menu-section");

    const heading = document.createElement("h1");
    heading.textContent = "Golden Crust Bakery - Menu";

    const subHeading = document.createElement("p");
    subHeading.textContent = "Freshly baked bread and pastries every morning";
    subHeading.classList.add("subtitle");

    const section = document.createElement("section");
    section.classList.add("grid");

    //first menu item
    const firstCard = document.createElement("div");
    firstCard.classList.add("card");
    const firstImage = document.createElement("img");
    firstImage.setAttribute("src" , frenchCroissantSrc);
    const firstHeading = document.createElement("h3");
    firstHeading.textContent = "Croissant";
    const firstParagraph = document.createElement("p");
    firstParagraph.textContent = "Buttery, fluffy and full of flavor.";
    const firstPrice = document.createElement("span");
    firstPrice.classList.add("price");
    firstPrice.textContent = "1.80 lv.";

    //second menu item
    const secondCard = document.createElement("div");
    secondCard.classList.add("card");
    const secondImage = document.createElement("img");
    secondImage.setAttribute("src", chocolateCakeSrc);
    const secondHeading = document.createElement("h3");
    secondHeading.textContent = "Chocolate Cake";
    const secondParagraph = document.createElement("p");
    secondParagraph.textContent = "Rich, moist, and indulgently chocolaty.";
    const secondPrice = document.createElement("span");
    secondPrice.classList.add("price");
    secondPrice.textContent = "3.90 lv.";

    //third menu item
    const thirdCard = document.createElement("div");
    thirdCard.classList.add("card");
    const thirdImage = document.createElement("img");
    thirdImage.setAttribute("src", frenchBaguetteSrc);
    const thirdHeading = document.createElement("h3");
    thirdHeading.textContent = "French Baguette";
    const thirdParagraph = document.createElement("p");
    thirdParagraph.textContent = "Crispy outside, soft inside.";
    const thirdPrice = document.createElement("span");
    thirdPrice.classList.add("price");
    thirdPrice.textContent = "2.20 lv.";

    //fourth menu item
    const fourthCard = document.createElement("div");
    fourthCard.classList.add("card");
    const fourthImage = document.createElement("img");
    fourthImage.setAttribute("src", blueberryMuffin);
    const fourthHeading = document.createElement("h3");
    fourthHeading.textContent = "Blueberry Muffin";
    const fourthParagraph = document.createElement("p");
    fourthParagraph.textContent = "Moist, fruity and freshly baked.";
    const fourthPrice = document.createElement("span");
    fourthPrice.classList.add("price");
    fourthPrice.textContent = "2.80 lv.";

    contentDiv.appendChild(heading);
    contentDiv.appendChild(subHeading);
    contentDiv.appendChild(section);

    section.appendChild(firstCard);
    firstCard.appendChild(firstImage);
    firstCard.appendChild(firstHeading);
    firstCard.appendChild(firstParagraph);
    firstCard.appendChild(firstPrice);

    section.appendChild(secondCard);
    secondCard.appendChild(secondImage);
    secondCard.appendChild(secondHeading);
    secondCard.appendChild(secondParagraph);
    secondCard.appendChild(secondPrice);

    section.appendChild(thirdCard);
    thirdCard.appendChild(thirdImage);
    thirdCard.appendChild(thirdHeading);
    thirdCard.appendChild(thirdParagraph);
    thirdCard.appendChild(thirdPrice);

    section.appendChild(fourthCard);
    fourthCard.appendChild(fourthImage);
    fourthCard.appendChild(fourthHeading);
    fourthCard.appendChild(fourthParagraph);
    fourthCard.appendChild(fourthPrice);
}
