function sayHello(name) {
  console.log('Hi ' + name);
}

sayHello('Max');

// 01
const sayHello1 = (name) => {
  console.log('Hi ' + name);
}

sayHello1('Max');

// 02
const sayHello2 = (name, phrase) => {
  console.log(phrase + ' ' + name);
}

const sayHello3 = () => {
  console.log('Hi hard coded!');
}

const sayHello4 = (name) => `Hi ${name}`;


sayHello2('Max', 'Hi');
sayHello3();
console.log(sayHello4('Max'));

// 03
const sayHello5 = (name, phrase = 'Hi') => `${phrase} ${name}`;

console.log(sayHello5('Max'));
console.log(sayHello5('Max', 'Hello'));

// 04
const checkInput = (cb, ...strings) => {
  let hasEmptyText = false;
  for (const text of strings) {
    if (!text) {
      hasEmptyText = true;
      break;
    }
  }

  if (!hasEmptyText) {
    cb();
  }

};

checkInput(
  () => {
    console.log('All not empty');
  },
  'Hello',
  '12',
  'asd',
  'Not empty'
);