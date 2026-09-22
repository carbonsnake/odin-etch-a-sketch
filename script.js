"use strict";

const btn = document.querySelector("#prompt-btn");
const container = document.querySelector(".container");
const containerCSS = document.styleSheets[0].cssRules[3].style;
const containerWidth = containerCSS.getPropertyValue("width");
const CONTAINER_WIDTH = containerWidth.replace("px", "");

function createGrid(side) {
    for (let x = 1; x <= side; x++) {
        const column = document.createElement("div");
        column.classList.add("column");
        
            for (let i = 1; i <= side; i++) {
                const square = document.createElement("div");
                square.classList.add("square");
                column.appendChild(square);
                square.style.setProperty("width", `${CONTAINER_WIDTH / side}px`);
            }

        container.appendChild(column);
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
}

createGrid(16);

function resetGrid() {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

btn.addEventListener("click", () => {
    let getDimension = prompt("please enter the number of squares per side.", "e.g. enter '5' for a 5x5 grid");

    if (getDimension > 100 || getDimension < 1) {
        alert("please enter a number between 1 and 100");
    } else {
        resetGrid();
        createGrid(getDimension);
    }
});



