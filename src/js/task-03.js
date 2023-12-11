'use strict';

const input = document.querySelector("#name-input");
const span = document.querySelector("#name-output");
input.addEventListener("input", (event) => {
  span.textContent = event.target.value.trim();
  if (span.textContent === "") {
    span.textContent = "Anonymous";
  }
});