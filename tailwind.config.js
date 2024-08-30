/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customDark: '#1C1A3E',
        customPurple: '#24224A',
        lightPurple: '#1C1A3E',
      },
      fontFamily: {
        suse: ['SUSE', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
