/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        grayscaleToNormal: {
          '0%, 100%': { filter: 'grayscale(100%)' },
          '50%': { filter: 'grayscale(0%)' },
        },
      },
      animation: {
        grayscaleToNormal: 'grayscaleToNormal 3s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}

