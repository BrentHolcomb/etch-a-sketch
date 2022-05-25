const boundary = document.querySelector("body div");
const tile = document.createElement("div");
const row = document.createElement("div");

function grid() {
    let rowCln;
    let tileCln;

    for (let i = 0; i < 16; i++) {
        rowCln = row.cloneNode(true);
        console.log(rowCln);

        for (let i = 0; i < 16; i++) {
            tileCln = tile.cloneNode(true);
            rowCln.appendChild(tileCln);
        }

        boundary.appendChild(rowCln);
    }
}

grid();