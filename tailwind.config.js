/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./src/app/components/**/*.{ts,tsx}", "./src/app/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem"
    },
    extend: {}
  },
  plugins: []
};
