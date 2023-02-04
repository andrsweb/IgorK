import { renderSVGs } from "./common/common"

document.addEventListener( 'DOMContentLoaded', () => {
	'use strict'

	renderSVGs( document.querySelector( '.rev-items' ) )
} )