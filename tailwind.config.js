/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      primary: '#48487f',
      hover: '#3d3d6e',
      white: '#fff',
    },
    extend: {},
  },
  plugins: [],
};
