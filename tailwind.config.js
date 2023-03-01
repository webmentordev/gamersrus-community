/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    screens: {
      "720": {
        "max": "720px"
      },
      "620": {
        "max": "620px"
      }
    },
    extend: {
      colors: {
        "dark": "#1b1b1b"
      }
    }
  },
  plugins: [],
}