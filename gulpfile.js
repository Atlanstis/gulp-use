const { src, dest } = require('gulp')
const cleanCss = require('gulp-clean-css')
const rename = require('gulp-rename')

exports.default = () => {
  // 可以使用通配符，批量选择文件
  return src('src/*.css')
    .pipe(cleanCss()) // 先经过转换
    .pipe(rename({ extname: '.min.css' }))
    .pipe(dest('dist'))
}
