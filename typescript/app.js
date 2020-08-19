var num1 = document.getElementById('num1');
var num2 = document.getElementById('num2');
var buttonElement = document.querySelector('button');
function add(a, b) {
    return a + b;
}
buttonElement.addEventListener('click', function () {
    var num1Value = +num1.value;
    var num2Value = +num2.value;
    var result = add(num1Value, num2Value);
    console.log(result);
});
