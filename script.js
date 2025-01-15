'use strict';
const grid = document.querySelector('.grid');
const ok = document.querySelector('.ok');
const black = document.querySelector('.black');
const random = document.querySelector('.random');
const eraser = document.querySelector('.eraser');

const input = document.querySelector('.input');
let number = 16;
let color = 'random';
let lastSelectedColor = 'random';

document.addEventListener('keydown', function (e) {
  if (e.key === 'Control') {
    color = '';
  }
});
document.addEventListener('keyup', function (e) {
  if (e.key === 'Control') {
    color = lastSelectedColor;
  }
});

black.addEventListener('click', function () {
  color = 'black';
  lastSelectedColor = color;
});
random.addEventListener('click', function () {
  color = 'random';
  lastSelectedColor = color;
});
eraser.addEventListener('click', function () {
  color = 'white';
  lastSelectedColor = color;
});

const getRandomRGBColor = function () {
  const r = Math.trunc(Math.random() * 256);
  const g = Math.trunc(Math.random() * 256);
  const b = Math.trunc(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
};

const init = function () {
  grid.replaceChildren();
  for (let i = 0; i < number ** 2; i++) {
    let div = document.createElement('div');
    grid.appendChild(div);
    grid.style.gridTemplateColumns = `repeat(${number}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${number}, 1fr)`;
    div.addEventListener('mouseover', function () {
      if (color === 'random') {
        div.style.backgroundColor = getRandomRGBColor();
      } else if (color === 'black') {
        div.style.backgroundColor = '#000';
      } else if (color === 'white') {
        div.style.backgroundColor = '#fff';
      }
    });
  }
};
init();
ok.addEventListener('click', function () {
  number = input.value;
  if (number >= 1 && number <= 100) {
    init();
  }
});
