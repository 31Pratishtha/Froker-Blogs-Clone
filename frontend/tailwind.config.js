/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				'frk-orange': '#f47031',
				'frk-gray': '#353535',
				'frk-gray-light': '#667085',
			},
		},
		// colors: {
		// 	'frk-orange': '#f47031',
		// 	'frk-gray': '#353535',
		// 	'frk-gray-light': '#667085',
		// },
	},
	plugins: [],
}
