"use strict";

const accordionItem = document.querySelectorAll(".accordion-item");

accordionItem.forEach((item) => {
  const tabBtn = item.querySelector(".tab-btn");
  const bottomContent = item.querySelector(".bottom-content");

  tabBtn.addEventListener("click", () => {
    const expanded = tabBtn.getAttribute("aria-expanded") === "true";

    tabBtn.setAttribute("aria-expanded", !expanded);

    if (expanded) {
      bottomContent.setAttribute("hidden", "true");
    } else {
      bottomContent.removeAttribute("hidden");
    }
  });
});
