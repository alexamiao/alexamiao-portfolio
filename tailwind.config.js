/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50:  "#F8F5FA",
          100: "#F4EFF6",
          200: "#EDE6F0",
          300: "#E2D7E7",
          400: "#D9C6DB", // main lavender bg
          500: "#B9A3BF", // primary accent
          600: "#8E93B7",
          700: "#7C5F86",
          800: "#5F4369",
          900: "#40294B",
        },
        accent: {
          400: "#E26D8C",
          500: "#D85C7F",
        },
        ink: {
          primary: "#1F2937",
          secondary: "#475569",
          muted: "#64748B",
        },
      },
    },
  },
  plugins: [],
};
