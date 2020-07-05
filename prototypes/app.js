// class Person {
//     name = 'Max';
//     constructor() {
//         this.age = 30;
//     }

//     great() {
//         console.log('Hi!');
//     }
// }

function Person() {
    this.name = 'Max';
    this.age = 30;
}

Person.prototype.great = function() {
    console.log('Hi!');
}

const max = new Person();