// Library Land
const uid = Symbol('uid');

const person = {
    id: 'p1',
    [uid]: 'p1', // Not possible to change withou having access to the uid
    name: 'Diogo',
    age: 28
};

// App Land -> Using the library
person.id = 'p2'; // Should not be possible

person[Symbol('uid')] = 'p2'; // Will add a new property, will not override uid Symbol

Symbol('uid') === Symbol('uid') // false


// Iterators
const company = {
    currentEmployee: 0,
    employees: ['Diogo', 'Max', 'Anna'],
    next() {
        const returnValue = {
            value: this.employees[this.currentEmployee],
            done: false
        };
        if (this.currentEmployee >= this.employees.length) {
            returnValue.done = false;
            returnValue.value = this.currentEmployee;
        } else {
            this.currentEmployee++;
        }
        return returnValue
    },
    // Generator
    getEmployee: function* employeeGenerator() {
        let currentEmployee = 0;
        while(currentEmployee < this.employees.length) {
            // Pauses and returns value
            // When next is called will continue from last point
            yield this.employees[currentEmployee];
            currentEmployee++;
        }
    }
};

console.log(company.next());
console.log(company.next());
console.log(company.next());
console.log(company.next());
console.log(company.next());

// Custom Iterator using a generator
const iterator = company.getEmployee();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());


// or
company[Symbol.iterator] = function* employeeGenerator() {
    let currentEmployee = 0;
    while(currentEmployee < this.employees.length) {
        // Pauses and returns value
        // When next is called will continue from last point
        yield this.employees[currentEmployee];
        currentEmployee++;
    }
};

for (const employee of company) {
    console.log(employee);
}


// Reflect API
const course = {
    title: 'Javascript The Complete Guide'
};

// Lets change the object in meta - Can be used to change libraries
// Has better debuging than the Object API and has more methods like deleteProperty
Reflect.setPrototypeOf(course, { toString() { return this.title } });
console.log(course.toString());


// Proxy API
const courseHandler = {
    get(obj, propertyName) {
        console.log(propertyName);
        return obj[propertyName] || 'Not Found';
    },
    set(obj, propertyName, newValue) {
        obj[propertyName] = newValue;
    }
};

const pCourse = new Proxy(course, courseHandler);
console.log(pCourse.title);
pCourse.rating = 5;
console.log(pCourse.rating);