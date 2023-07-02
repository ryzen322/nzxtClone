/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "Main-Color": "#313235",
        "Secondary-Color": "#8A00FC",
      },
    },
  },
  plugins: [],
};
