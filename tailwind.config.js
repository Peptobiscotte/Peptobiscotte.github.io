/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    colors: {
      'colorbg1': '#181c3b',
      'colorbg2': '#090B1B',
      'colorbgLight': '#ffffff',
      'colorbgLight2': '##edeef5',
      'colortext': '#B6CFF0E5',
      'colortextLight': '#484b6a',
      'coloriconLight': '#9394a5',
      'colorcard': '#B6CFF026',
      'colorcardLight': '#f7f7fb',
      'colorborder': '#B6CFF04D'
    },
    borderWidth: {
      '1': '1px',
      '2': '2px'
    },
    fontFamily: {
      customG: ['general', 'sans-serif'],
      customGR: ['generalReg', 'sans-serif'],
      customGRI: ['generalRegI', 'sans-serif']
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

