/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        'clamp-base': 'clamp(1rem, 2vw + 1rem, 2rem)',
        'clamp-lg': 'clamp(1.25rem, 2.5vw + 1.25rem, 2.5rem)',
      }
    },
  },
  plugins: [],
}

