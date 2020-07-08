// Numbers
// Numbers are stored as float, so 1, 2 -> 1.0, 2.0

// Biggest int number
console.log(Number.MAX_SAFE_INTEGER);
// Smallest int number
console.log(Number.MIN_SAFE_INTEGER);

// Imprecision -> Binary system
console.log(0.2 + 0.4); // 0.600000001
console.log(0.2 + 0.4 === 0.6); // false

// Binary
// .toString(radix) 
console.log((5).toString(2)); // 101


// BigInt
let bigInt = 10000000000n;
// Not allow
// bigInt + 3; // Cannot mix BigInt and other types
// Needs convertion to work
console.log(bigInt + BigInt(3));


// Global number and Math
const infinit = Infinity;
// Same as
console.log(1/0); // Infinity

// Absolute
Math.abs(2);
// Random number
Math.random();


// Generate a random number between numbers
function randomIntBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
