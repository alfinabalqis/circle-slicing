/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'gray-custom': '#9D9D9D',
        'dark-custom': '#020411',
        'green': '#B2FEFA',
        'green-second': '#0ED2F7'
      },
    },
  },
  plugins: [],
}

