const randomNumber = Math.random(); // produces random number between 0 (including) and 1 (excluding)

// 01
if (randomNumber > 0.7) {
    alert('Number is greater than 0.7');
}

// 02
const numbers = [1, 2, 3, 4];

for(const item of numbers) {
    console.log(item);
}

// 03
for (let i = numbers.length - 1; i >= 0; i--) {
    console.log(numbers[i]);
}

// 04
const newRandomNumber = Math.random(); // produces random number between 0 (including) and 1 (excluding)

if ((randomNumber > 0.7 && newRandomNumber > 0.7) || (randomNumber <= 0.2 || newRandomNumber <= 0.2)) {
    alert('Random numbers are bigger than 0.7 or are smaller than 0.2 ' + randomNumber + ' - ' + newRandomNumber);
}