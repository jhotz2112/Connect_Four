/*----- constants -----*/
const colors = {
    '1' : "red",
    '-1' : "black",
    '0' : "white"
}
// const sounds

/*----- app's state (variables) -----*/
let board;
let playerTurn; // 1, -1
let winner; // null, 1, -1, "T"

 /*----- cached element references -----*/
const colBtns = [...document.querySelectorAll("#column-buttons > button")];

 /*----- event listeners -----*/
document.getElementById("column-buttons").addEventListener("click", handleMove)

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
    playerTurn = 1;
    winner = null;
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
        });
        colBtns[columnidx].style.visibility = column.includes(0) ? "visible" : "hidden";
    });
}

function handleMove(evt) {
    // update all impacted state
    const colIdx = colBtns.indexOf(evt.target);
    if (colIdx === -1 || winner) return;
    const colArr = board[colIdx];
    const rowIdx = colArr.indexOf(0);
    if (rowIdx === -1) return;
    colArr[rowIdx] = playerTurn;
    playerTurn *= -1;
    winner = getWinner(colIdx, rowIdx);
    render();
}

//****** /win logic (not done)/ ********

//check 3 different conditions
function getWinner(colIdx, rowIdx) {  
    // function checkHori([colIdx], [rowIdx]){
    //     for(let i = -3, i < 0, ++i) {
    //         if ([colIdx + i][rowIdx] === ([colIdx], [rowIdx]) && [colIdx + i + 1][rowIdx] === ([colIdx + i + 1], [rowIdx]) && [colIdx + i + 2][rowIdx] === [colIdx][roxIdx]){
    //             console.log('Winner');
    //         }
    //     }
    // }
    }