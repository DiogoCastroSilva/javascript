// 01
const numbers = [1, 2, 3, 4, 5, 6, 12, 23, 56, 88, -5, -12, -34];

const numberGreaterThan5 = numbers.filter(num => num > 5);
const numberObjects = numbers.map(num => ({ num: num }));
const numberMultlyplied = numbers.reduce((prevNum, num) => prevNum * num, 1);

// 02
// findMax0(1, 2, 5, 7) // 7
const findMax0 = (...numbers) => Math.max(...numbers);
// findMax([1, 2, 4, 6, 7]) // 7
const findMAx = numbers => Math.max(...numbers);

// 03
const findMAxAndMin = numbers => [Math.max(...numbers), Math.min(...numbers)];
const [max, min] = findMAxAndMin(numbers);

// 04
const list = new Set();
list.add(2);
list.add(3);
list.add(2);