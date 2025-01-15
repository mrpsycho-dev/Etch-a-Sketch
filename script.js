'use strict';
const grid = document.querySelector('.grid');
const button = document.querySelector('.button');
const input = document.querySelector('.input');
let number = 16;

const clearAll = function () {
  grid.innerHTML = '';
};
const init = function () {
  clearAll();
  for (let i = 0; i < number ** 2; i++) {
    let div = document.createElement('div');
    grid.appendChild(div);
    grid.style.gridTemplateColumns = `repeat(${number}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${number}, 1fr)`;
    div.addEventListener('mouseover', function () {
      div.classList.add('hovered');
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
