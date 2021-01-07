const container = document.querySelector('.container');

for (let i = 0; i < 256; i++){
    let gridChild = document.createElement('div');
    gridChild.id = i;
    gridChild.style = gridChild.style = "background-color: white; width: auto; height: 50px; border: 1px solid black";
    gridChild.addEventListener('mouseenter', e => {
        gridChild.style = "background-color: black; width: auto; height: 50px; border: 1px solid black";
    });
    container.appendChild(gridChild);
}

const btn = document.querySelector('.btn');

btn.addEventListener('click', () =>{

    let numOfSquares = prompt("Enter the amount of squares");

    let squares = document.querySelector('.container');

    while (squares.firstChild) {
        squares.removeChild(squares.firstChild);
      }

    for (let i = 0; i < numOfSquares; i++){
        let gridChild = document.createElement('div');
        gridChild.id = i;
        gridChild.style = gridChild.style = "background-color: white; width: auto; height: 50px; border: 1px solid black";
        gridChild.addEventListener('mouseenter', e => {
            gridChild.style = "background-color: black; width: auto; height: 50px; border: 1px solid black";
        });
        squares.appendChild(gridChild);
    }
})