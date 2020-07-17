const storeBtn = document.getElementById('store-btn');
const retriveBtn = document.getElementById('retrieve-btn');


// Cookie
const userID = 'u123';
const user = {
    name: 'Diogo',
    age: 28,
    hobbies: ['bike', 'run']
};

storeBtn.addEventListener('click', () => {
   document.cookie = `userId=${userID}; max-age=60`; // max-age will remove cookie after 1 minute/ 60 seconds
   document.cookie = `user=${JSON.stringify(user)}`;
});

retriveBtn.addEventListener('click', () => {
   console.log(document.cookie);
   const cookieData = document.cookie.split(';');
   const data = cookieData.map(i => i.trim());
   console.log(data[1].split('=')[1]); // user value
});