var gulp = require('gulp');
var postcss = require('gulp-postcss');
var tailwindcss = require('tailwindcss');
var autoprefixer = require('autoprefixer')
var cssnano = require('cssnano');

gulp.task('css', function() {
  return gulp.src('source/stylesheets/site.css')
    .pipe(postcss([
      tailwindcss('./tailwind.js'),
      autoprefixer(),
      cssnano({ preset: 'default' }),
    ]))
    .pipe(gulp.dest('./.tmp/stylesheets'));
});

gulp.task('build', ['css']);

gulp.task('default', ['css'], function() {
  gulp.watch('source/stylesheets/**/*.css', ['css']);
});
