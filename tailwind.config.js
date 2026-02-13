/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'france-blue': '#000091',
        'france-red': '#E1000F',
      }
    },
  },
  plugins: [],
}
