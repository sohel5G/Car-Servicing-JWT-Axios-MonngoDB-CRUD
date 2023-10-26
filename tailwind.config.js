// /** @type {import('tailwindcss').Config} */
// export default {

//   daisyui: {
//     themes: []
//   },
//   darkMode: 'class',
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {
//       colors: {
//         primary: '#FF3811'
//       }
//     }

//   },
//   plugins: [
//     require("daisyui")
//   ],

// }



const withMT = require("@material-tailwind/react/utils/withMT");
export default withMT({

  daisyui: {
    themes: []
  },
  darkMode: 'class',

  content: ["./src/**/*.{js,jsx,ts,tsx}"],
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

});



