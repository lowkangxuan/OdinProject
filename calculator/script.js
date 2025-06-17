const outputSlot = document.getElementById("output");
const additionBtn = document.getElementById("addition");
const subtractBtn = document.getElementById("subtract");
const multiplyBtn = document.getElementById("multiply");
const divisionBtn = document.getElementById("division");
const clearBtn = document.getElementById("clear");
const calculateBtn = document.getElementById("calculate");
const arithmeticID = ["addition", "subtract", "multiply", "division"];
let firstNum, secondNum = 0;
let selectedOperator = "";
let isInputtingFirstNum = true;
let canInput = true;

const numerals = document.querySelectorAll(".key.numeric");
numerals.forEach(numeral => {
    numeral.addEventListener("click", (e) => {
        appendToDisplay(e.target.value);
    });
});

const operators = document.querySelectorAll(".key.operator");
operators.forEach(operator => {
    operator.addEventListener("click", (e) => {
        if (arithmeticID.includes(e.target.id)) {
            console.log(e.target.id);
        }
        else if (e.target.id === "clear") {
            reset();
        }
        else if (e.target.id === "calculate") {
            calculate();
        }
    });
});

function appendToDisplay(value) {
    if (outputSlot.textContent.length >= 12) {
        console.log("Output has reached max length!!!");
        return;
    }
    outputSlot.textContent += value;
    console.log(outputSlot.textContent.length)
}

function calculate() {
    
}

function reset() {
    firstNum = secondNum = 0;
    outputSlot.textContent = "0";
}