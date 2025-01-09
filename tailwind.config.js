/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        anek: ["Anek Kannada", "sans-serif"],
      },
      fontSize: {
        base: ["17px", "22px"],
      },
      colors: {
        "graphite-black": "#1C1C1E",
        "violet-6": "#7950F2",
      },
    },
  },
  plugins: [],
};
