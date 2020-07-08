const button = document.querySelector('button');
const output = document.querySelector('p');


const getPosition = (opts) => {
  const promise = new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      positionData => {
        resolve(positionData);
      },
      error => {
        reject(error);
      },
      opts);
  });
  return promise;
};

function trackUserHandler() {
  // Async operation
  let positionData;
  getPosition()
    .then(positData => {
      positionData = positData;
      return setTimer(2000);
    })
    .catch(error => {
      console.log(error);
    })
    .then(data => {
      console.log(data, positionData);
    });
    // Will run second
    setTimer(1000).then(() => {
      console.log('Timer done!');
    });

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

// Promises
const setTimer = (duration) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Done!');
    }, duration);
  });
};