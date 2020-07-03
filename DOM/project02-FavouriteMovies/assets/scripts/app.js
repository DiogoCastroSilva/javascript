const addMovieModal = document.getElementById('add-modal');
const cancelModalBtn = addMovieModal.querySelector('.btn--passive');
const comfirmAddMovieBtn = cancelModalBtn.nextElementSibling;
const startAddMovieBtn = document.querySelector('header button');
const backdrop = document.getElementById('backdrop');
const userInputs = addMovieModal.querySelectorAll('input');


const movies = [];

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
};


startAddMovieBtn.addEventListener('click', toogleMovieModal);
backdrop.addEventListener('click', backdropHandler);
cancelModalBtn.addEventListener('click', cancelModalHandler);
comfirmAddMovieBtn.addEventListener('click', addMovieHandler);