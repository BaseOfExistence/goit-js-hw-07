'use strict';
 
const aray = document.querySelectorAll(".item");
console.log(`Number of categories: ${aray.length}`);
aray.forEach(value => {
  const text = value.querySelector("h2");
  console.log(`Category: ${text.textContent}`);
  const count = value.querySelectorAll("li");
  console.log(`Elements: ${count.length}`);
});