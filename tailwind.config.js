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
        base: ['16px', '24px'],
        lg: ['20px', '29.4px'],
        xl: ['25px', '36.75px'],
      },
      colors: {
        'gray-baby': '#1E1E1E',
      },
      fontFamily: {
        DINNext: ["DINNext", "sans-serif"]
      }
    }
  },
  plugins: [],
}
