document.addEventListener( 'DOMContentLoaded',  () => {
    'use strict'

    toogleDropdown()
	changeTitleForClick()
} )

const toogleDropdown = () => {
    const dropdowns = document.querySelectorAll( '.dropdown' )

    if ( ! dropdowns.length ) return

	dropdowns.forEach( dropdown => {
		if ( dropdown.classList.contains( 'opened' ) )
			reCalculateDropdownHeight( dropdown )
	} )

    dropdowns.forEach( dropdown => {
        dropdown.addEventListener( 'click', () => {
            const dropdownOpen = dropdown.querySelector( '.dropdown-open' )

            if ( ! dropdownOpen ) return

            if ( ! dropdown.classList.contains( 'opened' ) ) {
                dropdown.classList.add( 'opened' )
                reCalculateDropdownHeight( dropdown )
            }
            else {
                dropdown.classList.remove( 'opened' )
                dropdownOpen.style.height = '0'
            }
        })
    })
}

window.addEventListener('resize', () => {
    const dropdowns = document.querySelectorAll( '.dropdown.opened' )

    if( ! dropdowns.length ) return

    dropdowns.forEach(dropdown => reCalculateDropdownHeight(dropdown))
})

const reCalculateDropdownHeight = dropdown => {
    const dropdownOpen  = dropdown.querySelector( '.dropdown-open' ),
        dropdownInner   = dropdown.querySelector( '.dropdown-inner' )

    if (! dropdownOpen || ! dropdownInner) return

    dropdownOpen.style.height = `${ dropdownInner.getBoundingClientRect().height }px`
}

const changeTitleForClick = () => {
	let button = document.querySelector( '.read-more' )

	if( ! button ) return

	button.innerHTML = 'Читать далее...'

	button.addEventListener( 'click', () => {
			if( ! button.classList.contains( 'opened' ) ) {
				button.innerHTML = 'Свернуть'
				button.classList.add( 'opened' )
			} else if ( button.classList.contains( 'opened' ) ) {
				button.innerHTML = 'Читать далее...'
				button.classList.remove( 'opened' )
			}
	} )
}