const addMovieBtn = document.getElementById('add-movie-btn');
const searchMovieBtn = document.getElementById('search-btn');


const movies = [];


const addMovieHandler = () => {
    const title = document.getElementById('title').value;
    const extraName = document.getElementById('extra-name').value;
    const extraValue = document.getElementById('extra-value').value;

    if (
        title.trim() === '' ||
        extraName.trim() === '' ||
        extraValue.trim() === ''
    ) {
        return;
    }

    const newMovie = {
        info: {
            title: title,
            [extraName]: extraValue
        },
        id: new Date()
    };

    movies.push(newMovie);
};

addMovieBtn.addEventListener('click', addMovieHandler);
searchMovieBtn.addEventListener('click', () => {});

// Recap
// const person = {
//     name: 'Max',
//     age: 30,
//     hobbies: ['write', 'sports'],
//     great: () => {
//         console.log('Hi');
//     }
// };

// // Acess properties
// person.great() // 'Hi'

// // Adding properties
// person.isAdmin = true;
// // Changing propeties
// person.age = 31;
// person['age'] = 32;
// // Deleting
// delete person.age;