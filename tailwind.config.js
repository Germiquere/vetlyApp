/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      transitionTimingFunction: {
        customTransition: "cubic-bezier(0.34, 1.56, 0.64, 1)",
      },
      colors: {
        primary: "#ffffff",
        secondary: "#0D3460",
        tertiary: "#C5C5C5",
        purple: "#5A1F88",
        "black-200": "#333333",
        "white-100": "#f2f2f2",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
    },
  },
  plugins: [],
};
