/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0F1115",
        surface: "#151821",
        surfaceLight: "#1B1F2A",
        border: "#2A2F3A",
        primary: "#3ECF8E",
        textPrimary: "#FFFFFF",
        textSecondary: "#B0B3C0",
        textMuted: "#6B7280",
      },
      borderRadius: {
        xl: "12px",
        "2xl": "16px",
      },
    },
  },
  plugins: [],
};