/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      darkgray: '#373C4A',
      white: '#fff',
      lightGray: '#F4F1F5',
      lightPurple: '#ADA5BD',
      button: '#c0cfff',
      border: '#D345B8',
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.8rem',
      '1sm': '0.875rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
    },
    extend: {
      dropShadow: {
        '1m': '0 4px 4px rgba(0, 0, 0, 0.25)',
        '2m': '2px 4px 10px #F4F1F5',
        '4xl': [
          '0 35px 35px rgba(0, 0, 0, 0.25)',
          '0 45px 65px rgba(0, 0, 0, 0.15)',
        ],
        invisible: '0 0 0 #fff',
      },
      backgroundImage: {
        'project-pattern': "url('./assets/other-shape-gradient.png')",
        'footer-texture': "url('./assets/square-gradient.png')",
      },
      padding: {
        '0.6rem': '0.063rem',
      },
      fontFamily: {
        primary: "'Poppins', 'sans-serif'",
        secondary: "'Inter', 'sans-serif'",
      },
    },
    plugins: [],
  },
};
