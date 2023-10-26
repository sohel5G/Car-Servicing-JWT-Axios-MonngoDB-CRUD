/** @type {import('tailwindcss').Config} */
export default {
  daisyui: {
    themes: []
  },
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF3811'
      }
    }
    
  },
  plugins: [
    require("daisyui")
  ],
}

