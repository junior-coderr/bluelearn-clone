/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./homePage/*.html"],
  theme: {
    screens: {
      sm: "640px",
      md: "730px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {},
  },
  plugins: [],
}

