document.addEventListener( 'DOMContentLoaded', () => {
	'use strict'

	toggleShowMore()
} )

const toggleShowMore = () => {
	const button	= document.querySelector( '.study-button' ),
		list		= document.querySelector( '.study-more-items' )

	if( ! button || ! list ) return

	closeList( list )

	button.addEventListener( 'click', () => {
		if( list.classList.contains( 'opened' ) ) closeList( list )
		else openList( list )
	} )
}

const outerHeight = el => {
	const style	= getComputedStyle( el )
	let height	= el.offsetHeight

	return height + parseInt( style.marginTop ) + parseInt( style.marginBottom )
}

const openList = list => {
	const hiddenItems	= list.querySelectorAll( '.to-hide' )
	let listHeight		= parseInt( getComputedStyle( list ).height )

	if( ! hiddenItems.length ) return

	hiddenItems.forEach( item => listHeight += outerHeight( item ) )
	list.classList.add( 'opened' )
	list.style.height = `${ listHeight }px`
}

const closeList = list => {
	const alwaysVisibleItems = list.querySelectorAll( '.always-visible' )
	let listInitialHeight = 0

	if( ! alwaysVisibleItems.length ) return

	alwaysVisibleItems.forEach( item => listInitialHeight += outerHeight( item ) )
	list.style.height = `${ listInitialHeight }px`
	list.classList.remove( 'opened' )
}

window.addEventListener( 'resize', () => {
	closeList( document.querySelector( '.study-more-items' ) )
} )
