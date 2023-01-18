import Swiper, { Pagination, Navigation } from "swiper"

document.addEventListener('DOMContentLoaded', () => {
	'use strict'

	initSwiper('.before-after-swiper', 2, '.before-after-next', '.before-after-prev')
})

const initSwiper = (slider, num, next, prev) => {

	const swiper = new Swiper(slider, {

		direction: 'horizontal',
		loop: true,
		slidesPerView: num,
		spaceBetween: 18,
		breakpoints: {
			320: {
				slidesPerView: 1,
			},
			576: {
				slidesPerView: 2,
			}
		},

		modules: [Pagination, Navigation],

			pagination: {
				el: '.swiper-pagination',
				clickable: true
			},

			navigation: {
				nextEl: next,
				prevEl: prev
			}
		})
}

