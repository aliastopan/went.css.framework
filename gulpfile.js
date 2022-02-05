const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function build() {
  return src('went/**/*.scss')
    .pipe(sass())
    .pipe(dest('css'));
}

function update() {
  watch(['went/**/*.scss'], build);
}

exports.default = series(build, update);