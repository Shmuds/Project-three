var gulp = require('gulp');
var uglify = require("gulp-uglify");
var rename = require("gulp-rename");
var concat = require('gulp-concat');
var browserSync = require('browser-sync').create();
var eslint = require("gulp-eslint");
var sass = require("gulp-sass");
var autoprefixer = require('gulp-autoprefixer');
var cssnano = require("gulp-cssnano");


gulp.task("watch", function () {
  gulp.watch("./src/scss/*.scss", ['sass']);
  gulp.watch("./src/js/*.js", ["scripts", "reload"]);
});

gulp.task('styles', function() {
  return gulp.src('./dist/css/*.min.css')
    .pipe(concat('stylesFinal.min.css'))
    .pipe(gulp.dest('./dist/css/'));
});

gulp.task('scripts', function() {
  return gulp.src('./src/js/*.js')
    .pipe(concat('scripts.css'))
    .pipe(gulp.dest('./dist/js/'));
});

gulp.task("sass", function(){
  gulp.src(["./src/scss/reset.scss","./src/scss/style.scss","./src/scss/tablet.scss"])
    .pipe(sass())
    .pipe(autoprefixer({
      browsers: ['last 2 versions']
    }))
    .pipe(gulp.dest("./dist/css"))
    .pipe(concat('stylesFinal.css'))
    .pipe(cssnano())
    .pipe(rename({extname: ".min.css"}))
    .pipe(gulp.dest('./dist/css'))
    .pipe(browserSync.reload({stream:true}));
});

gulp.task('reload', function(){
  browserSync.reload();
});
gulp.task("browser-sync", function(){
  browserSync.init({
    server:{
      baseDir: "./"
    }
  });
});





gulp.task('compress', function (cb) {
  pump([
        gulp.src('./src/js/*.js'),
        uglify("scirpts.js"),
        gulp.dest('./dist/js/')
    ],
    cb
  );
});
gulp.task('minify-css', () => {
  return gulp.src('styles/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('./dist/css/'));
});
gulp.task('lint', () => {
    return gulp.src(['**/*.js','!node_modules/**'])

        .pipe(eslint())

        .pipe(eslint.format())

        .pipe(eslint.failAfterError());
});

gulp.task('lint', function () {
    // This will only run if the lint task is successful...
});
gulp.task("default", ['watch', 'browser-sync']);
