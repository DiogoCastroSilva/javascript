const addMovieModal = document.getElementById('add-modal');
const cancelModalBtn = addMovieModal.querySelector('.btn--passive');
const comfirmAddMovieBtn = cancelModalBtn.nextElementSibling;
const startAddMovieBtn = document.querySelector('header button');
const backdrop = document.getElementById('backdrop');
const userInputs = addMovieModal.querySelectorAll('input');
const entryTextSection = document.getElementById('entry-text');

const movies = [];

const updateEntryTextSection = () => {
    if (movies.length === 0) {
        entryTextSection.style.display = 'block';
    } else {
        entryTextSection.style.display = 'none';
    }
};

const renderNewMovie = (title, imageUrl, rating) => {
    const newMovieElement = document.createElement('li');
    newMovieElement.className = 'movie-element';
    newMovieElement.innerHTML = `
        <div class="movie-element__image">
            <img src="${imageUrl}" alt="${title}" />
        </div>
        <div class="movie-element__info">
            <h2>${title}</h2>
            <p>${rating}/5 stars</p>
        </div>
    `;

    const movieList = document.getElementById('movie-list');
    movieList.append(newMovieElement);
};

const toogleBackdrop = () => {
    backdrop.classList.toggle('visible');
};

const toogleMovieModal = () => {
    addMovieModal.classList.toggle('visible');
    toogleBackdrop();
};

const clearMovieInput = () => {
    for (const input of userInputs) {
        input.value = '';
    }
};



const backdropHandler = () => {
    toogleMovieModal();
};

const cancelModalHandler = () => {
    toogleMovieModal();
    clearMovieInput();
};

const addMovieHandler = () => {
    const titleValue = userInputs[0].value;
    const imageUrlValue = userInputs[1].value;
    const ratingValue = userInputs[2].value;

    if (
        titleValue.trim() === '' &&
        imageUrlValue.trim() === '' &&
        +ratingValue < 1 ||
        +ratingValue > 5
    ) {
        alert('Please enter a valid value!');
        return;
    }

    const newMovie = {
        title: titleValue,
        image: imageUrlValue,
        rating: ratingValue
    };

    movies.push(newMovie);
    toogleMovieModal();
    clearMovieInput();
    renderNewMovie(newMovie.title, newMovie.image, newMovie.rating);
    updateEntryTextSection();
};


startAddMovieBtn.addEventListener('click', toogleMovieModal);
backdrop.addEventListener('click', backdropHandler);
cancelModalBtn.addEventListener('click', cancelModalHandler);
comfirmAddMovieBtn.addEventListener('click', addMovieHandler);