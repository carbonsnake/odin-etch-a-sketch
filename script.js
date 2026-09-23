"use strict";

const container = document.querySelector(".container");
const btn = document.querySelector("#prompt-btn");

function createGrid(sides) {
	const containerRule = [...document.styleSheets[0].cssRules].find(
		(r) => r.selectorText === ".container",
	).style;
	const CONTAINER_WIDTH = containerRule
		.getPropertyValue("width")
		.replace("px", "");

	for (let x = 1; x <= sides; x++) {
		const column = document.createElement("div");

		for (let i = 1; i <= sides; i++) {
			const square = document.createElement("div");
			square.classList.add("square");
			square.style.setProperty("width", `${CONTAINER_WIDTH / sides}px`);
			column.appendChild(square);
		}
		container.appendChild(column);
	}
	cursorHover();
}

function randomNum() {
	return Math.floor(Math.random() * 256);
}

function randomRGB() {
	return `rgb(${randomNum()}, ${randomNum()}, ${randomNum()})`;
}

function cursorHover() {
	const squares = document.querySelectorAll(".square");
	squares.forEach((square) => {
		square.addEventListener("mouseenter", (e) => {
			const targetStyle = e.target.style;
			if (targetStyle.getPropertyValue("background-color")) {
				const currentOpacity = Number(targetStyle.getPropertyValue("opacity"));
				targetStyle.setProperty("opacity", currentOpacity + 0.1);
			} else {
				targetStyle.setProperty("background-color", randomRGB());
				targetStyle.setProperty("opacity", 0.1);
			}
		});
	});
}

function resetGrid() {
	while (container.firstChild) {
		container.removeChild(container.firstChild);
	}
}

btn.addEventListener("click", () => {
	let getSides = prompt(
		"please enter the number of squares per side.",
		"e.g. enter '5' for a 5x5 grid",
	);

	if (getSides > 100 || getSides < 1) {
		alert("please enter a number between 1 and 100");
	} else {
		resetGrid();
		createGrid(getSides);
	}
});

createGrid(16);
