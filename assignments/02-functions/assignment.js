const task3Element = document.getElementById('task-3');

// 01
function displayFixedName() {
    alert('Fixed name');
}

function displayName(name) {
    alert(name);
}

// 02
displayFixedName();
displayName('Name');

// 03
task3Element.addEventListener('click', displayFixedName);

// 04
function concatenateThreeStrings(string1, string2, string3) {
    return `${string1} ${string2} ${string3}`;
}

alert(concatenateThreeStrings('Ola', 'function', 'assignment'));