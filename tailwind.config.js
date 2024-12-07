/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#f5f6fa",
        text: "#333",
        primary: "#2c3e50",
        "primary-dark": "#2563eb",
        secondary: "#3498db;",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      container: {
        center: true,
        padding: "1rem",
      },
      keyframes: {
        scaleX: {
          "0%": { transform: "scaleX(0)" },
          "100%": { transform: "scaleX(1)" },
        },
      },
      animation: {
        scaleX: "scaleX 0.5s ease",
      },
    },
  },
  plugins: [],
};
