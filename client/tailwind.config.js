/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#4C3BCF',
        'primary-dark': '#1E1B4B',
        saffron: '#F5A623',
        'forest-green': '#1D7A4E',
        'off-white': '#F8F7F4',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
