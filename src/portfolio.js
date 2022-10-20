const projects = document.querySelectorAll('.project')

const options = {
	root: null,
	treshold: 1,
	rootMargin: '-100px',
}

const observer = new IntersectionObserver(function (entries, observer) {
	entries.forEach((entry) => {
		if (!entry.isIntersecting) {
			return
		}
		entry.target.classList.add('slide-in')
		observer.unobserve(entry.target)
	})
}, options)

projects.forEach((project) => {
	observer.observe(project)
})
