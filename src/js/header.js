document.addEventListener( 'DOMContentLoaded', () => {
	'use strict'

	toggleBurgerMenu()
	headerScroll()
} )

const toggleBurgerMenu = () => {
	const burgerMenu   = document.querySelector( '.header-wrapper' )
	const burgerBtn    = document.querySelector( '.burger-button' )

	burgerBtn.addEventListener( 'click', () => {

		if( ! burgerMenu && burgerBtn ) return

		if( ! burgerMenu.classList.contains( 'active') ) {
			burgerMenu.classList.add( 'active' )
			burgerBtn.classList.add( 'opened' )
		} else {
			burgerBtn.classList.remove( 'opened' )	
			burgerMenu.classList.remove( 'active' )
		}
	} )

	document.addEventListener( 'click', e => {
		e.stopPropagation()
		const target = e.target

		if (
			! target.className ||
			target.classList.contains( 'burger-menu' ) ||
			target.classList.contains( 'burger-button' )
		) return

		burgerMenu.classList.remove( 'active' )
		burgerBtn.classList.remove( 'opened' )
	} )

	window.addEventListener( 'resize', () => {
		const windowWidth = window.innerWidth
		const WINDOW_WIDTH_MD = 992
	
		if( windowWidth >= WINDOW_WIDTH_MD &&  burgerMenu.classList.contains( 'active' ) ) {
			burgerMenu.classList.remove( 'active' )
			burgerBtn.classList.remove( 'opened' )
		}
	} )
}

const headerScroll = () => {
    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY
        const header = document.querySelector( '.header' )

		if( ! header ) return

        if ( scrollTop > 0 ) {
            if ( ! header.classList.contains( 'scrolled' ) )
                header.classList.add( 'scrolled' )
		}   else {
            header.classList.remove( 'scrolled' )
        }
    })
}