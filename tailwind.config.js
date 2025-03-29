/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        "sm-max": { max: "640px" },
      },
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
        "graphite-black2": "#212529",
        "graphite-black3": "#343a40",
        "graphite-black4": "#dee2e6",
        "violet-6": "#5f3dc4",
        "white-gray": "#f1f3f5",
        "charcoal-gray": "#252525",
      },
    },
  },
  plugins: [],
};
