/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        headline: ['Manrope', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: '#00DAF8',
        'primary-container': '#009fb5',
        'on-primary-container': '#B2EBFF',

        secondary: '#00D8B4',
        'secondary-container': '#005143',

        tertiary: '#c0c1ff',
        'tertiary-container': '#6d63ff',

        /* Slightly brighter variant of the Ethereal/Prism surfaces. */
        surface: '#0f1733',
        'surface-container': '#17223f',
        'surface-container-low': '#18233e',
        'surface-container-high': '#28324f',
        'surface-container-highest': '#323a5d',
        'surface-container-lowest': '#0a1328',

        'on-surface': '#e7ebff',
        'on-surface-variant': '#c7d2fe',

        outline: '#5a6a7a',
        'outline-variant': '#414755',
      },
    },
  },
  plugins: [],
}

