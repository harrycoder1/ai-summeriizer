/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
fontFamily:{
  satoshi :["Sathoshi" , "san-serif"],
  inter:['Inter', "san-serif"]
}

    },
  },
  plugins: [],
}