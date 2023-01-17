document.addEventListener('DOMContentLoaded', () => {
	'use strict'

	mainTabs()
})

const mainTabs = () => {
	const tabBtns     = document.querySelectorAll('.main-tab')
	const tabContents = document.querySelectorAll('.links-wrapper')
	const imgToChange = document.querySelectorAll('.image-to-change')

	const clearActive = (element, className = 'active') => {
		element.forEach(item => item.classList.remove(`${className}`))
	}

	const setActive = (element, index, className = 'active') => {
		element[index].classList.add(`${className}`)
	}

	const checkOutTabs = (item, index) => {

		item.addEventListener('click', () => {

			if (item.classList.contains('active')) return

			clearActive(tabBtns)
			clearActive(imgToChange)
			clearActive(tabContents)

			setActive(imgToChange, index)
			setActive(tabBtns, index)
			setActive(tabContents, index)
		})
	}

	tabBtns.forEach(checkOutTabs)
}