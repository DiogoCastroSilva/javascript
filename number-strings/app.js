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


// Strings
// "", '', ``
"".length // 0
"a".toUpperCase(); // 'A'
"A".toLowerCase(); // 'a'
"Hello".toLowerCase().startsWith('he'); // true

// Tagged Templates
function productDescription(string, name, price) {
    const category = price > 20 ? 'fair' : 'cheap';
    return `${string[0]}${name}${string[1]}${category}${string[2]}`;
}

const productName = 'Javascript Course';
const productPrice = 29.99;
const productOutput = productDescription`This product (${productName} is ${productPrice})`;

// Regex
const userInput = 'testest.com';
// const regex = new RegExp();
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
console.log(emailRegex.test(userInput)); // false
console.log(emailRegex.test('diogo@diogo.com')); // true

const hashello = /hello/;
console.log(hashello.test('Hi, hello, ...')); // true
const hasHhello = /(h|H)ello/; // Starts with hello ot Hello
console.log(hasHhello.test('has Hello, ...')); // true