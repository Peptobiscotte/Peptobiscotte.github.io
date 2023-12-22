/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'colorbg1': '#181c3b',
      'colorbg2': '#090B1B',
      'colortext': '#B6CFF0E5',
      'colorcard': '#B6CFF026',
      'colorborder': '#B6CFF04D'
    },
    borderWidth: {
      '1': '1px',
      '2': '2px'
    },
    fontFamily: {
      customG: ['general', 'sans-serif'],
      customGR: ['generalReg', 'sans-serif']
    },
    extend: {
      width: {
        'ellipsisW': '900px'
      },
      height: {
        'ellipsisH': '900px'
      }
    },
  },
  plugins: [],
}

