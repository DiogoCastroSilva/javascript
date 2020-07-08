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

// Async/Await uses Promises behind the scenes
async function trackUserHandler() {
  console.log('Getting position...');
  let positionData;
  let data;
  try {
    // Async operation
    positionData = await getPosition()
    data = await setTimer(2000);
  } catch(error) {
    console.log(error);
  } finally {
    console.log(data, positionData);
  }
  
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