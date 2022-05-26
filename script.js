const boundary = document.querySelector("body div");
const tile = document.createElement("div");
const row = document.createElement("div");

function grid() {
    let rowCln;
    let tileCln;

    for (let i = 0; i < boxNumber; i++) {
        rowCln = row.cloneNode(true);

        for (let i = 0; i < boxNumber; i++) {
            tileCln = tile.cloneNode(true);

            // append tile clone, set class and dimensions
            rowCln.appendChild(tileCln);
            tileCln.classList.add("boxes");
            tileCln.style = `height: ${tileSize}em; width: ${tileSize}em;`;
        }

        // append row and add class
        boundary.appendChild(rowCln);
        rowCln.classList.add("rows");
    }
}

function addHover (boxNumber) {
    let randomColor;
    let selectedRow;
    for (let i = 1; i <= boxNumber; i++) {
        // add unique ID to each row
        selectedRow = document.querySelector(`.rows:nth-child(${i})`);
        selectedRow.setAttribute("id", `row${i}`);

        // add event listener for each tile in row
        for (let n = 1; n <= boxNumber; n++) {
            let hover = document.querySelector(`#row${i} div:nth-child(${n})`);
            hover.addEventListener("mouseover", () => {
                hover.classList.add("hover");

                // adds random color class
                randomColor = Math.floor(Math.random() * 6);
                hover.classList.add(`color${randomColor}`);
            });
            hover.addEventListener("mouseout", () => {
                setTimeout(() => {hover.classList.remove("hover", "color0", "color1", "color2", "color3", "color4", "color5")}, 500)
            });
        }
    }
}

// initial values
let boxNumber = 16;
let tileSize = 45 / boxNumber;

// initial grid
grid();
addHover(boxNumber);


const button = document.querySelector("button");
const entry = document.querySelector("input");
let text;

button.addEventListener("click", () => {
    text = entry.value;
    text = +text;
    if (typeof text === "number" && text <= 100) {
        // removes old rows and tiles
        for (let i = 0; i < boxNumber; i++) {
            const rowsToRemove = document.querySelector(".rows");
            if (rowsToRemove) {rowsToRemove.remove()}
        }
        
        boxNumber = text;
        tileSize = 45 / boxNumber;

        grid();
        addHover(boxNumber);
    } else {alert("Type a number that is 100 or below")}
});
