let buttons = document.querySelectorAll('.btn')
let display = document.querySelector('.display')


buttons.forEach(btn => {
	btn.addEventListener('click', (e) => {
		// console.log(e.target.innerText)

		let previousOperanda = '';
		let operation = '';
		let currentOperanda = ''

		display.innerHTML += e.target.innerText
	})
})