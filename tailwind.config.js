/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
	theme: {
		extend: {

			animation: {
				slowSpin: 'spin 17s infinite linear',
			},
			fontFamily: {
				dmsans: ["DM Sans", "sans-serif"],
			},
			colors: {
				bg: "#020916",
			},
			maxWidth: {
				"2xs": "20.4375rem",
				"8xl": "82rem",
			},
			borderRadius: {
				ten: "0.625rem",
			},
			boxShadow: {
				'innerlight': 'inset 0 2px 0 0 rgba(255,255,255,0.15)',
				'innersmlight': 'inset 0 1px 0 0 rgba(255,255,255,0.15)',
			},
		},
	},
	plugins: [],
};
