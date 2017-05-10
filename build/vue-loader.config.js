module.exports = {
<<<<<<< HEAD
	// 是否保留HTML标签之间的空格
=======
  extractCSS: process.env.NODE_ENV === 'production',
>>>>>>> vuejs/master
  preserveWhitespace: false,
  postcss: [
    require('autoprefixer')({
      browsers: ['last 3 versions']
    })
  ]
}
