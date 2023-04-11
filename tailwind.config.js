/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        bai: ['Bai Jamjuree']
      },
      screens: {
        'sl': '480px',
        'bmd': '600px'
      },
      colors: {
        'strong-cyan': 'hsl(171, 66%, 44%)',
        'light-blue': 'hsl(233, 100%, 69%)',
        'dark-gb': 'hsl(210, 10%, 33%)',
        'grayish-blue': 'hsl(201, 11%, 66%)',
        'footer-bg': 'rgb(249, 246, 246)',
        cyanShadow: 'hsl(171, 66%, 30%)',
        blueShadow: 'hsl(233, 40%, 42%)'
      },
      boxShadow: {
        mainShadow: '0 -3px inset'
      }
    },
  },
  plugins: [],
}
