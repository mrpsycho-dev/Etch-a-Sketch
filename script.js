'use strict';
const grid = document.querySelector('.grid');
const button = document.querySelector('.button');
const input = document.querySelector('.input');
let number = 16;

const getRandomRGBColor = function () {
  const r = Math.trunc(Math.random() * 256);
  const g = Math.trunc(Math.random() * 256);
  const b = Math.trunc(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
};

const init = function () {
  grid.innerHTML = '';
  for (let i = 0; i < number ** 2; i++) {
    let div = document.createElement('div');
    grid.appendChild(div);
    grid.style.gridTemplateColumns = `repeat(${number}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${number}, 1fr)`;
    div.addEventListener('mouseover', function () {
      // div.classList.add('hovered');
      div.style.backgroundColor = getRandomRGBColor();
    });
  }
};
init();
button.addEventListener('click', function () {
  number = input.value;
  if (number >= 1 && number <= 100) {
    init();
  }
});
