const miniOutputSlot = document.getElementById("mini-output");
const outputSlot = document.getElementById("output");
const additionBtn = document.getElementById("addition");
const subtractBtn = document.getElementById("subtract");
const multiplyBtn = document.getElementById("multiply");
const divisionBtn = document.getElementById("division");
const clearBtn = document.getElementById("clear");
const calculateBtn = document.getElementById("calculate");
const arithmeticID = ["addition", "subtract", "multiply", "division"];
let firstNum = secondNum = finalNum = null;
let selectedOperator = null;
let miniOutputText = "";
let outputText = "0";
let isInputtingFirstNum = true;

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
    updateMiniOutput("\u00A0");
    updateOutput("0");
}

function appendNumerals(num) {
    let stringNum = num.toString();
    let updatedNum;

    if (num === ".") {
        let numToCheck = isInputtingFirstNum ? firstNum : secondNum;

        if (numToCheck === null) {
            if (isInputtingFirstNum) {
                firstNum = "0.";
            }
            else {
                secondNum = "0.";
            }
            updateOutput("0.");
            return
        }
        
        // Users should not be allowed to input decimal point twice!!!
        if (numToCheck.includes(".")) return;
    }

    // Soft reset inputs if user is entering fresh number after initial calculation
    if (finalNum !== null && selectedOperator === null) {
        isInputtingFirstNum = true;
        firstNum = finalNum = null;
    }

    if (isInputtingFirstNum) {
        firstNum === null ? firstNum = stringNum : firstNum += stringNum;
        updatedNum = firstNum;
        console.log(`firstNum: ${firstNum}, typeof: ${typeof(firstNum)}`);
    }
    else {
        secondNum === null ? secondNum = stringNum : secondNum += stringNum;
        updatedNum = secondNum;
        console.log(`secondNum: ${secondNum}, typeof: ${typeof(secondNum)}`);
    }
    updateOutput(updatedNum);
}

function handleArithmeticInput(id) {
    if (selectedOperator !== null && secondNum !== null) {
        calculate();
        updateMiniOutput(finalNum);
    }

    if (finalNum !== null) updateMiniOutput(finalNum);
    
    if (selectedOperator !== id) {
        selectedOperator = id;
        let operatorSymbol;

        switch (selectedOperator) {
            case arithmeticID[0]: // Addition
                operatorSymbol = "+";
                break;
            case arithmeticID[1]: // Subtract
                operatorSymbol = "-";
                break;
            case arithmeticID[2]: // Mulitply
                operatorSymbol = "x";
                break;
            case arithmeticID[3]: // Division
                operatorSymbol = "/";
                break;
        }

        updateOutput(operatorSymbol);
    }

    // Ensure user is inputting second number when arithmetic input is pressed
    if (isInputtingFirstNum) {
        isInputtingFirstNum = false;
        return;
    }
}

function updateMiniOutput(value) {
    miniOutputText = value.toString();
    miniOutputSlot.textContent = miniOutputText;
}

function updateOutput(value) {
    outputText = value.toString();
    console.log(outputText);
    if (outputText.length >= 12) {
        console.log("Output has reached max length!!!");
        outputText = Number.parseFloat(outputText).toExponential(3);
    }
    
    outputSlot.textContent = outputText;
    console.log(`Output Length: ${outputText.length}`);
}

function add() {
    return parseFloat(firstNum) + parseFloat(secondNum);
}

function subtract() {
    return parseFloat(firstNum) - parseFloat(secondNum);
}

function multiply() {
    return (parseFloat(firstNum * 10) * parseFloat(secondNum * 10)) / 100;
}

function divide() {
    return parseFloat(firstNum) / parseFloat(secondNum);
}

function calculate() {
    if (firstNum === null || secondNum === null) {
        console.log("Calculate cancelled!!!");
        return;
    }

    switch (selectedOperator) {
        case arithmeticID[0]: // Addition
            finalNum = add();
            break;
        case arithmeticID[1]: // Subtract
            finalNum = subtract();
            break;
        case arithmeticID[2]: // Mulitply
            finalNum = multiply();
            break;
        case arithmeticID[3]: // Division
            finalNum = divide();
            break;
    }

    firstNum = finalNum;
    updateOutput(finalNum);
    resetInput();
    console.log(`isInputtingFirstNum: ${isInputtingFirstNum}`);
}

function resetInput() {
    secondNum = selectedOperator = null;
    miniOutputSlot.textContent = "\u00A0";
}

function reset() {
    firstNum = secondNum = finalNum = selectedOperator = null;
    outputText = "0";
    isInputtingFirstNum = true;
    miniOutputSlot.textContent = "\u00A0";
    outputSlot.textContent = outputText;
}