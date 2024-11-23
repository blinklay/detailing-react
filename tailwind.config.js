/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: '#dd9933',
        header: '#1d1d1d',
        main: "#fff",
      },
    },
  },
  plugins: [],
}

