/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'pokemon-white-100': '#fff',
        'pokemon-white-200': '#F2F2F2',
        'pokemon-black-100': '#000',
        'pokemon-yellow-100': '#F2CB07',
        'pokemon-yellow-200': '#f2b807',
        'pokemon-yellow-300': '#f28f16',
        'pokemon-green-100': '#8bd381',
        'pokemon-green-200': '#6cab6c',
      },
      backgroundColor: {
        'pokemon-white-100': '#fff',
        'pokemon-white-200': '#F2F2F2',
        'pokemon-black-100': '#000',
        'pokemon-yellow-100': '#F2CB07',
        'pokemon-yellow-200': '#f2b807',
        'pokemon-yellow-300': '#f28f16',
        'pokemon-green-100': '#8bd381',
        'pokemon-green-200': '#6cab6c',
      },
    },
  },
  plugins: [],
}