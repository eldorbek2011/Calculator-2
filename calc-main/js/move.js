const numbers = document.querySelector('.num');
const signs = document.querySelectorAll('.sign');
const dot = document.querySelectorAll('.dot');
const display = document.querySelector('.input');
const equal = document.querySelectorAll('.equal');
const cleatButton = document.querySelectorAll('.c');
const removeButton = document.querySelectorAll('.r');

class Calculator {
    isDot = false;
    display;

    constructor(displayElement) {
        this.display = displayElement;
    }

    setDisplay(value) {
        this.display.value = this.display.value + value;
    }

    numbers(event) {
        const num = event.target.textContent.trim();
        this.setDisplay(num);
    }

    signs() {}
    dot() {}
    calculate() {}
    clear() {}
    remove() {}
}

let calculator = new Calculator(display);

for (let number of numbers) {
    number.onclick = (event) => calculator.numbers(event);
}
