// Pure functions
function add(num1, num2) {
    return num1 + num2;
}

console.log(add(2, 3)); // 5
console.log(add(4, 5)); // 9

// Impure function
function addRandom(num1) {
    return num1 + Math.random();
}

console.log(addRandom(2)); // ??

let previousResult = 1;

function impureAdd(sum1, sum2) {
    const sum = sum1 + sum2; // pure
    previousResult = sum; // impure, side effect
    return sum;
}

const hobbies = ['Sports', 'Cooking'];

// Not pure, arrays is reference type
function printHobbies(h) {
    h.push('Singing');
    console.log(h);
}

printHobbies(hobbies);
console.log(hobbies); // ['Sports', 'Cooking', 'Singing'];


// Factory function
function createTaxCalculator(tax) {
    function calculateTax(ammount) {
        return ammount * tax;
    }

    return calculateTax;
}

// const vatAmmount = calculateTax(100, 0.19);
// const incomeTax = calculateTax(100, 0.25);

const calculateVATCalculator = createTaxCalculator(0.19);
const calculateIncomeTax = createTaxCalculator(0.25);

console.log(calculateVATCalculator(100));
console.log(calculateVATCalculator(200));

// Closures
let userName = 'Max';
function greetUser() {
    console.log(`Hi ${userName}`);
}
greetUser(); // Hi Max
userName = 'Manuel';
greetUser(); // Hi Manuel


function greetUser1() {
    let name = 'Manuel';
    console.log(`Hi ${name}`);
}
let name = 'Max';
greetUser(); // Hi Manuel