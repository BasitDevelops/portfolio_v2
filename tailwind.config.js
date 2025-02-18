/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        moondance: ['Moon Dance', 'cursive'],
        quicksand: ['Quicksand', 'sans-serif'],
        sourceSP: ['Source Sans Pro', 'sans-serif']
      }
    },
  },
  plugins: [],
}
