// tailwind.config.js
module.exports = {
  purge: {
    content: [
      './*.html',
    ],
    
  },
  theme: {
    extend: {
      fontFamily:{
        montserrat:['Montserrat','sans-serif'],
        fraunces:['Fraunces','sans-serif']
      },
      colors:{
        darkCyan:'hsl(158, 36%, 37%)',
        cream:'hsl(30, 38%, 92%)',
        darkGrayishBlue:'hsl(228, 12%, 48%)',
        darkBlue:'hsl(212, 21%, 14%)',

      }
    },
  },
  plugins: [],
}
