/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './*.html',           // root index.html
    './feed/**/*.html',   // feed/index.html
    './profile/**/*.html' // profile/index.html
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

