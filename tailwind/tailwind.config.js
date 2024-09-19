import { preset, safelist } from '../../tailwind_styled_content/index.js';
 
/** @type {import('tailwindcss').Config} */
module.exports = {
	presets: [preset],
	content: [
		'./vendor/jramke/tailwind-styled-content/**/*.{html,yaml,typoscript,tsconfig}',
		'packages/**/*.{html,js,yaml,typoscript,tsconfig}',
	],
	safelist: [...safelist],
}