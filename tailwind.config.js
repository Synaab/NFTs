/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'DMSans': ['DM Sans', 'sans-seri'],
        'OpenSans': ['Open Sans', 'sans-seri'],
        "Sitka" : "Sitka",
        'Ruda': ['Ruda', 'sans-serif'],
      },
      colors:{
        'txt':{
          DEFAULT: "#DEDEDE",
        } ,
      },
      gridTemplateColumns:{
        '4Hot': 'repeat(4, minmax(0,17.625rem))',
        '3Hot': 'repeat(3, minmax(0,17.625rem))',
        '2Hot': 'repeat(2, minmax(0,17.625rem))',
        '1Hot': 'repeat(1, minmax(0,17.625rem))',
      }
    },
  plugins: [],
}
}
