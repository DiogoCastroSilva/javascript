const defaultResult = 0;
let currentResult = defaultResult;

function add(num1, num2) {
    const result = num1 + num2;
    return result;
}


currentResult = add(currentResult, 10) * 3;

const calculationDescription = `(${defaultResult} + 10) * 3`;


outputResult(currentResult, calculationDescription);