import { isInScope } from "./common/global"

document.addEventListener( 'DOMContentLoaded', () => {
	'use strict'

	showMap()
} )

const showMap = () => {

	const map = document.querySelector( '.iframe-map' )

	if( ! map ) return

	document.addEventListener( 'scroll', () => {
			if ( isInScope( '.map', window.scrollY ) ) {
				if( ! map.classList.contains( 'loaded' ) ) {
					map.src= 'https://yandex.ru/map-widget/v1/?um=constructor%3Ab73eba508cf03133d4673f7fa996fa5a9d7608c5c5f3c80bc559b455bdc4f52b&amp;source=constructor'
					map.classList.add( 'loaded' )
				}
			}
		}
	)
}
