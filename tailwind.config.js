/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#0d6efd",

          "secondary": "#70ea8d",

          "accent": "#44d9ff",

          "neutral": "#25272D",

          "base-100": "#f8f9fa",

          "info": "#62B4EF",

          "success": "#24CC6A",

          "warning": "#EFB14E",

          "error": "#FD6872",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}