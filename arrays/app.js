// Creating arrays
const numbers = [1, 2, 3];
// or
const chars = new Array('a', 'b', 'c');
// or
const hobbies = Array('sports', 'music');

// But this creates an array with fixed -> length of 5
const fixedLenghtArray = new Array(5);


// Adding items
numbers.push(4);
//  Add elemnt to the begining
numbers.unshift(1);

// Removing
//      Last element
chars.pop();
//     First element
chars.shift();

// Changing values
chars[0] = 0;


// Splice -> (start, removing, adding)
// Adding
//  Adding element to the begining
hobbies.splice(0, 0, 'good food');
//  Adding element to the end
hobbies.splice(hobbies.length, 0, 'programming');
// Removing
//  First element
hobbies.splice(0, 1);
//  Last element
hobbies.splice(hobbies.length - 1, 1);
// or
hobbies.splice(-1, 1);
//  All items
hobbies.splice(0);


// Slice
const testResults = [1, 5.3, 1.5, 10.99, -5, 10];
// Copy testResults to a new array -> This way if changing values will only change one array
const testResultsCopy = testResults.slice();
// Selecting with indexs (start(inclusive), end(exclusive))
const newTestResultArr = testResults.slice(0, 2); // [1, 5.3]

// Concat -> Combining arrays
const newChar = ['a', 'b', 'c'];
const newNumbers = [1, 2, 3];
const newCombinedArray = newChar.concat(newNumbers); // ['a', 'b', 'c', 1, 2, 3]


// IndexOf & LastIndexOf
// Returns the first value that has the value
const indexOfC = newChar.indexOf('c');
const indexOfA = newChar.lastIndexOf('a');
// If not found returns -1;
// Doens't work with objects
const persons = [{ name: 'Max' }, { name: 'Joana' }];
const indexOfMax = persons.indexOf({ name: 'Max' }); // -1 -> Doesnt work with objects


// Find & FindIndex
//  Returns the value when condition is true
const max = persons.find(person => person.name === 'Max');
//  Returns the index when the condition is true
const joanaIndex = persons.findIndex(person => person.name === 'Joana');
const joana = persons[joanaIndex];
// This returns a reference, so altering it will alter the array
joana.name = 'Manuel';
persons.find(person => person.name === 'Manuel'); // will return Manuel since we changed the reference


// Includes -> Returns true or false if has value, doesn't work with objects
newChar.includes('a'); // true


// ForEach -> Lopping throw an array
const prices = [10.99, 5.00, 3.99, 6.59];
const tax = 0.19;
const taxesAdjustedPrices = [];

prices.forEach((price, index) => {
    taxesAdjustedPrices.push({
        index: index,
        price: price * (1 + tax)
    });
});


// map
// Doing the same of the forEach but with map
const taxesAdjustedPrices0 = prices.map(
    (price, index) => ({
        index: index,
        price: price
    })
);


// Sorting & Reversing -> by default converts to string and sorts with the first value so to sort curectly
const sortedPrices = prices.sort(
    (a, b) => a > b ? 1 : a === b ? 0 : -1
);
// Reverses the order
const reversedPrices = sortedPrices.reverse();


// Filter
const pricesBiggerThan6 = prices.filter(price => price > 6);


// Reduce
const sumPrices = prices.reduce((prevPrice, price) => {
    return prevPrice + price
}, 0);
// simplifying
const priceSum = prices.reduce((prevPrice, price) => prevPrice + price, 0);


// Split & Join
const data = 'new york;10.99;2000';
const cleaningData = data.split(';'); // ['new york', '10.99', '2000']

const words = ['Hi,', 'nice', 'to', 'meet', 'you!'];
const phrase = words.join(' '); // Hi, nice to meet you!


// Spredd operator (...)
const copyWords = [...words]; // changing the value won't interfere with the words array
Math.min(numbers); // NaN
Math.min(...numbers); // 1


// Array destructing
const personData = ['Max', 'Silva', 'Mr', 30];
const [firstName, lastName, ...otherInfo] = personData; // firstName = 'Max', lastName = 'Silva', otherInfo = ['Mr']
