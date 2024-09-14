/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or false
  theme: {
    extend: {
      fontSize: {
        headinglg: [
          '4.8rem',
          { lineHeight: '1.1' },
          { letterSpacing: '-0.02em' },
        ],
        headingmd: [
          '2.88rem',
          { lineHeight: '1.2' },
          { letterSpacing: '-0.02em' },
        ],
        headingsm: [
          '1.8rem',
          { lineHeight: '1.4' },
          { letterSpacing: '-0.02em' },
        ],
        headingxs: [
          '1.08rem',
          { lineHeight: '1.4' },
          { letterSpacing: '-0.02em' },
        ],
        subheading: ['1.44rem', { lineHeight: '1.35' }],
        body: ['16px', { lineHeight: '1.4' }, { letterSpacing: '0' }],
      },
      colors: {
        primary: {
          100: '#E3F2FD',
          200: '#BBDEFB',
          300: '#90CAF9',
          400: '#64B5F6',
          500: '#42A5F5',
          600: '#2196F3',
          700: '#1E88E5',
          800: '#1976D2',
          900: '#1565C0',
        },
        accent: {
          100: '#FFECB3',
          200: '#FFE082',
          300: '#FFD54F',
          400: '#FFCA28',
          500: '#FFC107',
          600: '#FFB300',
          700: '#FFA000',
          800: '#FF8F00',
          900: '#FF6F00',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
