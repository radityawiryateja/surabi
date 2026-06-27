/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          light: '#FDFBF7',
          dark: '#1c1917',
          primary: '#4A2B1D',
          primaryDark: '#E6D3C3',
          surface: '#F6EFE7',
          surfaceDark: '#292524',
          accent: '#F59E0B',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['"Inter"', 'sans-serif'],
      },
      borderRadius: {
        '4xl': '2rem',
      }
    }
  },
  plugins: [],
}
