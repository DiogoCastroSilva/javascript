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
    this.great = function() {
        console.log('Hi');
    }
}

const max = new Person();