/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        pink: {
          50: '#FFF5F7',
          100: '#FFEAEF',
          200: '#FFCCD5',
          300: '#FDA4AF',
          400: '#FB7185',
          500: '#F43F5E',
          600: '#E11D48',
          700: '#BE123C',
          800: '#9F1239',
          900: '#881337',
        },
      },
      animation: {
        blob: 'blob 7s infinite',
        bounce: 'bounce 3s infinite',
      },
      transitionDuration: {
        2000: '2000ms',
      },
    },
  },
  plugins: [],
};