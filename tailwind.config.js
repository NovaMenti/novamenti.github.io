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

        /* Brighter variant: less “void black”, more readable corporate blue. */
        surface: '#131d38',
        'surface-container': '#1a2750',
        'surface-container-low': '#1f2d58',
        'surface-container-high': '#2a3a6d',
        'surface-container-highest': '#344679',
        'surface-container-lowest': '#0e1631',

        'on-surface': '#f1f5ff',
        'on-surface-variant': '#dbe5ff',

        outline: '#7b879a',
        'outline-variant': '#5b6b85',
      },
    },
  },
  plugins: [],
}

