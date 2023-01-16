import { reCalculateDropdownHeight } from "./common/global"

document.addEventListener( 'DOMContentLoaded', () => {
	'use strict'

	toggleBurgerMenu()
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
}