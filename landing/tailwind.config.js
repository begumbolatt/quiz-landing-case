/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
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
        'amber-1': '#FFFBEB',
        'amber-2': '#FDE68A',
        'amber-4': '#FBBF24',
        'amber-7': '#B45309',
        'amber-9': '#78350F',
        'blue-gray': '#0F172A',
        'blue-gray-2': '#E2E8F0',
        'blue-light': '#0369A1',
        'title-blue': '#475569',
        funchsia: '#A21CAF',
        'green-light': '#22C55E',
        'green-dark': '#15803D',
        'green-7': '#15803D',
        dark: '#121619',
        pink: '#BE185D',
        rose: '#E11D48',
        twitter: '#1DA1F2',
        instagram: '#5851DB',
        linkedin: '#0072b1 ',
      },
      backgroundImage: {
        backlights: "url('./assets/Backlights.png')",
        'backlights-mobile': "url('./assets/Backlights-mobile.png')",
        'video-deco': "url('./assets/Deco-video.png')",
        waves: "url('./assets/waves.png')",
        chart: "url('./assets/map/chart.png')",
        hero: 'linear-gradient(to bottom right, #FFFBEB 0%, #FFFBEB 50%, #FEF3C7 50%, #FEF3C7 100%)',
        'hero-mobile':
          'linear-gradient(to bottom right, #FFF 0%, #FFF 50%, #FEF3C7 50%, #FEF3C7 100%)',
      },
      boxShadow: {
        boxShadow: '0px 0px 4px 0px rgba(0, 0, 0, 0.07), 0px 4px 6px -1px rgba(0, 0, 0, 0.10);',
        slideShadow: '0px 0px 6px 0px rgba(0, 0, 0, 0.07), 0px 10px 15px -3px rgba(0, 0, 0, 0.10);',
        lightShadow:
          '0px 0px 15px 0px rgba(255, 255, 255, 0.07), 0px 25px 50px -12px rgba(255, 255, 255, 0.25);',
      },
    },
  },
  plugins: [],
}
