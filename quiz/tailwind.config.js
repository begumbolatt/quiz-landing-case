/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        hind: ['Hind Madurai', 'sans-serif'],
        rubik: ['Rubik', 'sans-serif'],
        prism: ['Tilt Prism', 'cursive'],
      },
      container: {
        padding: {
          DEFAULT: '1.25rem',
          xs: '1.25rem',
          sm: '2rem',
          '3xs': '1.25rem',
          '2xs': '1.25rem',
        },
        center: true,
        screens: {
          DEFAULT: '100%',
          lg: '1440px',
          '2xl': '2560px',
        },
      },
      colors: {
        yellow: '#b4e900',
        'txt-gray': '#95a5a6',
        'txt-gray-white': '#e5eeee',
        'txt-gray-2': '#c4d5d7',
        dark: '#0c1012',
        'dark-light': '#192123',
        'dark-border': '#1f292c',
        'dark-blue': '#2abac4',
        'light-blue': '#5fbef5',
      },
      backgroundColor: {},
    },
  },
  plugins: [],
}
