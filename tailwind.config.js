/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customBlue: '#20A1FF',
        backgroundcolor: '#1E1E1E'
      },
    },
  },
  plugins: [],
}