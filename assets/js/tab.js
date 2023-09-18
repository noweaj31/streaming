"use strict";

const tabBtns = document.querySelectorAll(".button-area .tab-btn");
const tabContents = document.querySelectorAll(".bottom-content");

tabBtns.addEventListener("click", () => {
  tabContents.style.display = "flex";
});
