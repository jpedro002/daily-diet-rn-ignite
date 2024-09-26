/** @type {import('tailwindcss').Config} */
module.exports = {
	// NOTE: Update this to include the paths to all of your component files.
	content: ['./src/**/*.{ts,tsx}'],
	presets: [require('nativewind/preset')],
	theme: {
		extend: {
			fontFamily: {
				'nunito-regular': ['NunitoSans_400Regular', 'sans-serif'],
				'nunito-bold': ['NunitoSans_700Bold', 'sans-serif'],
			},
			colors: {
				'red-dark': '#BF3B44',
				'red-mid': '#F3BABD',
				'red-light': '#F4E6E7',
				'green-dark': '#639339',
				'green-mid': '#CBE4B4',
				'green-light': '#E5F0DB',
				base: '#1B1D1E',
				'gray-1': '#1B1D1E',
				'gray-2': '#333638',
				'gray-3': '#5C6265',
				'gray-4': '#B9BBBC',
				'gray-5': '#DDDEDF',
				'gray-6': '#EFF0F0',
				'gray-7': '#FAFAFA',
			},
		},
	},
	plugins: [],
}
