

const buttonClickHandler = (event) => {
    event.target.disabled = true;
    console.log('Button clicked...', event);
    // Removing event listener
    // button.removeEventListener('click', buttonClickHandler);
};

const mouseEnterHandler = event => {
    console.log('mouse enter', event);
};

// Not the best approach
// const button = document.querySelector('button');
// button.onclick = buttonClickHandler;

// Best approach
// const button = document.querySelector('button');
// button.addEventListener('click', buttonClickHandler);

// Understanding events
// const buttons = document.querySelectorAll('button');
// buttons.forEach(btn => btn.addEventListener('click', buttonClickHandler));
// buttons[0].addEventListener('mouseenter', mouseEnterHandler);


// window.addEventListener('scroll', event => {
//     console.log(event);
// });

const form = document.querySelector('form');
form.addEventListener('submit', event => {
    console.log(event);
    event.preventDefault();
});


const div = document.querySelector('div').addEventListener('click', (e) => {
    console.log('div', e);
}/* , true */);

const btn = document.querySelectorAll('button')[0].addEventListener('click', (e) => {
    e.stopPropagation();
    console.log('btn', e);
});

// Bad performance
// const listItems = document.querySelectorAll('li');
// listItems.forEach(item => {
//     item.addEventListener('click', e => {
//         e.target.classList.toggle('highlight');
//     });
// });

// Better performance - Event delegation
const list = document.querySelector('ul').addEventListener('click', e => {
    e.target.classList.toggle('highlight');
});