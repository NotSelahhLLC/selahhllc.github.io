/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./presence/privacy-policy/index.html",
    "./presence/index.html",
    "./index.html"
  ],
  theme: {
    extend: {
      colors: {
        'presence-purple-100': '#E2CFFC',
        'presence-purple-200': '#C49EFA',
        'presence-purple-300': '#9A5EED',
        'presence-purple-400': '#7F3CDD',
        'presence-purple-500': '#6628BD',
        'presence-purple-600': '#5B24A8',
        'presence-purple-700': '#381070',
        'presence-purple-800': '#210647',
        'presence-purple-900': '#160330',
      }
    },
  },
  plugins: [],
}

