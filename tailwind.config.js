/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  theme: {
    extend: {
      colors: {
        normal: '#202020',
        inactive: '#575757'
      },
      fontFamily: {
        roboto: ['Roboto', 'Arial', 'sans-serif'],
        nunito: ['Nunito', 'Roboto', 'Arial', 'sans-serif']
      }
    }
  },
  variants: {
    opacity: ['responsive', 'hover', 'focus', 'group-hover'],
    width: ['responsive', 'group-hover']
  },
  plugins: []
}
