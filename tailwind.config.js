const withMT = require('@material-tailwind/react/utils/withMT');
/** @type {import('tailwindcss').Config} */
module.exports = withMT({
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      gridTemplateRows: {
        12: 'repeat(12, minmax(0, 1fr))',
      },
      gridRowStart: {
        11: '11',
        12: '12',
        13: '13',
      },
      gridRowEnd: {
        11: '11',
        12: '12',
        13: '13',
        8: '8',
      },
      animation: {
        marquee: 'marquee 45s linear infinite',
        marquee2: 'marquee2 25s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
      strokeme: {
        color: 'white',
        text: '-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000',
      },
    },
  },
  plugins: [],
});
