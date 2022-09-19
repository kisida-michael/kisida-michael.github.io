/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    
    linearBorderGradients: {
      directions: { // defaults to these values
        't': 'to top',
        'tr': 'to top right',
        'r': 'to right',
        'br': 'to bottom right',
        'b': 'to bottom',
        'bl': 'to bottom left',
        'l': 'to left',
        'tl': 'to top left',
      },
      colors: { // defaults to {}
        'red': '#f00',
        'red-blue': ['#f00', '#00f'],
        'blue-green': ['#0000ff', '#00FF00'],
        'red-green-blue': ['#f00', '#0f0', '#00f'],
        'black-white-with-stops': ['#000', '#000 45%', '#fff 55%', '#fff'],
        'custom-gradient':["#45B9E6", "#8E54E9"],
      },
      background: {
        'gray-50': '#F9FAFB',
        'gray-900':'#292e38',
      },
      borders: { // defaults to these values (optional)
        '1': '1px',
        '2': '2px',
        '4': '4px',
      },
    },
    extend: {
      backgroundImage: {
        "about-campus": "url('./components/img/campus.jpg')",
      },
      fontFamily: {
        'inter': ["Inter", "sans-serif"],
      },
      colors: {
        'blue-gray': '#D4E4F9',
        'mid-blue': '#6a9fe8',
        'custom-blue':'#45B9E6',
        'custom-purple':'#8E54E9',
      }
    },
  },
  plugins: [ require('tailwindcss-border-gradient-radius'),],
}

