/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "320px",
        sm: "375px",
        sml: "500px",
        md: "667px",
        mdl: "768px",
        lg: "960px",
        lgl: "1024px",
        xl: "1280px",
      },
      fontFamily: {
        bodyFont: ["Poppins", "sans-serif"],
        titleFont: ["Montserrat", "sans-serif"],
      },
      colors: {
        bodyColor: "#F4F4F4",
        cardColor: "#E5E5E5",
        textColor: "#343A40",
        lightText: "#343A40",
        boxBg: "linear-gradient(145deg, #1e2024, #23272b)",
        designColor: "#6d7be5",
        formColor: "#f4f4f4",
      },
      boxShadow: {
        shadowOne: "   -0.5px -0.5px 1px #262a2e",
      },
    },
  },
  plugins: [],
};
