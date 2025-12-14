/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./src/**/*.{js,html}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50:  '#ebf5ff',   // very light blue
          100: '#d0e4ff',   // light blue
          500: '#00264D',   // deep blue
          700: '#000B18',   // darker blue for headings / emphasis
        },
        neutralbg: '#f7f7f7', // clean light gray for backgrounds
      },
      fontFamily: {
        inter: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}