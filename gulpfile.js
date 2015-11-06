var gulp = require('gulp'),
  postcss = require('gulp-postcss'),
  autoprefixer = require('autoprefixer'),
  sass = require('gulp-sass'),
  sourcemaps = require('gulp-sourcemaps'),
  minify = require('gulp-cssnano'),
  rename = require('gulp-rename'),
  spawn = require('child_process').spawn,
  livereload = require('gulp-livereload'),
  sourcemaps = require('gulp-sourcemaps');

var browsers = [
  autoprefixer({
    browsers: ['last 2 versions', 'ie >= 9']
  })
];

var sassSettings = {
  outputStyle: 'compressed',
  precision: 10,
  sourcemap: true,
  errLogToConsole: true
};

// Sass compilation
gulp.task('sass:dev', function() {
  return gulp.src('src/assets/*.scss', sassSettings)
    .pipe(sourcemaps.init())
      .pipe(sass(sassSettings))
      .pipe(postcss(browsers))
      .pipe(minify())
      .pipe(rename({ suffix: '.min' }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('src/assets/css'))
});

// Copy component HTML to demo folder
gulp.task('components', function() {
  return gulp.src('src/assets/components/**/*.html')
    .pipe(gulp.dest('src/demos/components/'))
});

// Copy page HTML to demo folder
gulp.task('pages', function() {
  return gulp.src('src/assets/pages/*.html')
    .pipe(gulp.dest('src/demos/pages/'))
});

// Run Jekyll Build
gulp.task('jekyll-build', function(done) {
  spawn('jekyll', ['build'], { stdio: 'inherit', cwd: 'src' }).on('close', done);
});

// Run Jekyll Serve
gulp.task('jekyll-serve', function(done) {
  spawn('jekyll', ['serve'], { stdio: 'inherit', cwd: 'src' }).on('close', done);
});

// Watch
gulp.task('watch', function() {
  livereload.listen();

  // Watch Sass
  gulp.watch(['src/assets/**/*.scss'], ['sass:dev']);
  
  // Watch Component HTML
  gulp.watch(['src/assets/components/**/*.html'], ['components']);

  // Watch Page HTML
  gulp.watch(['src/assets/pages/*.html'], ['pages']);

  // LiveReload
  gulp.watch('dist/**/*.html').on('change', livereload.changed);
});

// Default task
gulp.task('default', ['sass:dev', 'components', 'pages'], function() {});

// Serve task
gulp.task('serve', ['default', 'jekyll-serve'], function() {});