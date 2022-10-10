import './nav.js'

// about text and scroll component
const aboutContainer = document.querySelector('.about')
const squares = document.querySelectorAll('.square-mark')
const circles = document.querySelectorAll('.red-circle')
const line = document.querySelector('.about-content-scroll-component > hr')
const paragraphs = document.querySelectorAll('.about-content-text > p')

aboutContainer.addEventListener('touchend', handleToggle)

window.addEventListener('resize', () => {
	if (window.innerWidth >= 760) {
		aboutContainer.removeEventListener('touchend', handleToggle)
	}
	if (window.innerWidth <= 760) {
		aboutContainer.addEventListener('touchend', handleToggle)
	}
})

const toggleStyle = function (element) {
	element.forEach((el) => {
		el.classList.toggle('active')
		el.classList.toggle('inactive')
	})
}

function handleToggle(e) {
	if (
		e.target.classList.contains('active') ||
		e.target.classList.contains('inactive') ||
		e.target.classList.contains('active-text') ||
		e.target.classList.contains('inactive-text')
	) {
		toggleStyle(squares)
		toggleStyle(circles)
		line.classList.toggle('active')
		line.classList.toggle('inactive')

		paragraphs.forEach((el) => {
			el.classList.toggle('active-text')
			el.classList.toggle('inactive-text')
		})
	}
}

// clock

Number.prototype.pad = function (n) {
	for (var r = this.toString(); r.length < n; r = 0 + r);
	return r
}

function updateClock() {
	var now = new Date()
	var sec = now.getSeconds(),
		min = now.getMinutes(),
		hou = now.getHours(),
		mo = now.getMonth(),
		dy = now.getDate(),
		yr = now.getFullYear()
	var months = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December',
	]
	var tags = ['mon', 'd', 'y', 'h', 'm', 's'],
		corr = [months[mo], dy, yr, hou.pad(2), min.pad(2), sec.pad(2)]
	for (var i = 0; i < tags.length; i++)
		document.getElementById(tags[i]).firstChild.nodeValue = corr[i]
}

function initClock() {
	updateClock()
	window.setInterval(updateClock, 1)
}

initClock()
