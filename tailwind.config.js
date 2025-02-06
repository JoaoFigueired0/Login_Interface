/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",  // Procura no arquivo HTML
    "./src/**/*.{js,jsx,ts,tsx}"  // Procura em todos os arquivos JSX, JS, TS, e TSX dentro da pasta src
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
