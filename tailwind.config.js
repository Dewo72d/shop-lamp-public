module.exports = {
	mode: "watch",
	purge: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./pages/components/**/*.{js,ts,jsx,tsx}",
		"./pages/assets/**/*.{js,json}",
	],
	darkMode: false, // or 'media' or 'class'
	theme: {
		keyframes: {
			ping: {
				"75%, 100%": {
					transform: "scale(2)",
					opacity: "0",
				},
			},
			pulse: {
				"0%, 100%": {
					opacity: "1",
				},
				"50%": {
					opacity: ".5",
				},
			},
			spin: {
				from: {
					transform: "rotate(360deg)",
				},

				to: {
					transform: "rotate(0deg)",
				},
			},
		},
		animation: {
			ping: "ping 3s cubic-bezier(0, 0, 0.2, 1) infinite",
			pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
			spin: "spin 1s linear infinite",
		},

		backgroundColor: {
			nav: "#1d1d1f",
			black: "#000000",
			whiteF: "#ffffff",
			whiteLight: "#f8fafc",
			blue: "#1A73E8",
			blueLight: "#1A90E9",
		},
		fontWeight: {
			hairline: 100,
			thin: 200,
			light: 300,
			normal: 400,
			medium: 500,
			semibold: 600,
		},

		divideColor: {
			ghost: "#f5f5f7",
		},

		fontFamily: {
			fruit: '"SF Pro Display","SF Pro Icons","Helvetica Neue","Helvetica","Arial",sans-serif',
		},
		extend: {
			fontSize: { preXl: "1.0625rem" },
			backgroundImage: {},
			transitionDuration: ["hover"],
		},
		textColor: {
			basic: "#a1a1a6",
			ghost: "#f5f5f7",
			white: "#ffffff",
			lightBlack: "#1d1d1f",
			black: "#000000",
			blueLight: "#1A90E9",
            blue: "#06c",
			green: "#00e600",
		},
	},
	variants: {
		extend: {},
		scrollbar: ["rounded"],
	},
	plugins: [require("tailwind-scrollbar")],
};
