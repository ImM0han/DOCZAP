/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        coral: "#FF6B6B",
        yellow: "#FFD93D",
        mint: "#6BCB77",
        sky: "#4ECDC4",
        violet: "#A29BFE",
        pink: "#FD79A8",
        bg: "#FFF9F0",
        card: "#FFFFFF",
        text: "#2D2D2D",
        muted: "#9B9BAE",
        border: "#EEEAF5",
      },
    },
  },
  plugins: [],
};