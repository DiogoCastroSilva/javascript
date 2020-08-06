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
