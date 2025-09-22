/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        bronze: "#b08d57"
      },
      fontFamily: {
        display: ['ui-sans-serif', 'Inter', 'system-ui', 'sans-serif'],
        body: ['ui-sans-serif', 'Inter', 'system-ui', 'sans-serif']
      }
    },
  },
  plugins: [],
}
