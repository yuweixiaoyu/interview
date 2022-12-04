module.exports = {
  plugins: {
    'postcss-pxtorem': {
      rootValue: 192, // 屏宽/10 = 1rem
      propList: ['*'] // 要转换的样式属性=》*代表所有
    }
  }
}