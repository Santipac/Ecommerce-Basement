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
        entrance:
          'scale-in-tr 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both',
      },
      keyframes: {
        entrance: {
          '0%': {
            transform: 'scale(0)',
            transformOrigin: '100% 0%',
            opacity: 1,
          },
          '100%': {
            transform: 'scale(1)',
            transformOrigin: '100% 0%',
            opacity: 1,
          },
        },
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
