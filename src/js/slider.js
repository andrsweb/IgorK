import Swiper, { Pagination, Navigation } from "swiper"

document.addEventListener('DOMContentLoaded', () => {
	'use strict'

	initSwiper('.face-swiper', 2, '.before-after-next', '.before-after-prev', 2 , '.face-pagination' )
	initSwiper('.bleph-swiper', 2, '.before-after-next', '.before-after-prev', 2 , '.blef-pagination' )
	initSwiper('.waist-swiper', 2, '.before-after-next', '.before-after-prev', 2 , '.waist-pagination' )
	initSwiper('.bust-swiper', 2, '.before-after-next', '.before-after-prev', 2 , '.bust-pagination' )
	initSwiper('.rhino-swiper', 2, '.white-next', '.white-prev', 1, '.swiper-pagination' )
	initSwiper('.media-swiper', 1, '.media-next', '.media-prev', 3, '.media-pagination' )
	initSwiper('.press-swiper', 4, '.press-next', 'press-prev', 4, '.press-pagination' )
	initSwiper('.study-swiper', 4, '.study-next', '.study-prev', 4, '.study-pagination' )
	initSwiper('.work-face-swiper', 2, '.before-after-next', '.before-after-prev', 2 , '.work-face-pagination' )
	initSwiper('.blepharo-swiper', 2, '.blepharo-next', 'blepharo-prev', 2, '.blef-pagination' )
	initSwiper('.work-rhino-swiper', 2, '.work-rhino-next', 'work-rhino-prev', 2, '.rhino-pagination1' )
	initSwiper('.work-waist-swiper', 2, '.work-waist-next', 'work-waist-prev', 2, '.waist-pagination' )
	initSwiper('.work-bust-swiper', 2, '.work-bust-next', 'work-bust-prev', 2, '.bust-pagination' )
	initSwiper('.tv-swiper', 1, '.tv-next', '.tv-prev', 1, '.swiper-pagination' )
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