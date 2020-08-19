const num1: HTMLInputElement = <HTMLInputElement>document.getElementById('num1');
const num2: HTMLInputElement = <HTMLInputElement>document.getElementById('num2');
const buttonElement: HTMLButtonElement = document.querySelector('button');

interface IUser {
    name: string;
}

class User implements IUser {
    public name: string;
    private age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

class Admin extends User {
    private permissions: string[];

    constructor(name, age, permissions: string[]) {
        super(name, age);
        this.permissions = permissions;
    }
}

type PrintMode = OutputMode.CONSOLE | OutputMode.ALERT;
// or better
enum OutputMode {
    CONSOLE,
    ALERT
};

function add(a: number, b: number): number {
    return a +b;
}

function print(result: string | number, mode: PrintMode = OutputMode.CONSOLE) {
    if (mode === OutputMode.CONSOLE) {
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

// Generics
function logAndEcho<T>(val: T) {
    console.log(val);
    return val;
}

logAndEcho<string>('Hi there').split(' ');