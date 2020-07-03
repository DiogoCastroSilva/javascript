const addMovieModal = document.getElementById('add-modal');
const cancelModalBtn = addMovieModal.querySelector('.btn--passive');
const comfirmAddMovieBtn = cancelModalBtn.nextElementSibling;
const startAddMovieBtn = document.querySelector('header button');
const backdrop = document.getElementById('backdrop');
const userInputs = addMovieModal.querySelectorAll('input');
const entryTextSection = document.getElementById('entry-text');
const deleteMovieModal = document.getElementById('delete-modal');

const movies = [];

const updateEntryTextSection = () => {
    if (movies.length === 0) {
        entryTextSection.style.display = 'block';
    } else {
        entryTextSection.style.display = 'none';
    }
};

const renderNewMovie = (id, title, imageUrl, rating) => {
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

    newMovieElement.addEventListener('click', deleteMovieHandler.bind(null, id));
    const movieList = document.getElementById('movie-list');
    movieList.append(newMovieElement);
};

const toogleBackdrop = () => {
    backdrop.classList.toggle('visible');
};

const closeMovieModal = () => {
    addMovieModal.classList.remove('visible');
};

const showMovieModal = () => {
    addMovieModal.classList.add('visible');
    toogleBackdrop();
};

const clearMovieInput = () => {
    for (const input of userInputs) {
        input.value = '';
    }
};

const deleteMovie = id => {
    const movieIndex = movies.findIndex(movie => movie.id == id);
    movies.splice(movieIndex, 1);
    const movieList = document.getElementById('movie-list');
    // movieList.removeChild(movieList.children[movieIndex]);
    // or
    movieList.children[movieIndex].remove();

    cancelDeleteMovieModal();
};

const cancelDeleteMovieModal = () => {
    toogleBackdrop();
    deleteMovieModal.classList.remove('visible');
};



const backdropHandler = () => {
    closeMovieModal();
    cancelDeleteMovieModal();
    clearMovieInput();
};

const cancelModalHandler = () => {
    closeMovieModal();
    toogleBackdrop();
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
        id: new Date().getTime().toString(),
        title: titleValue,
        image: imageUrlValue,
        rating: ratingValue
    };

    movies.push(newMovie);
    closeMovieModal();
    toogleBackdrop();
    clearMovieInput();
    renderNewMovie(newMovie.id, newMovie.title, newMovie.image, newMovie.rating);
    updateEntryTextSection();
};

const deleteMovieHandler = id => {
    deleteMovieModal.classList.add('visible');
    toogleBackdrop();
    const cancelDeleteBtn = deleteMovieModal.querySelector('.btn--passive');
    let comfirmDeleteBtn = deleteMovieModal.querySelector('.btn--danger');

    comfirmDeleteBtn.replaceWith(comfirmDeleteBtn.cloneNode(true));
    comfirmDeleteBtn = deleteMovieModal.querySelector('.btn--danger');

    cancelDeleteBtn.removeEventListener('click', cancelDeleteMovieModal);
    cancelDeleteBtn.addEventListener('click', cancelDeleteMovieModal);
    comfirmDeleteBtn.addEventListener('click', deleteMovie.bind(null, id));
    // closeMovieModal();
    // deleteMovie(id);
}


startAddMovieBtn.addEventListener('click', showMovieModal);
backdrop.addEventListener('click', backdropHandler);
cancelModalBtn.addEventListener('click', cancelModalHandler);
comfirmAddMovieBtn.addEventListener('click', addMovieHandler);