/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "text-yellow": "#E9BA00",
        "gray-dark": "#1E1E1E",
        "gray-light": "#606060",
        "text-dark": "#1E1E1E",
        "text-light": "#C4C4C4",
        "border-gray": "#E3E3E3",
      },
    },
  },
  plugins: [],
};
