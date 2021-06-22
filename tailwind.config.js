const plugin = require('tailwindcss/plugin')
const colors = require('tailwindcss/colors')

module.exports = {
  theme: {
    // To extend the color palette (though this can also be done by adding additional colors to colors object)
    extend: {
      colors: {
        primary: { ...colors.pink, ...{ DEFAULT: colors.pink['500'] } },
        secondary: { ...colors.cyan, ...{ DEFAULT: colors.cyan['500'] } },
        dark: { ...colors.trueGray, ...{ DEFAULT: colors.black, 950: '#080808' } },
        light: { ...colors.sky, ...{ DEFAULT: colors.sky['50'] } }
      },
      // To add fonts
      fontFamily: {
        poster: ['Brusher']
      }
    }
  },
  plugins: [
    plugin(function({ addUtilities }) {
      const chromaticAberration = {
        '.text-chromatic-aberration': {
          'text-shadow': '3px 2px 2px rgba(236, 72, 153, 1), 0px -1px 3px rgba(251, 224, 71, .5), -3px 0px 2px rgba(60, 211, 238, 1)',
          animation: 'chromaticMove 2250ms ease infinite'
        }
      }

      addUtilities(chromaticAberration, ['hover'])
    })
  ]
}
