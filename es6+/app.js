// let is block scope
let name = 'Max';

if (name === 'Max') {
    let hobbies = ['Sports', 'Cooking'];
    console.log(hobbies);
}

function greet() {
    let age = 30;
    let name = 'Manuel';
    console.log(name, age, hobbies);
}

console.log(name, hobbies);

greet();

// Before ES2019
try {

} catch(e) {

}

// No private classes fields

// ES2019
try {

} catch {

}

// has private classes fields
class IncreasingCounter {
    // private
    #count = 0;
    get value() {
        console.log("Getting the current value!");
        return this.#count;
    }
    increment() {
        this.#count++;
    }
}

// Nullish Coalescing Operator
const age = 0;
console.log(age ?? 18); // 0