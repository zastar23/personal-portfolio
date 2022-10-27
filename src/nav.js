let burger = document.getElementById("burger"),
	nav = document.getElementById("main-nav");

const links = document.querySelectorAll(".link");

burger.addEventListener("click", function (e) {
	this.classList.toggle("is-open");
	nav.classList.toggle("is-open");
});

window.addEventListener("resize", () => {
	if (window.innerWidth <= 760) {
		burger.classList.remove("is-open");
		nav.classList.remove("is-open");
	}
});

nav.addEventListener("click", (e) => {
	if (!e.target.classList.contains("link")) return;

	nav.classList.remove("is-open");
	burger.classList.remove("is-open");
});

export * from "./nav.js";
