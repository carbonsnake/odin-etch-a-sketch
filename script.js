"use strict";

const container = document.querySelector(".container");

for (let x = 1; x <= 16; x++) {
    const div = document.createElement("div");
    div.classList.add("column");

    for (let i = 1; i <= 16; i++) {
        const square = document.createElement("div");
        // square.textContent = `${i}`;
        square.classList.add("square");
        div.appendChild(square);
    }
    container.appendChild(div);
}
