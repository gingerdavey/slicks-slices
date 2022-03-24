module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      spacing: {
        15: '3.75rem',
      },
      gridTemplateColumns: {
        slick: '1fr 1fr auto 1fr 1fr',
      },
      fontSize: {
        xxs: ['9px', '1.15'],
        '4.25xl': ['2.5rem', '1.15'],
      },
      lineHeight: {
        0: '1.15',
        1: '1',
      },
    },
  },
  plugins: [],
};
