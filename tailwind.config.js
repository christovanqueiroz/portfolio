/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'grayscaleToNormal': 'grayscaleToNormal 1s forwards',
        'pulse-slow': 'pulse 3s infinite',
        'bounce-slow': 'bounce 2s infinite',
        'spin-slow': 'spin 8s linear infinite',
      },
      keyframes: {
        grayscaleToNormal: {
          '0%': { filter: 'grayscale(100%)' },
          '100%': { filter: 'grayscale(0%)' },
        },
      },
      fontFamily: {
        'jost': ['Jost', 'sans-serif'],
      },
      transitionTimingFunction: {
        'bounce-in-out': 'cubic-bezier(0.68, -0.55, 0.27, 1.55)',
      },
      boxShadow: {
        'inner-lg': 'inset 0 2px 10px 0 rgb(0 0 0 / 0.15)',
      },
    },
  },
  plugins: [],
}


