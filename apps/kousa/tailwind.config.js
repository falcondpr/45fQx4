/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{ts,tsx,jsx,js}'],
  theme: {
    extend: {
      colors: {
        primary: '#333333',
        'light-gray': '#999999',
      },
    },
  },
  plugins: [],
}
