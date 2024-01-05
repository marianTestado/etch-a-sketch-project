const grid = document.createElement('div');
grid.classList.add('grid');
const container = document.querySelector('#container');
container.appendChild(grid);
createGrid(16);

let gridRange = document.querySelector('input');
let gridBtn = document.querySelector('#button');

let gridValue = document.querySelector('#gridValue');

gridRange.addEventListener('input',  () => {
    squareSize = gridRange.value;
    gridValue.innerText = `${squareSize}x${squareSize}`;
  });

gridBtn.addEventListener('click', () =>{
    while(grid.firstChild)
    {
        grid.removeChild(grid.lastChild);
    }
    createGrid(gridRange.value);
})

function createDiv(size){

    let div = document.createElement('div');
    div.classList.add('square');
    div.style.width = `${size - 2}px`;
    div.style.height = `${size - 2}px`;
    div.addEventListener('mouseover', () =>{
        div.style.backgroundColor = 'black';
    });

    return div;
}

function createGrid(gridSize){

    for(let i = 0; i < gridSize; i++)
    {
        for(let j = 0; j < gridSize; j++)
        {
            grid.appendChild(createDiv(grid.clientWidth/gridSize));
        }


    }
    return grid;
}
