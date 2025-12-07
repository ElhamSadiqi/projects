/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"], // look inside src for all html/js files
  darkMode: 'class', // dark mode only applies when body/html has 'dark' class
  theme: {
    extend: {
      colors: {
        'darker': '#0e0e0e',
        'Lavender': '#E6DDF7',
        'lighter-dark': '#1e1e1e',
        'background': '#FAFAFA'
      },
    },
  },
  plugins: [],
}
