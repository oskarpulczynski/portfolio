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
				'2xs': '20,4375rem',
        '8xl': '82rem',
      },
		},
	},
	plugins: [],
};
