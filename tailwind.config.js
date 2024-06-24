/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    colors: {
       transparent: 'transparent',
      current: 'currentColor',
      white: '#fff',
      cream: '#DDD5D0',
      accentBlue: '#2C3D55',
      accentFio: '#6A687A',
    },
    extend: {
      fontFamily: {
        base:['Marmelad']
      }
    },
  },
  plugins: [],
}
