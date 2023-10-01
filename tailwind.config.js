/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        white: {
          100: "#FAFDFF",
          200: "#FFFFFF"
        },
        grey: {
          100: "#F5F6F8",
          200: "#616163"
        },
        black: {
          100: "#141414"
        },
        "primary-dark-blue": "#120B48",
        "primary-dark-blue-shade": "hsla(247, 73%, 25%, 1)",
        "primary-light-blue": "#413C6D",
        "primary-grey": "#928FAB",
      },
    },
    fontFamily: {
      Inter: ['Inter', 'sans-serif'],
      Sora: ['Sora', 'sans-serif'],
      WorkSans: ['Work Sans', 'sans-serif'],
    },
  },
  plugins: [],
};
