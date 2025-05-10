/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#8B4513', // coklat kayu
          light: '#A0522D',
        },
        secondary: {
          DEFAULT: '#F5F5DC', // krem
          dark: '#E6E6CA',
        },
        accent: {
          DEFAULT: '#B22222', // merah bata
          light: '#CD5C5C',
        },
      },
      fontFamily: {
        sans: ['Poppins', 'Nunito', 'Quicksand', 'sans-serif'],
      },
    },
  },
  plugins: [],
}