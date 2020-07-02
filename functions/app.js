const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFAULT_CHOICE = ROCK;
const RESULT_DRAW = 'DRAW';
const RESULT_PLAYER_WINS = 'PLAYER_WINS';
const RESULT_COMPUTER_WINS = 'COMPUTER_WINS';

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
const startGameHandler = () => {
    if (gameIsRunning) {
        return;
    }
    gameIsRunning = true;
    console.log('Game is starting...');
    const playerSelection = getPlayerChoice();
    const computerSelection = getComputerChoice();
    const winner = getWinner(computerSelection, playerSelection);
    let message = `You picked ${playerSelection} and the computer picked ${computerSelection}, therefore you `;
    if (winner === RESULT_DRAW) {
        message += 'had a Draw.';
    } else if (winner === RESULT_PLAYER_WINS) {
        message += 'win.';
    } else {
        message += 'lost.';
    }

    alert(message);
    gameIsRunning = false;
};

const getPlayerChoice = () => {
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

const getComputerChoice = () => {
    const randomValue = Math.random();
    if (randomValue < 0.34) {
        return ROCK;
    } else if (randomValue < 0.67) {
        return PAPER;
    } else {
        return SCISSORS;
    }
};

const getWinner = (computerChoice, userChoice) => {
    if (computerChoice === userChoice) {
        return RESULT_DRAW;
    } else if (
        computerChoice === ROCK && userChoice === PAPER ||
        computerChoice === SCISSORS && userChoice === ROCK ||
        computerChoice === PAPER && userChoice === SCISSORS
    ) {
        return RESULT_PLAYER_WINS;
    } else {
        return RESULT_COMPUTER_WINS;
    }
};

startGameBtn.addEventListener('click', startGameHandler);