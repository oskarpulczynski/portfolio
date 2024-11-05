/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
	theme: {
		extend: {
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
				'innerlight': 'inset 0 2px 0 0 rgba(255,255,255,0.15)'
			},
		},
	},
	plugins: [],
};
