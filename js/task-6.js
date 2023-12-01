'use strict';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const boxes = document.querySelector("#boxes");
const create = document.querySelector(".create");
const destroy = document.querySelector(".destroy");
const number = document.querySelector("#controls > input");
let counter = 0;
let height = 30;
let width = 30;
const createBoxes = (amount) => {
    amount = counter;
    for (; boxes.children.length != 0;) {
        boxes.lastChild.remove();
    }
    if (amount >= 1 && amount <= 100) {
        for (let index = 0; index < amount; index++) {
            boxes.insertAdjacentHTML("beforeend", `<div class="box"; style="height: ${height}px; width: ${width}px; background-color: ${getRandomHexColor()};"></div>`);
            height += 10;
            width += 10;
        }
        height = 30;
        width = 30;
    }
};
const destroyBoxes = () => {
    for (; boxes.children.length != 0;) {
        boxes.lastChild.remove();
    }
}
create.addEventListener("click", createBoxes);
destroy.addEventListener("click", destroyBoxes);
number.addEventListener("input", (even) => {
    counter = even.target.value;
});
