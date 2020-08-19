const num1: HTMLInputElement = <HTMLInputElement>document.getElementById('num1');
const num2: HTMLInputElement = <HTMLInputElement>document.getElementById('num2');
const buttonElement: HTMLButtonElement = document.querySelector('button');


type PrintMode = 'console' | 'alert';
// or better
enum OutputMode {
    CONSOLE,
    ALERT
};

function add(a: number, b: number): number {
    return a +b;
}

function print(result: string | number, mode: PrintMode = 'console') {
    if (mode === 'console') {
        console.log(result);
    } else {
        alert(result);
    }
}


buttonElement.addEventListener('click', () => {
    const num1Value = +num1.value;
    const num2Value = +num2.value;

    const result = add(num1Value, num2Value);
    
    print(result);
});