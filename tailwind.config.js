/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        sm: ['14px', '21px'],
        xbase: ['16px', '24px'],
        base: ['17px', '25px'],
        base2x: ['18px', '27px'],
        lg: ['20px', '29.4px'],
        l2g: ['20px', '30px'],
        l: ['24px', '30px'],
        xl: ['25px', '36.75px'],
        sxl: ['30px', '36px'],
        xxl: ['36px', '45px'],
        x2l: ['48px', '71px'],
        bigxl: ['50px', '74px'],
      },
      colors: {
        'gray-baby': '#FAFAFA',
        'gray-light': '#F7F7F7',
        'gray-txt': '#808686',
        'gray-txt2': '#606564',
        'gray-txt3': '#A0A8A7',
        'gray-border': '#E9E9E9',
        'gray-darkTxt': '#404343',
        'gray-dark': '#202221',
        'light-gray': '#EEEEEE',
        'gray-overlay': '#1D1D1D61',
        'green': '#5DD5C4',
        'orange': '#FF9F4B'
      },
      fontFamily: {
        DINNext: ["DINNext", "sans-serif"]
      }
    }
  },
  plugins: [],
}
