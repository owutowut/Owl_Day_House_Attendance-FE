module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
      colors:{
        'blue':'#252647',
        'blue2' : '#303030',
        'yellow' : '#F4B01A',
        'yellow2' : '#E89F00',
        'gray' : '#CBCBCB',
        'gray2' : '#C5C5C5',
        'gray3' : '#CECECE',
        'gray3' : '#E5E5E5',
        'gray4' : '#707070',
        'gray5' : '#E1E1E1',
        'gray6' : '#89898980',
        'gray7' : '#6C6C6C',
        'gray8' : '#9F9F9F',
        'gray9' : '#D4D4D4',
        'black' : '#252647',
        'black1' : '#252647',
        'black2' : '#565656',
        'white1': '#F7F7FC',
        'red1' : '#F26464',
        'red2' : '#EB4646',
        'red3' : '#FF5D26',
        'green' : '#30C97F'
      }
    },
  },
  plugins: [],
}
