const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  purge: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  presets: [require('@danielpickett/design-tokens/presets/tailwindPreset')],
  variants: {},
  plugins: [],
}
