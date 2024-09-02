/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        md: "2rem",
        xl: "3rem",
      },
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-metropolis)"],
      },
    },
  },
  plugins: [],
};
