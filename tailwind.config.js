/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screen: {
      'xs': '400px'
    },
    extend: {
      fontFamily: {
        apercu: ['Apercu']
      },
      fontSize: {
        '2vw': '2vw'
      }
    },
  },
  plugins: [],
}
