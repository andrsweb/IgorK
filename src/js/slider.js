import Swiper, { Pagination, Navigation } from "swiper"

document.addEventListener('DOMContentLoaded', () => {
	'use strict'

	initSwiper('.before-after-swiper', 2, '.before-after-next', '.before-after-prev', 2 , '.swiper-pagination' )
	initSwiper('.rhino-swiper', 2, '.white-next', '.white-prev', 1, '.swiper-pagination' )
	initSwiper('.media-swiper', 1, '.media-next', '.media-prev', 1, '.media-pagination' )
	initSwiper('.press-swiper', 4, '.swiper-button-next', 'swiper-button-prev', 4, '.press-pagination' )
})

const initSwiper = (slider, num, next, prev, slides, pag ) => {

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
				slidesPerView: slides,
			}
		},

		modules: [Pagination, Navigation],

			pagination: {
				el: pag,
				clickable: true
			},

			navigation: {
				nextEl: next,
				prevEl: prev
			}
		})
}

