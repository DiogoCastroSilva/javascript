const addMovieModal = document.getElementById('add-modal');
const startAddMovieBtn = document.querySelector('header button');




startAddMovieBtn.addEventListener('click', () => {
    addMovieModal.classList.toggle('visible');
});