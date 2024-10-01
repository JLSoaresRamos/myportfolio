/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			screens: {
				xl: "1440px",
			},
			fontFamily: {
				Inter: ["Inter", "sans-serif"],
			},
			animation: {
				wave: "wave 1.5s ease-in-out infinite",
			},
			keyframes: {
				wave: {
					"0%": { transform: "rotate(0deg)" },
					"25%": { transform: "rotate(15deg)" },
					"50%": { transform: "rotate(0deg)" },
					"75%": { transform: "rotate(-10deg)" },
					"100%": { transform: "rotate(0deg)" },
				},
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
