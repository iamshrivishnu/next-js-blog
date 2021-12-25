module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './containers/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media',
  theme: {
    fill: theme => ({
      'white': theme('colors.white'),
      'black': theme('colors.black'),
      'blue': theme('colors.blue.500'),
      'coolGray': theme('colors.coolGray.500'),
    }),
    extend: {
      fontFamily: { 
        'oxygen': ['Oxygen', 'sans-serif'],
        'firaSans': ['"Fira Sans"', 'sans-serif']
       },
       
    },
  },
  variants: {
    extend: {
      fill: ['dark','disabled'],
      padding: ['last']
    },
  },
  plugins: [],
}
