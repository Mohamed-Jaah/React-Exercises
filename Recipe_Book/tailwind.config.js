/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#fff1f3",
          100: "#ffe1e6",
          200: "#ffc7d1",
          300: "#ff9fb0",
          400: "#fb6f8b",
          500: "#f0135f", // primary accent (matches screenshots)
          600: "#d40e52",
          700: "#b10a44",
          800: "#8f0938",
          900: "#780a32",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Poppins", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
