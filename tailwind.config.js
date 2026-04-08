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
        primary: '#2563eb',
        'primary-container': '#1d4ed8',
        'on-primary-container': '#ffffff',

        secondary: '#38bdf8',
        'secondary-container': '#0284c7',

        tertiary: '#60a5fa',
        'tertiary-container': '#1e3a8a',

        /* Bright variant, toned down: softer neutral-light blue surfaces. */
        surface: '#f8fafc',
        'surface-container': '#f3f6fb',
        'surface-container-low': '#eef2f7',
        'surface-container-high': '#e8edf4',
        'surface-container-highest': '#e2e8f0',
        'surface-container-lowest': '#ffffff',

        'on-surface': '#0f172a',
        'on-surface-variant': '#334155',

        outline: '#94a3b8',
        'outline-variant': '#cbd5e1',
      },
    },
  },
  plugins: [],
}

