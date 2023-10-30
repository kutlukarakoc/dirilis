/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './containers/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      screens: {
        md: '875px',
        lg: '1150px',
        xl: '1464px',
      },
      padding: {
        DEFAULT: '1rem',
        lg: '2rem',
      },
    },
    boxShadow: {
      sm: '0px 1px 2px 0px #3741511C',
    },
    extend: {
      colors: {
        primary: {
          50: '#F0F1F3',
          100: '#CFD4DB',
          200: '#B8BFCA',
          300: '#97A1B1',
          400: '#838FA2',
          500: '#64738B',
          600: '#5B697E',
          700: '#475263',
          800: '#373F4C',
          900: '#2A303A',
        },
        white: {
          50: '#FFFFFF',
          100: '#E8E8E8',
          200: '#B5B5B5',
          300: '#8C8C8C',
          400: '#6B6B6B',
        },
        black: {
          50: '#E9E9E9',
          100: '#B9B9B9',
          200: '#989898',
          300: '#686868',
          400: '#4B4B4B',
          500: '#1E1E1E',
          600: '#1B1B1B',
          700: '#151515',
          800: '#111111',
          900: '#0D0D0D',
        },
        red: {
          50: '#FDECEC',
          100: '#FAC5C5',
          200: '#F8A9A9',
          300: '#F48282',
          400: '#F26969',
          500: '#EF4444',
          600: '#D93E3E',
          700: '#AA3030',
          800: '#832525',
          900: '#641D1D',
        },
      },
      fontSize: {
        smaller: ['9.60px', '15.4px'],
        label: ['12px', '19.2px'],
        'paragraph-mobile': ['13px', '20.8px'],
        'paragraph-tablet': ['14px', '22.04px'],
        paragraph: ['15px', '24px'],
        'header-6': ['17px', '27.2px'],
        'header-5': ['18.75px', '30px'],
        'header-4': ['23px', '37.5px'],
        'header-3': ['29.30px', '46.9px'],
        'header-2': ['36.62px', '58.6px'],
        'header-1': ['45.78px', '73.2px'],
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
