module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-light": "#f3f4f6",
        "primary-dark": "#2F3642",
      },
      screens: {
        "wide": "775px",
      },
    },
    fontFamily: {
      sans: ["DinC", "sans-serif"],
    },
  },
  plugins: [],
  important: true,
};
