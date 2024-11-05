/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "bg": "url(/src/assets/bg.webp)",
        "bg1": "url(/src/assets/img9.png)",
        "bg2": "url(/src/assets/img10.png)",
        "bg3": "url(/src/assets/img11.png)",
        "bg4": "url(/src/assets/Mask group1.png)",
        "bg5": "url(/src/assets/image 22.jpg)",
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif']
      }
    },
  },
  plugins: [],
}