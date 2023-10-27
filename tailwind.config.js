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
        primary: { "myPrimaryColor": '#FF3811', "50": "#eff6ff", "100": "#dbeafe", "200": "#bfdbfe", "300": "#ff38116b", "400": "#60a5fa", "500": "#FF3811", "600": "#FF3811", "700": "#FF3811", "800": "#FF3811", "900": "#FF3811", "950": "#FF3811" }
      }
    }

  },
  plugins: [
    require("daisyui")
  ],

});



