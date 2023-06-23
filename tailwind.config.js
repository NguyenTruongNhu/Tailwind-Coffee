/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    screens: {
      'xs': '480px',
      ...defaultTheme.screens,
    },
    extend: {
      
      fontFamily:{
        Karla:['Karla', 'sans-serif']
      },
      colors: {
        'coffee' : {
          50: '#E8D6D0',
          200: '#a25f4b4d',
          400: '#A25F4B',
          600: '#744838'
        }

      },
      keyframes: {
        slideDown: {
          '0%': { transform: 'translateY(-10%)' },
          '100%': { transform: 'translateY(0)' },
        },
        fadeIn:{
          from: { opacity:0},
          to: { opacity:1}
        }
      },
      
        animation: {
          slideDown: 'slideDown .4s ease-in-out ',
          fadeIn: 'fadeIn .5s ease-in-out ',
        }
      
    },
  },
  plugins: [],
}
