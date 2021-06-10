/*----- constants -----*/
const colors = {
    '1': "red",
    '-1': "black",
    '0': "white"
}

/*----- app's state (variables) -----*/
let board;
let playerTurn; // 1, -1
let winner; // null, 1, -1, "T"
let turnsTaken;

/*----- cached element references -----*/
const colBtns = [...document.querySelectorAll("#column-buttons > button")];
const rstBtn = document.getElementById("reset-game");
const headerEl = document.getElementById("msg");
const audio = document.getElementById("bg-player");
const checkbox = document.getElementById("checkbox");

/*----- event listeners -----*/
document.getElementById("column-buttons").addEventListener("click", handleMove);
document.getElementById("reset-game").addEventListener("click", init);
document.querySelector("#checkbox").addEventListener("click", toggleSound);
// /*----- functions -----*/
function toggleSound() {
    checkbox.checked ? audio.play() : audio.pause();
}

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
    turnsTaken = 0;
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
    handleRstBtnText();
    turnsTaken++;
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
    //tie game, log result
    if (winner === 'T') {
        msg.innerText = "It's a Tie!!!";
    } else if (winner) {
        // Winner = truthy?, log winner
        msg.innerText = `${winner === 1 ? 'RED' : 'BLACK'} Wins!!!`;
    } else {
        //no winner? continue game
        headerEl.innerHTML = `${playerTurn === 1 ? 'RED' : 'BLACK'}'s turn!`;
    }
}

//Win logic
function getWinner() {
    //check for tie
    if (turnsTaken >= 42) {return winner = "T"};
    //check every collumn for a winner, if so return the winner
    for (let colIdx = 0; colIdx <= 6; colIdx++) {
        winner = checkCol(colIdx);
        if (winner) break;
    }
    return winner;
}

//check Col at it's index within the board 2d array
function checkCol(colIdx) {
    const colArr = board[colIdx];
    // for every row in the col: check for winner and set var winner = winning color
    for (let rowIdx = 0; rowIdx < colArr.length; rowIdx++) {
        let winner = checkVer(colArr, rowIdx) || checkHori(colIdx, rowIdx)
            || checkDiag(colIdx, rowIdx, 1) || checkDiag(colIdx, rowIdx, -1);
        if (winner) return winner;
    }
    return null;
}

function checkDiag(colIdx, rowIdx, dir) {
    // Boundary check
    if (dir > 0 && colIdx > 3 || dir > 0 && rowIdx > 2) return null;
    if (dir < 0 && colIdx > 3 || dir < 0 && rowIdx < 3) return null;
    if (Math.abs(board[colIdx][rowIdx] + board[colIdx + 1][rowIdx + dir]
        + board[colIdx + 2][rowIdx + dir * 2] + board[colIdx + 3][rowIdx + dir * 3]) === 4) {
        return board[colIdx][rowIdx];
    } else {
        return null;
    }
}

function checkHori(colIdx, rowIdx) {
    // Boundary check
    if (colIdx > 3) return null;
    //add the value of all spaces to the right of colIdx and look for +4 or -4
    //then return the value of +4 using Math.abs to get a winner
    if (Math.abs(board[colIdx][rowIdx] + board[colIdx + 1][rowIdx]
        + board[colIdx + 2][rowIdx] + board[colIdx + 3][rowIdx]) === 4) {
        return board[colIdx][rowIdx];
    } else {
        return null;
    }
}

function checkVer(colArr, rowIdx) {
    // Boundary check
    if (rowIdx > 2) return null;
    //add the value of all spaces above row indx and look for +4 or -4
    //then return the value of +4 using Math.abs to get a winner
    if (Math.abs(colArr[rowIdx] + colArr[rowIdx + 1] + colArr[rowIdx + 2] + colArr[rowIdx + 3]) === 4) {
        return colArr[rowIdx];
    } else {
        return null;
    }
}

function handleRstBtnText() {
    if (winner) {
        rstBtn.innerText = "Reset Game";
    } else {
        rstBtn.innerText = "Surrender!";
    }
}