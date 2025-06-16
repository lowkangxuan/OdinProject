const outputSlot = document.getElementById("output");
const additionBtn = document.getElementById("addition");
const subtractBtn = document.getElementById("subtract");
const multiplyBtn = document.getElementById("multiply");
const divisionBtn = document.getElementById("division");
const clearBtn = document.getElementById("clear");
const calculateBtn = document.getElementById("calculate");
let firstNum, secondNum;

clearBtn.addEventListener(("click"), () => {
    outputSlot.textContent = "";
});

numerals = document.querySelectorAll(".key.numeric");
numerals.forEach(numeral => {
    numeral.addEventListener("click", (e) => {
        appendToDisplay(e.target.value);
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