/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'bytesized': ['Orbitron', 'Courier New', 'monospace'],
        'mono': ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        'pxl-purple': '#a855f7',
      }
    },
  },
  plugins: [],
} 