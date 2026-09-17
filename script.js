"use strict";

const container = document.querySelector(".container");

for (let x = 1; x <= 16; x++) {
    const div = document.createElement("div");
    for (let i = 1; i <= 16; i++) {
        const square = document.createElement("div");
        // square.textContent = `${i}`;
        square.classList.add("square");
        div.appendChild(square);
    }
    container.appendChild(div);
}

const squares = document.querySelectorAll(".square");

squares.forEach((square) => {
    square.addEventListener("mouseenter", (e) => {
        e.target.classList.add("turn-purple");
    })

    square.addEventListener("mouseleave", (e) => {
        setTimeout(() => {
            e.target.classList.remove("turn-purple");
        }, 50);
    })
})