/*----- constants -----*/
const colors = {
    '1' : "red",
    '-1' : "black",
    '0' : "white"
}
// const sounds
/*----- app's state (variables) -----*/
let board;
let playerTurn;
let winner;
// /*----- cached element references -----*/
// playerMoves
// /*----- event listeners -----*/
document.getElementById("button1");
document.getElementById("button2");
document.getElementById("button3");
document.getElementById("button4");
document.getElementById("button5");
document.getElementById("button6");
document.getElementById("button7");
// /*----- functions -----*/
init();
function init() {
    board = [
        [0, 0, 0, 0, 0, 0],  // Column 0
        [0, 0, 0, 0, 0, 0],  // Column 1
        [0, 0, 0, 0, 0, 0],  // Column 2
        [0, 0, 0, 0, 0, 0],  // Column 3
        [0, 0, 0, 0, 0, 0],  // Column 4
        [0, 0, 0, 0, 0, 0],  // Column 5
        [0, 0, 0, 0, 0, 0],  // Column 6
      ];
      render();
}
function render() {
    // itterate over each column in  board
    board.forEach((column, columnidx) => {
        // itterate over each cell in column
        column.forEach((cell, cellidx) => {
            // find specific cell using columnidx and cellidx
            let div = document.getElementById(`c${columnidx}r${cellidx}`);
            div.style.backgroundColor = colors[cell];
        })
    });
}
