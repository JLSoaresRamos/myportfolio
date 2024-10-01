/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				Inter: ["Inter", "sans-serif"],
			},
			backgroundImage: {
				background:
					"linear-gradient(to bottom left, #22162B 60%, #833BE7 100%)",
				"button-background":
					"linear-gradient(to bottom left, #833BE7, #5CC8FF )",
			},
			colors: {
				primary: {
					purple: "#833BE7",
					red: "#F15156",
					"dark-purple": "#22162B",
					black: "#2E2532",
					blue: "#5CC8FF",
				},
			},
		},
	},
	plugins: [],
};
