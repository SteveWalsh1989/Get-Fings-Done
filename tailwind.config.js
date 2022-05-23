module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    colors: {
      'primary-purple': '#b794f6',
    },
  },
  variants: {
    extend: {
      width: ['responsive', 'hover', 'focus'],
      height: ['responsive', 'hover', 'focus'],
      translate: ['hover'],
      transform: ['hover'],
      scale: ['hover'],
      cursor: ['hover', 'active'],
    },
  },
  plugins: [],
};
