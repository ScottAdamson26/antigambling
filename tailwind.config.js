/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customDark: '#1F1E25',
      },
      fontFamily: {
        anton: ['Anton', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
