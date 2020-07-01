const defaultResult = 0;
let currentResult = defaultResult;


const calculationDescription = `(${defaultResult} + 10) * 3`;

function add() {
    currentResult = currentResult + userInput.value;
    outputResult(currentResult, calculationDescription);
}


currentResult = add(currentResult, 10) * 3;


addBtn.addEventListener('click', add);