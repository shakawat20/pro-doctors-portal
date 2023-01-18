/** @type {import('tailwindcss').Config} */


module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        
        doctorsTheme: {
          primary: "#0FCFEC",
          secondary: "#19D3AE",
          accent: "#3A4256",
          hope:"red",
          neutral: "#3d4451",
          "base-100": "#ffffff",
          // 'background': "url('/src/assets/images/bg.png')"
        },
      },

      "cupcake",
    ],
  },
  plugins: [require("daisyui")],

}
