import lazyframe from 'lazyframe'

document.addEventListener('DOMContentLoaded', () => {
	'use strict'

	mainTabs()
	toggleTabsInside()
})

const mainTabs = () => {
	const tabBtns     = document.querySelectorAll('.main-tab')
	const tabContents = document.querySelectorAll('.links-wrapper')

	const checkOutTabs = item => {
		item.addEventListener( 'click', () => {
			const id = item.dataset.id

			if( ! id ||  item.classList.contains( 'active' ) ) return

			clearActive( tabBtns )
			clearActive( tabContents )

			setActive( tabBtns, id )
			setActive( tabContents, id )
			setActiveInnerTab( tabContents, id )
			changeImage( item )
			changeLink( item )
		} )
	}

	tabBtns.forEach(checkOutTabs)
}

const clearActive = elements => {
	elements.forEach( el => el.classList.remove( 'active' ) )
}

const setActive = ( elements, id ) => {
	elements.forEach( el => {
		const elId = el.dataset.id

		if( elId === id ) el.classList.add( 'active' )
	} )
}

const setActiveInnerTab = ( elements, id ) => {
	elements.forEach( el => {
		const elId = el.dataset.id

		if( elId === id ) el.querySelector( '.main-tab-link' ).classList.add( 'active' )
	} )
}

const toggleTabsInside = () => {
	const innerTabs = document.querySelectorAll( '.main-tab-link' )

	if( ! innerTabs.length ) return

	innerTabs.forEach( innerTab => {
		innerTab.addEventListener( 'click', e => {
			e.preventDefault()

			if( innerTab.classList.contains( 'active' ) ) return

			clearActive( innerTabs )
			innerTab.classList.add( 'active' )
			changeImage( innerTab, 1 )
			changeLink( innerTab, 1 )
		} )
	} )
}

const changeImage = ( element, elWithImg = 0 ) => {
	const imgWrapper = document.querySelector( '.main-tabs-img .tab-video-wrapper' )
	let id, imgToChange

	if( ! imgWrapper ) return

	// If we have element with image inside.
	if( elWithImg ){
		imgToChange = element.querySelector( '.frame-wrapper' ).outerHTML
	}	else {
		id				= element.dataset.id
		imgToChange		= document.querySelector( `.links-wrapper[data-id="${ id }"] .active .frame-wrapper` ).outerHTML
	}

	if( ! imgToChange ) return

	imgWrapper.innerHTML = ''
	imgWrapper.innerHTML = imgToChange

	const frames = imgWrapper.querySelectorAll( '.frame' )
	frames[0].classList.remove( 'lazyframe--loaded' )
	lazyframe( frames, { autoplay: true } )

	const wrap = imgWrapper.querySelector( '.frame-wrapper' )
	wrap.addEventListener( 'click', () => {
		if( ! wrap.classList.contains( 'played' ) ) wrap.classList.add( 'played' )
	} )
}

const changeLink = ( element, elWithImg = 0 ) => {
	const button = element.closest( '.main-tabs-links' ).querySelector( '.tabs-button' )
	let id, newUrl

	if( ! button ) return

	if( elWithImg ){
		newUrl = element.dataset.url
	}	else {
		id		= element.dataset.id
		newUrl	= document.querySelector( `.links-wrapper[data-id="${ id }"] .active` ).dataset.url
	}

	if( ! newUrl ) return

	button.href = newUrl
}