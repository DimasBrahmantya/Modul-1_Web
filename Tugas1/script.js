let screen = document.getElementById("screen");
let currentInput = "0";
let previousInput = "";
let operator = "";
let shouldResetScreen = false;

const updateScreen = () => {
    screen.innerText = currentInput;
};

const clearScreen = () => {
    currentInput = "0";
    previousInput = "";
    operator = "";
    updateScreen();
};

const appendNumber = (number) => {
    if (currentInput === "0" || shouldResetScreen) {
        currentInput = number;
        shouldResetScreen = false;
    } else {
        currentInput += number;
    }
    updateScreen();
};

const chooseOperator = (op) => {
    if (operator !== "") {
        calculate();
    }
    previousInput = currentInput;
    operator = op;
    shouldResetScreen = true;
};

const calculate = () => {
    let result;
    let prev = parseFloat(previousInput);
    let current = parseFloat(currentInput);

    if (isNaN(prev) || isNaN(current)) return;

    switch (operator) {
        case "+":
            result = prev + current;
            break;
        case "−":
            result = prev - current;
            break;
        case "×":
            result = prev * current;
            break;
        case "÷":
            result = prev / current;
            break;
        case "%":
            result = prev % current;
            break;
        case "^":
            result = Math.pow(prev, current);
            break;
        default:
            return;
    }

    currentInput = result.toString();
    operator = "";
    updateScreen();
};

const handleEquals = () => {
    calculate();
    shouldResetScreen = true;
};

// Event listeners
document.querySelectorAll(".number").forEach(button => {
    button.addEventListener("click", () => appendNumber(button.innerText));
});

document.querySelectorAll(".operator").forEach(button => {
    button.addEventListener("click", () => chooseOperator(button.innerText));
});

document.getElementById("equals").addEventListener("click", handleEquals);
document.getElementById("clear").addEventListener("click", clearScreen);
document.getElementById("modulus").addEventListener("click", () => chooseOperator("%"));
document.getElementById("exponent").addEventListener("click", () => chooseOperator("^"));

// Initialize screen with default value
clearScreen();
