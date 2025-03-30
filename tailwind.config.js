/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        18: "72px",
      },
      colors: {
        foreground: "#F1F1F5",
        textchat: "#B6B6B6",
        lightgray: "#767676",
      },
    },
  },
  plugins: [],
};
