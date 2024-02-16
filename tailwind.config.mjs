/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
			sans: ['Poppins', 'sans-serif'],
		},
		extend: {
			colors: {
				"white-main": '#FFFFFF',
				"white-ligth": '#F7F7F7',
				"gray-main": '#D3D4D5',
				"black-main": '#000000',
				"black-ligth": '#0f0f0f',
				"green-main": '#C1FF72'
			},
		},
	},
	plugins: [],
}
