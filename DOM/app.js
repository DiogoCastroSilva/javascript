const h1 = document.getElementById('main-title');

// Get all items with class
const items = document.getElementsByClassName('list-item');
// Get one item with class
const item = document.querySelector('.list-item');
// Get all items with class -> Node list
const items2 = document.querySelectorAll('.list-item');


// Changing the DOM
setTimeout(() => {
    h1.textContent = 'New value';
    h1.style.color = 'red';
    h1.style.backgroundColor = 'black';
}, 2000);

// Attributes vs Properties
const input = document.querySelector('input');
// Changes value propety in DOM
input.setAttribute('value', 'New value');
// Changes only the Value of input, the DOM value attribute doesn't update
input.value = 'New value 1';


// Child nodes
const list = document.querySelector('ul');
// all items
const children = list.children;
// all items plus the sapces and tabs
const nodeChildren = list.childNodes;


// ParentNode
item.parentNode // -> <ul><li>Item 1</li><li>Item 2</li></ul>

// Sibilings
list.previousSibling // Selects the tab/space
list.previousElementSibling // Selects the previous sibling -> <header></header>
list.nextElementSibling // Selects the next sibling - > <input></input>

// Transversal instead of Query
// Harder to read and if changes occour in the DOM hard to fix
const ul = document.body.firstElementChild.nextElementSibling;
const firstLi = ul.firstElementChild;

// Adding new elements
// Deletes old content and adds new, also re-renders all the content inside
const section = document.querySelector('section');
section.innerHTML = '<p>New p element</p>';
// Adding without changing
section.insertAdjacentHTML('beforeend', '<p>New p Element</p>');

// Better way to add new elements
const li = document.createElement('li');
li.textContent = 'New item';
li.style.color = 'red';
li.style.backgroundColor = 'black';
// Adds new item to the end
list.appendChild(li);
// Adds new item to the begining
list.prepend(li);
// Adds to elemnt before the last
list.lastElementChild.before(li);

// Instead of moving the element we can clone
const newLi = li.cloneNode(true);
list.appendChild(li, newLi);

// Removes list from DOM
list.remove(); // Doesn't work in Internet Explorer
// or
list.parentElement.removeChild(list);