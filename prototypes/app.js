// class Person {
//     name = 'Max';
//     constructor() {
//         this.age = 30;
//     }

//     great() {
//         console.log('Hi!');
//     }
// }

// function Person() {
//     this.name = 'Max';
//     this.age = 30;
// }

// Person.prototype.great = function() {
//     console.log('Hi!');
// }

// const max = new Person();

const course = {
    title: 'Javascript - The complete guide',
    rating: 5
};

Object.getPrototypeOf(course);
Object.setPrototypeOf(course, {
    printRating: function() {
        console.log(`${this.rating}/5`);
    }
});

const student = Object.create({
    printProgress: function() {
        console.log(this.progress);
    }
}, {
    name: {
        configurable: true,
        enumerable: true,
        value: 'Max',
        writable: true
    }
});

Object.defineProperty(student, 'progress', {
    configurable: true,
    enumerable: true,
    value: 0.8,
    writable: false
});