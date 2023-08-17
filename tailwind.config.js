/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		colors: {
			primary: '#de0301',
			black: 'black',
			yellow: { DEFAULT: '#f7e303' },
			white: { DEFAULT: 'white', 100: '#F8F3F3' },
			bg: { DEFAULT: '#59a8cf', 100: '#3491BE' },
			gray: 'gray'
		},
		fontFamily: {
			concretica: ['concretica']
		},
		extend: {}
	},
	plugins: []
};
