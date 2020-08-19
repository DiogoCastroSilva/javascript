const num1: HTMLInputElement = <HTMLInputElement>document.getElementById('num1');
const num2: HTMLInputElement = <HTMLInputElement>document.getElementById('num2');
const buttonElement: HTMLButtonElement = document.querySelector('button');


function add(a: number, b: number): number {
    return a +b;
}


buttonElement.addEventListener('click', () => {
    const num1Value = +num1.value;
    const num2Value = +num2.value;

    const result = add(num1Value, num2Value);
    console.log(result);
});