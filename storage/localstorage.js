// Session Storage
// Get clear after the user closes the browser tab
// Local Storage
// Lives as long is never deleted/cleared


const storeBtn = document.getElementById('store-btn');
const retriveBtn = document.getElementById('retrieve-btn');

const userID = 'u123';
const user = {
    name: 'Diogo',
    age: 28,
    hobbies: ['bike', 'run']
};


storeBtn.addEventListener('click', () => {
    // Only works with strings
    sessionStorage.setItem('uid',userID);

    // error
    // localStorage.setItem('user', user);
    // Needs to be converted first
    localStorage.setItem('user', JSON.stringify(user));
});

retriveBtn.addEventListener('click', () => {
    const uid = sessionStorage.getItem('uid');
    if (uid) {
        console.log(`Got the id: ${uid}`);
    } else {
        console.log('Could not find user id!');
    }

    const userStored = localStorage.getItem('user');
    if (userStored) {
        const userObj = JSON.parse(userStored);
        console.log('Got user object', userObj);
    }
});