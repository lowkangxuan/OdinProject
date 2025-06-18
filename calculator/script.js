const outputSlot = document.getElementById("output");
const additionBtn = document.getElementById("addition");
const subtractBtn = document.getElementById("subtract");
const multiplyBtn = document.getElementById("multiply");
const divisionBtn = document.getElementById("division");
const clearBtn = document.getElementById("clear");
const calculateBtn = document.getElementById("calculate");
const arithmeticID = ["addition", "subtract", "multiply", "division"];
let firstNum = secondNum = 0;
let selectedOperator = "";
let outputText = "0";
let isInputtingFirstNum = true;
let canInput = true;

init();

const numerals = document.querySelectorAll(".key.numeric");
numerals.forEach(numeral => {
    numeral.addEventListener("click", (e) => {
        appendNumerals(e.target.value);
    });
});

const operators = document.querySelectorAll(".key.operator");
operators.forEach(operator => {
    operator.addEventListener("click", (e) => {
        if (arithmeticID.includes(e.target.id)) {
            handleArithmeticInput(e.target.id);
        }
        else if (e.target.id === "clear") {
            reset();
        }
        else if (e.target.id === "calculate") {
            calculate();
        }
    });
});

function init() {
    updateDisplay("0");
}

function appendNumerals(num) {
    let stringNum = num.toString();
    let updatedNum;
    // console.log(`isInputtingFirstNum: ${isInputtingFirstNum}`);
    if (isInputtingFirstNum) {
        firstNum = parseInt(firstNum.toString() + stringNum);
        updatedNum = firstNum;
        console.log(`firstNum: ${firstNum}, typeof: ${typeof(firstNum)}`);
    }
    else {
        secondNum = parseInt(secondNum.toString() + stringNum);
        updatedNum = secondNum;
        console.log(`secondNum: ${secondNum}, typeof: ${typeof(secondNum)}`);
    }
    updateDisplay(updatedNum);
}

function handleArithmeticInput(id) {
    // if (selectedOperator === id) {
    //     console.log("Selected operator is the same, break!!!");
    //     return;
    // }

    // if (isInputtingFirstNum || selectedOperator !== id) {
    //     selectedOperator = id;
    //     isInputtingFirstNum = false;
    //     console.log('test');
    // }
    selectedOperator = id;
    updateDisplay(selectedOperator);
    if (!isInputtingFirstNum) {
        isInputtingFirstNum = true;
        calculate();
        return;
    }
    isInputtingFirstNum = false;
}

function updateDisplay(value) {
    if (outputText.length >= 12) {
        console.log(outputText.length);
        console.log("Output has reached max length!!!");
        return;
    }
    outputText = value.toString();
    outputSlot.textContent = outputText;
    console.log(`Output Length: ${outputText.length}`);
}

function add() {
    return firstNum + secondNum;
}

function subtract() {
    return firstNum - secondNum;
}

function multiply() {
    return firstNum * secondNum;
}

function divide() {
    return firstNum / secondNum;
}

function calculate() {
    let calculatedNum = 0;

    switch (selectedOperator) {
        case arithmeticID[0]: // Addition
            calculatedNum = add();
            break;
        case arithmeticID[1]: // Subtract
            calculatedNum = subtract();
            break;
        case arithmeticID[2]: // Mulitply
            calculatedNum = multiply();
            break;
        case arithmeticID[3]: // Division
            calculatedNum = divide();
            break;
    }

    firstNum = calculatedNum;
    updateDisplay(calculatedNum);
    resetInput();
    console.log(`isInputtingFirstNum: ${isInputtingFirstNum}`);
}

function resetInput() {
    secondNum = 0;
    selectedOperator = "";
}

function reset() {
    firstNum = secondNum = 0;
    outputText = "0";
    selectedOperator = "";
    isInputtingFirstNum = true;
    outputSlot.textContent = outputText;
}