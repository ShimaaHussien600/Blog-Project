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
        lg: ['20px', '29.4px'],
        xl: ['25px', '36.75px'],
      },
      colors: {
        'gray-baby': '#FAFAFA',
        'gray-light': '#F7F7F7',
        'gray-txt': '#808686',
        'gray-dark': '#202221',
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
