const grid = document.getElementById("grid");
const choiceBtn = document.getElementById("user-choice");
initGrid();

choiceBtn.addEventListener("mouseenter", (e) => {
    console.log('hi');
});

function initGrid() {
    const gridContainer = document.getElementById("grid-container");
    for (let y = 0; y < 10; y++) {
        const row = document.createElement("div");
        row.id = `row-${y+1}`; // y+1 to make row readable

        for (let x = 0; x < 10; x++) {
            const column = document.createElement("div");
            column.id = `square-${(y * 10) + (x + 1)}`;
            row.appendChild(column);
        }
        console.log(row);
        gridContainer.appendChild(row);
    }
}
