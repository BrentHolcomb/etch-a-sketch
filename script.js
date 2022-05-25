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

            // append tile clone, set class and dimensions
            rowCln.appendChild(tileCln);
            tileCln.classList.add("boxes");
            tileCln.style = "height: 2.8em; width: 2.8em;";
        }

        // append row and add class
        boundary.appendChild(rowCln);
        rowCln.classList.add("rows");
    }
}

grid();