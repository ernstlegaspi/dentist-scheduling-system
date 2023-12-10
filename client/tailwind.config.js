/** @type {import('tailwindcss').Config} */

module.exports = {
	content: ['./src/**/*.{js,jsx}'],
	theme: {
		extend: {
			colors: {
				"dark": "#343434",
				"dark2": "#404041",
				"hover": "#185FFF",
				"main": "#407bff"
			},
			fontSize: {
				// one letter naming convention to not affect the default tailwindcss variables
				// small, normal, medium, big, bigger
				"s": "19px",
				"n": "30px",
				"m": "35px",
				"b": "55px",
				"br": "60px"
			}
		},
	},
	plugins: [],
}
