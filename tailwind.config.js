// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        R80F: ['Rubik 80s Fade', 'serif'],
        RGP: ['Rubik Glitch Pop', 'serif'],
      },
    },
  },
  plugins: [],
};
