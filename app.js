const gridContainer = document.querySelector('.grid-container');
const btnContainer = document.querySelector('btn-container');
const inputContainer = document.querySelector('.input-container');

function createGrid (num) {
  let squares = num * num;
  for (let i = 0; i < squares; i++){
    const square = document.createElement('div');
    square.classList.add('square');
    square.addEventListener('mouseenter', () =>{
      console.log('It works.')
    });
    gridContainer.appendChild(square);
    gridContainer.style.gridTemplateColumns = `repeat(${num}, 1fr)`
    gridContainer.style.gridTemplateRows = `repeat(${num}, 1fr)`
  }
}

createGrid(20);