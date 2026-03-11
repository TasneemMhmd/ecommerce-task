/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FA7070",
        border:'#EAEAEA',
        text: "#111111",
        badge: "#F4F4F4",
      },
    },
  },
  plugins: [],
}