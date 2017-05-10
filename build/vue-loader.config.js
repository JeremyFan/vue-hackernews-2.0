module.exports = {
	// 是否保留HTML标签之间的空格
  preserveWhitespace: false,
  postcss: [
    require('autoprefixer')({
      browsers: ['last 3 versions']
    })
  ]
}
