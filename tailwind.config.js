module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      screen : {
        "3xl": "2000px"
      }
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
}