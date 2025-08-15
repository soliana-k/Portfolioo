/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}*'
  ],
  theme: {
    extend: {
      backgroundImage:{
        'bronze-teal': 'linear-gradient(to right, #78350F, #134E4A)',
      }
    },
  },
  plugins: [],
}

