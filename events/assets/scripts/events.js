

const buttonClickHandler = (event) => {
    console.log('Button clicked...', event);

    // Removing event listener
    // button.removeEventListener('click', buttonClickHandler);
};


// Not the best approach
// const button = document.querySelector('button');
// button.onclick = buttonClickHandler;

// Best approach
const button = document.querySelector('button');
button.addEventListener('click', buttonClickHandler);
