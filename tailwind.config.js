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
        'primary-container': '#004F5C',
        'on-primary-container': '#B2EBFF',

        secondary: '#00D8B4',
        'secondary-container': '#005143',

        tertiary: '#FFB4AB',
        'tertiary-container': '#93000A',

        surface: '#0B1416',
        'surface-container': '#172123',
        'surface-container-low': '#121B1D',
        'surface-container-high': '#1D2729',
        'surface-container-highest': '#283234',
        'surface-container-lowest': '#060E10',

        'on-surface': '#E0E3E3',
        'on-surface-variant': '#BFC8CA',

        outline: '#899294',
        'outline-variant': '#3F484A',
      },
    },
  },
  plugins: [],
}

