/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        anek: ["Anek Kannada", "sans-serif"],
        livvic: ['"Livvic"', "sans-serif"],
        mplus: ['"M PLUS 2"', "sans-serif"],
      },
      fontSize: {
        base: ["17px", "22px"],
      },
      margin: {
        1: "-0.32rem",
      },
      colors: {
        "graphite-black": "#1C1C1E",
        "violet-6": "#7950F2",
        "white-gray": "#f1f3f5",
        "charcoal-gray": "#252525",
      },
    },
  },
  plugins: [],
};
