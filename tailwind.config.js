/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
      colors: {
        'brand-blue': {
          900: '#1e3a8a',
          800: '#1e40af',
        },
        'brand-orange': {
          500: '#f97316',
          600: '#ea580c',
        }
      }
    },
  },
  plugins: [],
} 