import { Config } from "tailwindcss"

export default {
  content: ["src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        "primary-light": "#f3f4f6",
        "primary-dark": "#2f3642",
      },
      screens: {
        "wide": "775px",
      },
    },
    fontFamily: {
      sans: ["DinC"],
    },
  },
  important: true,
} satisfies Config;
