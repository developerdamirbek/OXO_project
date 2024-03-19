/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        screens: {
          lg: "1150px"
        },
        padding: "20px"
      },
      colors: {
        "dark": "#19191C",
        "vivaldi-red": "#EA3838",
        "magnesium": "#C2C2C2",
        "gray": "#979C9E",
        "primary": "#F6F6F6",
        "black-out": "#222222",
        "dugong": "#707070",
        "dark-void":"#131418",
        "coarse-wool":"#181D27",
        "argent": "#888888",
        "chefs": "#F2F4F5"
      },
      boxShadow: {
        "header": "0px 1px 6px 0px rgba(0, 0, 0, 0.08)",
        "login": "1px 1px 8px 0px rgba(0, 0, 0, 0.15)"
      }
    },
  },
  plugins: [],
}