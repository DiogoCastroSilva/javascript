const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFAULT_CHOICE = ROCK;

let gameIsRunning = false;


const startGameBtn = document.getElementById('start-game-btn');


// function startGame() {
//     console.log('Game is starting...');
// }

// or
// const startGame = function start() {
//     console.log('Game is starting...'); 
// }
// or
// const startGame = function() {
//     console.log('Game is starting...'); 
// }
// or
const startGame = () => {
    if (gameIsRunning) {
        return;
    }
    gameIsRunning = true;
    console.log('Game is starting...');
    const playerSelection = getPlayerChoices();
    
}

const getPlayerChoices = () => {
    const selection = prompt(`${ROCK}, ${PAPER} or ${SCISSORS}?`, '').toUpperCase();
    console.log(selection);
    if (
        selection !== ROCK &&
        selection !== PAPER &&
        selection !== SCISSORS
    ) {
        alert('Invalid choice! We chosse Rock for you!');
        return DEFAULT_CHOICE;
    } else {
        return selection;
    }
};

startGameBtn.addEventListener('click', startGame);