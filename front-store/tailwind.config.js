import { DEFAULT_VERSION } from 'redux-persist';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primaryColor: "#F5F5F5",
        secondryColor: "#4D4D4D",
        titleColor: "#F94C10",
        fontColor: "#1B1A17",
      },
      container: {
        center: true,
        padding:{
          DEFAULT :"1rem",
          sm: "2rem",
        }
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    // require('@tailwindcss/forms'),
  ],
}