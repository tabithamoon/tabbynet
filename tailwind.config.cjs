/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'cerulean': '#007BA7',
      },
      fontFamily: {
        'bsod': ['Segoe UI', 'Open Sans', 'sans-serif']
      },
    },
  },
  plugins: [],
}
