/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      },
      colors: {
        'ed-blue': '#01267F',
        'ed-yellow': '#FAAF40',
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

