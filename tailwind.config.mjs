/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
			sans: ['Poppins', 'sans-serif'],
		},
		extend: {
			colors: {
				whiteMain: '#FFFFFF',
				whiteLigth: '#F7F7F7',
				grayMain: '#B3B3B3',
				grayStrong: "#282828",
				blackMain: '#000000',
				blackNormal: "#181818",
				blackLigth: '#0f0f0f',
				greenMain: '#1ed760',
			},
		},
	},
	plugins: [],
}
