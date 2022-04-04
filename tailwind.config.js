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
      fontFamily: {
        'kanit' : ['Kanit', 'sans-serif']
      },
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
        'gray10' : 'rgba(196, 196, 196, 0.5)',
        'gray11' : '#8C8C8C',
        'gray12' : '#DCDCDC',
        'gray13' : '#C4C4C4',
        'gray14' : '#C0C0C0',
        'gary15' : '#F2F2F2',
        'gary16' : '#F5F5F5',
        'gray17' : '#C1C1C1',
        'gray18' : '#EFF0F6',
        'gray19' : '#E9E9E9',
        'gray20' : '#A6A6A6',
        'black' : '#252647',
        'black1' : '#252647',
        'black2' : '#565656',
        'black3' : '#5B5B5B',
        'white1': '#F7F7FC',
        'white2' : '#EBEBEB',
        'white3' : '#E8E8E8',
        'red1' : '#F26464',
        'red2' : '#EB4646',
        'red3' : '#FF5D26',
        'red4' : '#CA1823',
        'red4' : '#DB6A32',
        'green' : '#30C97F',
        'purple1' : '#BEAEFF'
      },
    },
  },
  plugins: [],
}
