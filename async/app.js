const button = document.querySelector('button');
const output = document.querySelector('p');

function trackUserHandler() {
  // Async operation
  navigator.geolocation.getCurrentPosition(
    data => {
      console.log(data);
    },
    error => {
      console.log(error);
    }
  );

  // Will run first
  console.log('Getting position...');
}

button.addEventListener('click', trackUserHandler);

// let result = 0;
// for (let i = 0; i < 1000000000; i++) {
//   result += 1;
// }
// console.log(result);
// button.click(); // runs after the console.log so takes some time, Javascript is single thread

