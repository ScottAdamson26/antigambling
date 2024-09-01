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
        customGradientTop: '#2B2361',  // Add your new colors here
        customGradientBottom: '#3C3374',
        navPurple: '#1E173F',
        navBg: '#11112B',
        background: '#090C23',
      },
      fontFamily: {
        suse: ['SUSE', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
