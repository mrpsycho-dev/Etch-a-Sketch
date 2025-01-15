'use strict';

const container = document.querySelector('.container');
const grid = document.querySelector('.grid');
const button = document.querySelector('.button');
const input = document.querySelector('.input');
let number = 16 ** 2;
// console.log(number);

const clearAll = function () {
  grid.innerHTML = '';
};
const init = function () {
  clearAll();
  for (let i = 0; i < number ** 2; i++) {
    let div = document.createElement('div');
    grid.appendChild(div);
    div.addEventListener('mouseover', function () {
      div.classList.add('hovered');
    });
  }
};
init();
button.addEventListener('click', function () {
  number = input.value ** 2;
  // console.log(number);
  grid.style.gridTemplateColumns = `repeat(${Math.sqrt(number)}, 1fr)`;
  grid.style.gridTemplateRows = `repeat(${Math.sqrt(number)}, 1fr)`;
  clearAll();
  init();
});
