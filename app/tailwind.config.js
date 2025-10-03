/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        testo: "rgb(198, 148, 56)",
        sok: "rgb(227, 195, 162)",
        myaso: "rgb(129, 81, 31)"
      },
      fontFamily: {
        ruslan: ['RuslanDisplay', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
