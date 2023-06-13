/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gretel: "#adcbe3",
        gretelHover: "#86bec6",
        gretelReset: "#203a69",
      },
      container: {
        center: true,
      },
    },
  },
  plugins: [],
};
