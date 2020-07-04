const addMovieBtn = document.getElementById('add-movie-btn');
const searchMovieBtn = document.getElementById('search-btn');


const movies = [];


const renderMovies = (filter) => {
    const movieList = document.getElementById('movie-list');

    if (movies.length === 0) {
        movieList.classList.remove('visible');
        return;
    } else {
        movieList.classList.add('visible');
    }
    movieList.innerHTML = '';

    const filterMovies = filter
        ? movies.filter(movie => movie.info.title.toLowerCase().includes(filter.toLowerCase()))
        : movies;

    filterMovies.forEach(movie => {
        const movieElement = document.createElement('li');
        const { info } = movie;
        const { title } = info;

        // let text = title + ' - ';
        // for (const key in info) {
        //     if (key == 'title') {
        //         continue;
        //     }
        //     text += `${key}: ${info[key]}`;
        // }
        
        movieElement.textContent = movie.getInfo();
        movieList.append(movieElement);
    });
};


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
        getInfo: function() {
            return `${this.info.title} - ${extraName}:${this[extraName]}`
        },
        id: new Date()
    };

    movies.push(newMovie);
    renderMovies();
};

const searchHandler = () => {
    const filterText = document.getElementById('filter-title').value;
    renderMovies(filterText);
};

addMovieBtn.addEventListener('click', addMovieHandler);
searchMovieBtn.addEventListener('click', searchHandler);

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