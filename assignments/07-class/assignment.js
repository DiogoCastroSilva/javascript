// 01
class Course {
    #price = 0;
    // 04
    set price(value) {
        if (value && value > 0) {
            this.#price = value;
        }
    }
    get price() {
        return this.#price + '$';
    }

    constructor(title, length, price) {
        this.title = title;
        this.length = length;
        this.price = price;
    }

    // 02
    ammountPerLength() {
        return this.length / this.#price;
    }

    summary() {
        return `
        ${this.title}

        This Course focus on ${this.title}, is prepared for professionals.
        Will take ${this.length}, but in the end will be worth it.
        Available for just ${this.#price}
        `;
    }
}

console.log(new Course('Javascript', 200, 19,98));
console.log(new Course('CSS', 200, 12,98));

const javascript = new Course('Javascript', 200, 19,98);
console.log(javascript.ammountPerLength());
console.log(javascript.summary());


// 03
class PraticalCourse extends Course {
    constructor(title, length, price, numOfExercises) {
        super(title, length, price);
        this.numOfExercises = numOfExercises
    }
}

class TheoreticalCourse extends Course {

    publish() {
        console.log('Published');
    }
}

const praticalMath = new PraticalCourse('Math', 200, 19,98, 300);
console.log(praticalMath);

const theoricMath = new TheoreticalCourse('Math', 200, 19,98);
theoricMath.publish();
