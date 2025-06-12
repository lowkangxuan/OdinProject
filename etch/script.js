const grid = document.getElementById("grid");
const choiceBtn = document.getElementById("user-choice");
const resetBtn = document.getElementById("user-reset-choice");
const userGridResolution = document.getElementById("user-grid-resolution");
const userRainbow = document.getElementById("user-rainbow");
const defaultGridSize = 550;
const defaultGridResolution = 50;

initGrid();
choiceBtn.addEventListener("click", () => updateGridResolution(userGridResolution.value));
resetBtn.addEventListener("click", resetGrid);

function initGrid(gridResolution = defaultGridResolution) {
    const gridContainer = document.getElementById("grid-container");
    gridContainer.innerHTML = ""; // Empties the grid first
    gridContainer.style.cssText = `
        height: ${defaultGridSize}px;
        width: ${defaultGridSize}px;
    `;

    for (let y = 0; y < gridResolution; y++) {
        const row = document.createElement("div");
        row.className = "row";
        row.id = `row-${y+1}`; // y+1 to make row readable

        for (let x = 0; x < gridResolution; x++) {
            const cell = document.createElement("div");
            cell.className = "cell";
            cell.id = `square-${(y * 10) + (x + 1)}`;
            cell.style.cssText = `
                background-color: white;
                height: ${defaultGridSize/gridResolution}px;
                width: ${defaultGridSize/gridResolution}px;
            `;
            cell.addEventListener("mouseenter", (e) => {
                console.log(e.target.style.backgroundColor);
                if (e.target.style.backgroundColor === "white") {
                    if (userRainbow.checked) {
                        e.target.style.backgroundColor = getRandomHexColor();   
                    }
                    else {
                        e.target.style.backgroundColor = "#000";   
                    }
                }
            });
            row.appendChild(cell);
        }
        gridContainer.appendChild(row);
    }
}

function updateGridResolution(newResolution) {
    console.log(newResolution);
    initGrid(newResolution);
    resetGrid();
}

function resetGrid() {
    const cells = document.querySelectorAll(".cell");
    cells.forEach((cell) => {
        cell.style.backgroundColor = "white";
    });
}

function getRandomHexColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}