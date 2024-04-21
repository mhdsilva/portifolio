/** @type {import('tailwindcss').Config} */
export const important = true
export const content = [
	'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
	'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
	'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
]
export const theme = {
	extend: {
		backgroundImage: {
			'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
			'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
		},
		colors: {
			primary: '#FF5E03',
			secondary: '#02101B',
		},
	},
}
export const plugins = []
