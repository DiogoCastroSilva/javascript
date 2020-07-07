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