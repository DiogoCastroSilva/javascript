

const buttonClickHandler = (event) => {
    event.target.disabled = true;
    console.log('Button clicked...', event);
    // Removing event listener
    // button.removeEventListener('click', buttonClickHandler);
};


// Not the best approach
// const button = document.querySelector('button');
// button.onclick = buttonClickHandler;

// Best approach
// const button = document.querySelector('button');
// button.addEventListener('click', buttonClickHandler);

// Understanding events
const buttons = document.querySelectorAll('button');
buttons.forEach(btn => btn.addEventListener('click', buttonClickHandler));
