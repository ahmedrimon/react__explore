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
        apercu: ['Apercu'],
        monarch: ['WT Monarch Nova']
      },
      fontSize: {
        '2vw': '2vw',
        '1.2rem': '1.2rem'
      }
    },
  },
  plugins: [],
}
