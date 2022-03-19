module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
			colors: {
				"primary-blue": "#008DD2",
				"primary-gray": "#2F3642",
				"primary-white": "#f3f4f6",
			},
			screens: {
				"wide": "775px"
			},
		},
		fontFamily: {
			sans: ["DinC", "sans-serif"],
		},
  },
  plugins: [],
	important: true,
};
