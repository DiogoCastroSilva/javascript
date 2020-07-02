const ADD = 'ADD';
const SUBTRACT = 'SUBTRACT';
const DIVIDE = 'DIVIDE';
const MULTIPLY = 'MULTIPLY';

const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

// Gets input from input field
function getUserNumberInput() {
  return parseInt(userInput.value);
}

// Generates and writes calculation log
function createAndWriteOutput(
  operator,
  resultBeforeCalculation,
  calculationNumber
) {
  const calculationDescription = `${resultBeforeCalculation} ${operator} ${calculationNumber}`;
  outputResult(currentResult, calculationDescription); // from vendor file
}

function writeToLog(operation, prev, number, result) {
  const logEntry = {
    operation: operation,
    prevResult: prev,
    number: number,
    result: result,
  };
  logEntries.push(logEntry);
  console.log(logEntries);
}

function add(enteredNumber) {
  const initialResult = currentResult;
  currentResult += enteredNumber;
  createAndWriteOutput("+", initialResult, enteredNumber);
}

function subtract(enteredNumber) {
  const initialResult = currentResult;
  currentResult -= enteredNumber;
  createAndWriteOutput("-", initialResult, enteredNumber);
}

function multiply(enteredNumber) {
  const initialResult = currentResult;
  currentResult *= enteredNumber;
  createAndWriteOutput("*", initialResult, enteredNumber);
}

function divide(enteredNumber) {
  const initialResult = currentResult;
  currentResult /= enteredNumber;
  createAndWriteOutput("/", initialResult, enteredNumber);
}

function calculate(operation) {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  if (operation === ADD) {
    add(enteredNumber);
  } else if (operation === SUBTRACT) {
    subtract(enteredNumber);
  } else if (operation === MULTIPLY) {
    multiply(enteredNumber);
  } else if (operation === DIVIDE) {
    divide(enteredNumber);
  }
  writeToLog(operation, initialResult, enteredNumber, currentResult);
}

addBtn.addEventListener("click", calculate.bind(this, ADD));
subtractBtn.addEventListener("click", calculate.bind(this, SUBTRACT));
multiplyBtn.addEventListener("click", calculate.bind(this, MULTIPLY));
divideBtn.addEventListener("click", calculate.bind(this, DIVIDE));
