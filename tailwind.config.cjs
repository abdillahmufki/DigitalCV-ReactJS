/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      pointerEvents: {
        none: "none",
      },
      userSelect: {
        none: "none",
      },
    },
  },
  variants: {
    extend: {
      pointerEvents: ["responsive"],
      userSelect: ["responsive"],
    },
  },
  plugins: [require("daisyui")],
};
