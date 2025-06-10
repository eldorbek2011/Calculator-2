// Elementlarni olish
const input = document.querySelector("input");
const numButtons = document.querySelectorAll(".num");
const signButtons = document.querySelectorAll(".sign");
const dotButton = document.querySelector(".dot");
const equalButton = document.querySelector(".equal");
const clearButton = document.querySelector(".remove-element.c");
const removeButton = document.querySelector(".remove-element.r");

let expression = "";

// Raqamlarni bosganda
numButtons.forEach(btn => {
	btn.addEventListener("click", () => {
		expression += btn.textContent;
		updateInput();
	});
});

// Amal (+ - * /) bosganda
signButtons.forEach(btn => {
	btn.addEventListener("click", () => {
		const sign = btn.dataset.sign;
		if (expression !== "" && !/[+\-*/]$/.test(expression)) {
			expression += sign;
			updateInput();
		}
	});
});

// Nuqta bosganda
dotButton.addEventListener("click", () => {
	const parts = expression.split(/[+\-*/]/);
	const lastPart = parts[parts.length - 1];
	if (!lastPart.includes(".")) {
		expression += ".";
		updateInput();
	}
});

// "=" bosilganda
equalButton.addEventListener("click", () => {
	try {
		expression = eval(expression).toString();
		updateInput();
	} catch {
		expression = "Error";
		updateInput();
		expression = "";
	}
});

// "C" — Clear
clearButton.addEventListener("click", () => {
	expression = "";
	updateInput();
});

// "R" — Remove oxirgi belgi
removeButton.addEventListener("click", () => {
	expression = expression.slice(0, -1);
	updateInput();
});

// Input oynasini yangilovchi funksiya
function updateInput() {
	input.value = expression;
}
