const grid = document.querySelector('.boxes-container');

const colorInput = document.querySelector('#color-el');
const rangeInput = document.querySelector('#range-el');
const resolutionMessage = document.querySelector('#resolution-el');

generateGrid(rangeInput.value)

function createBox(boxSize) {
  const box = document.createElement('div');

  box.classList.add('box');

  return box;
}

function generateGrid(gridSize) {
  grid.innerHTML = '';

  grid.style.gridTemplateColumns = `repeat(${gridSize}, auto)`;

  resolutionMessage.textContent = `${gridSize}x${gridSize}`;

  for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
      grid.appendChild(
        createBox(rangeInput.value)
      );
    }
  }
}

let mouseDown = false;

rangeInput.addEventListener('change', () => {
  generateGrid(rangeInput.value);
});

function colorPixel(pixel) {
  pixel.style.backgroundColor = colorInput.value;
}

grid.addEventListener('mousemove', (event) => {
  if (!event.target.classList.contains('box')) {
    return;
  }

  if (!this.mouseDown) {
    return;
  }

  colorPixel(event.target);
});

grid.addEventListener('mousedown', (event) => {
  if (event.button == 0) this.mouseDown = true;
});

document.addEventListener('mouseup', (event) => {

  if (this.mouseDown === true && event.target.classList.contains('box')) {
    colorPixel(event.target);
  }

  if (event.button === 0)
    this.mouseDown = false;

});