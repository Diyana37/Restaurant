import { switchContent } from "./utils.js";

export function attachEventListenersToButtons() {
  const linkButtons = Array.from(document.querySelectorAll(".btn-link"));

  linkButtons.forEach((btn) => {
    btn.addEventListener("click", function (e) {
      switchContent(e.target.getAttribute("id"));
    });
  });
}
