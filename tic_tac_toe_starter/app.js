/**********************************************
 * File: app.js
 * Description: A simple Tic-Tac-Toe game
 * Author: [Elen Francesca]
 **********************************************/
// Select the status display element from the DOM.
// We'll use this to display messages to the user.
const statusDisplay = document.querySelector(".game--status");

// Set initial game state values
let gameActive = true;// This keeps track of whether the game is active or has ended
let counter = 0;
let currentPlayer = "X";// This tracks whose turn it currently is
let gameState = ["", "", "", "", "", "", "", "", ""];// Represents the 9 cells in the game board

// Define the possible winning conditions for Tic-Tac-Toe
// Each array within this array represents a set of indices in 'gameState'
// that forms a winning line
const winningConditions = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6] ];

// A function to return the current player's turn message
const currentPlayerTurn = () => `It's ${currentPlayer}'s turn`;

/**
 * handleCellPlayed
 * ----------------
 * Updates the gameState array and the clicked cell with the current player's symbol.
 * @param {HTMLElement} clickedCell - The cell that was clicked in the UI.
 * @param {number} clickedCellIndex - The index of the clicked cell in the gameState.
 */
// Update the game state to reflect the move
// Display the current player's symbol in the clicked cell

const cells = document.getElementsByClassName('cell');
const restartBtn = document.querySelector('.game--restart');
restartBtn.addEventListener('click',handleRestartGame);

// Display the initial status message in the DOM
statusDisplay.innerHTML = currentPlayerTurn();

for(let cell of cells){



    console.log('\n We are  in checking in which cell we are\n')

    cell.addEventListener("click", function(event){
        if(gameActive === false){
            return
        }

        let clickedCellIndex = event.target.getAttribute('data-cell-index');

        console.log('event.target:',event.target, '\nclicked Cell Index:',clickedCellIndex, `call handleCellPlayed` );

        handleCellPlayed(event.target, clickedCellIndex);

        console.log('Called handleCellPlayed from cell listener was successfulll finished  ');

    })
}


/**
 * handlePlayerChange
 * ------------------
 * Switches the active player from X to O or O to X.
 * Also updates the UI text to notify whose turn it is.
 */
function handleCellPlayed(clickedCell, clickedCellIndex){
    console.log('\nIn handleCellPlayed\n');

    if (gameState[clickedCellIndex]===""){

        console.log('In handle Cell Played in first If')

        gameState[clickedCellIndex] = currentPlayer;
        counter+=1;

        clickedCell.innerHTML = currentPlayer;

        console.log('currentPlayer:', currentPlayer, '\ncall handle Result Validation()');

        handleResultValidation();

    }else{
        console.log('We are in occupied cell')

        statusDisplay.innerHTML ='This cell is occupied, try another one';

        setTimeout(() => {
            statusDisplay.innerHTML = currentPlayerTurn()
        },2000);
    }
}

/**
 * handleResultValidation
 * ----------------------
 * Checks if the current move caused a win or a draw.
 * If a win, display a win message and end the game.
 * If a draw, display a draw message and end the game.
 * Otherwise, switch players.
 */
function handleResultValidation(){
    // Iterate through each winning condition

    // Destructure the three cell indices that form a potential win

    // If any cell is empty, skip this iteration

    // Check if these three positions match, indicating a win

    // If the round is won, display the winner and end the game

    // If there are no empty cells in 'gameState', it's a draw

    // If the game is neither won nor drawn, switch to the next player

    console.log('\nIn handleResultValidation\n');

    for(let i = winningConditions.length-1; i>=0; i--){
        let a = winningConditions[i][0];
        let b = winningConditions[i][1];
        let c = winningConditions[i][2];

        console.log('\na:', a, '\nb:', b, '\nc:', c);

        if(gameState[a]!=='' && gameState[b]!=='' &&gameState[c]!=='' && gameState[a] === gameState[b] && gameState[a] === gameState[c]){
            console.log(currentPlayer +' win');
            statusDisplay.innerHTML = currentPlayer + ' WIN!';
            gameActive = false;
        }else if(counter===9) {
            console.log('It is a draw');
            statusDisplay.innerHTML = 'Draw!'
            gameActive = false;
        }
    }
    if (gameActive) {
        handlePlayerChange();
    }else{
        setTimeout(() => {
            handleRestartGame();
        },2000);
    }
}

function handlePlayerChange (){
    console.log('\nin handlePlayerChange\n');
    if(currentPlayer === "X"){
        currentPlayer = "0"
        console.log('currentPlayer:',currentPlayer);
    }else{
        currentPlayer = "X";
        console.log('currentPlayer:',currentPlayer);
    }
    statusDisplay.innerHTML = currentPlayerTurn();
}

/**
 * handleRestartGame
 * -----------------
 * Resets the game to its initial state:
 *  - Clears the board
 *  - Resets the 'gameState' array
 *  - Reactivates the game
 *  - Sets the current player to X
 *  - Updates the status display
 */

function handleRestartGame() {
    gameActive = true;
    currentPlayer = "X";
    gameState = ["", "", "", "", "", "", "", "", ""];
    statusDisplay.innerHTML = currentPlayerTurn();
    counter = 0;

    for(let i = 0; i < cells.length; i++ ){
        cells[i].innerHTML = '';
    }

    // Clear each cell in the UI
}
// Add event listeners to each cell for a click event

// Add event listener to the restart button