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
        customGradientTop: '#2B2361',
        customGradientBottom: '#3C3374',
        navPurple: '#EB8E2A',
        navBg: '#202021',
        background: '#121212',
        lightOrange: '#FF9A2E',
        gamdomGreen: '#00b861',
        gamdomGrey: '#131a22',
        gGreen: '#00de75',
        stake: '#1475e1',
        stakeDark: '#0b53a2',
        redcsgo: '#fe617c',
        darkred: '#bf223d',
        featurebg: '#020101',
        featuregrad: '#1D1307',
      },
      fontFamily: {
        suse: ['SUSE', 'sans-serif'],
      },
      screens: {
        'lg': '1440px',
        'xl2': '1350px',
      },
      borderWidth: {
        '3': '3px',  // Adding custom 3px border width
      },
    },
  },
  plugins: [],
}
