

const buttonClickHandler = () => {
    console.log('Button clicked...');

    // Removing event listener
    button.removeEventListener('click', buttonClickHandler);
};


// Not the best approach
// const button = document.querySelector('button');
// button.onclick = buttonClickHandler;

// Best approach
const button = document.querySelector('button');
button.addEventListener('click', buttonClickHandler);
