const gulp =  require('gulp');
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify');

// Gulp function for gulp task styles-libs
function stylesLibs() {
  var cssPaths = [
    './node_modules/normalize.css/normalize.css',
  ]
  return gulp.src(cssPaths)
    .pipe(concat('libs.css'))
    .pipe(autoprefixer({
      browsers: ['> 0.1%'],
      cascade: false
    }))
    .pipe(cleanCSS({
      level: 2
    }))
    .pipe(gulp.dest('./build/css'))
}

// Gulp function for gulp task Custom styles
function styles(){
  return gulp.src('./src/scss/**/*.scss')
    .pipe(autoprefixer({
      browsers: ['> 0.1%'],
      cascade: false
    }))
    .pipe(cleanCSS({
      level: 2
    }))
    .pipe(gulp.dest('./build/css'));
}

// Gulp function for gulp task Customs script
function script(){
  const jsPaths = [
    './src/js/main.js'
  ]
  return gulp.src(jsPaths)
    .pipe(concat('custom.js'))
    .pipe(uglify({
        toplevel:true
    }))
    .pipe(gulp.dest('./build/js'));
}

//Gulp Tasks
gulp.task('styles-libs', stylesLibs);
gulp.task('styles', styles);
gulp.task('script', script);
