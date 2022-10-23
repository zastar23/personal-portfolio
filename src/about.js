import "./nav.js";

// about text and scroll component
const aboutContainer = document.querySelector(".about");
const squares = document.querySelectorAll(".square-mark");
const circles = document.querySelectorAll(".red-circle");
const line = document.querySelector(".about-content-scroll-component > hr");
const paragraphs = document.querySelectorAll(".about-content-text > p");

aboutContainer.addEventListener("touchend", handleToggle);

window.addEventListener("resize", () => {
	if (window.innerWidth >= 760) {
		aboutContainer.removeEventListener("touchend", handleToggle);
	}
	if (window.innerWidth <= 760) {
		aboutContainer.addEventListener("touchend", handleToggle);
	}
});

const toggleStyle = function (element) {
	element.forEach((el) => {
		el.classList.toggle("active");
		el.classList.toggle("inactive");
	});
};

function handleToggle(e) {
	if (
		e.target.classList.contains("active") ||
		e.target.classList.contains("inactive") ||
		e.target.classList.contains("active-text") ||
		e.target.classList.contains("inactive-text")
	) {
		toggleStyle(squares);
		toggleStyle(circles);
		line.classList.toggle("active");
		line.classList.toggle("inactive");

		paragraphs.forEach((el) => {
			el.classList.toggle("active-text");
			el.classList.toggle("inactive-text");
		});
	}
}
