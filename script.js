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

let boxNumber = 16;
let tileSize = 45 / boxNumber;

grid();

// add class on mouseover, remove class on mouseout for each tile
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
        });
        hover.addEventListener("mouseout", () => {
            hover.classList.remove("hover");
        });
    }
}