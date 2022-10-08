let burger = document.getElementById('burger'),
	nav = document.getElementById('main-nav')

burger.addEventListener('click', function (e) {
	this.classList.toggle('is-open')
	nav.classList.toggle('is-open')
})

window.addEventListener('resize', () => {
	if (window.innerWidth <= 760) {
		burger.classList.remove('is-open')
		nav.classList.remove('is-open')
	}
})

export * from './nav.js'
