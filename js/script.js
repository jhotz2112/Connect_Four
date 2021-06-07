/*----- constants -----*/
const colors = {
    '1' : "red",
    '-1' : "black",
    '0' : "white"
}

const winningArrays = [
    
  ]

// const sounds
/*----- app's state (variables) -----*/
let board;
let playerTurn;
let winner;
// /*----- cached element references -----*/
//button 1
var button = document.createElement("button1");
button.innerHTML = " ";

var button1 = document.getElementsByTagName("body")[0];
button1.appendChild(button);

// /*----- event listeners -----*/
button1.addEventListener ("click", function() {
    alert("did something");
  });

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

function checkBoard() {
    for(let i = 0; i < winningArrays.length; i++) {
       const square1 = squares[winningArrays[i][0]]
       const square2 = squares[winningArrays[i][1]]
       const square3 = squares[winningArrays[i][2]]
       const square4 = squares[winningArrays[i][3]]
    }

        if (
            square1.classList.contains("red") &&
            square2.classList.contains("red") &&
            square3.classList.contains("red") &&
            square4.classList.contains("red")
        )
        {
         result.innerHTML = 'Red Wins!'
        }
        if (
            square1.classList.contains("black") &&
            square2.classList.contains("black") &&
            square3.classList.contains("black") &&
            square4.classList.contains("black")
        )
        {
        result.innerHTML = 'Black Wins!'
        } else {
            result.innerHTML = 'Tie Game'
        }
    }

