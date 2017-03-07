var config = require('./gulp.config')();
var gulp = require('gulp');

/*
 * PLUGINS
 * */
// util - logging, etc
var gutil = require('gulp-util');
// sass to css
var sass = require('gulp-sass');
// browser-sync
var browserSync = require('browser-sync').create();
// useref (reference of files to minification, concatenation, etc)
var useref = require('gulp-useref');
// uglify - minify js files
var uglify = require('gulp-uglify');
// if - conditions
var gulpIf = require('gulp-if');
// cssnano - minify css files
var cssnano = require('gulp-cssnano');
// imagemin - optimize images
var imagemin = require('gulp-imagemin');
// cache
var cache = require('gulp-cache');
// del - to delete files/folders
var del = require('del');
// run-sequence - run tasks in sequence
var runSequence = require('run-sequence');
// angular template cache
var angularTemplatecache = require('gulp-angular-templatecache');
// minifyHtml
var minifyHtml = require('gulp-minify-html');
// concat
var concat = require('gulp-concat');
// annotate
var ngAnnotate = require('gulp-ng-annotate');


/*
 * TASKS
 * */

/******** Development Tasks *********/
// sass to css
gulp.task('sass', function(){
  return gulp.src(config.sass.folder + '/**/**/**/*.scss')
    .pipe(sass())
    .on('error', gutil.log)
    .pipe(gulp.dest(config.css.folder))
    .pipe(browserSync.reload({
      stream: true
    }));
});
// watches - run browser-sync and sass before watch
gulp.task('watch', ['browserSync', 'sass'], function(){
  // sass to css, watch
  gulp.watch(config.sass.folder + '/**/**/**/*.scss', ['sass']);
  // html watch
  gulp.watch(config.html.folder + '/**/**/**/*.html', browserSync.reload);
  // js watch
  gulp.watch(config.js.folder + '/**/**/**/*.js', browserSync.reload);
  // other watchers
});
// browser-sync - for dev
gulp.task('browserSync', function(){
  browserSync.init({
    server: {
      // root of the dev files
      baseDir: config.clientApp
    },
    ghostMode: false
  });
});
// serve|default - serve development files
gulp.task('serve', ['watch'], function(){
  gutil.log(gutil.colors.bold.green('---------- Serving Development Files! ----------'));
});
gulp.task('default', ['serve']);

/******** Production Tasks *********/
// useref
gulp.task('useref', function(){
  return gulp.src(config.html.folder + '/*.html')
    .pipe(useref())
    // minify only if its *.css
    .pipe(gulpIf('*.css', cssnano()))
    // transfer all files to dist
    .pipe(gulp.dest(config.serverApp))

});
// imagemin
gulp.task('images', function(){
  return gulp.src(config.images.folder + '/**/*')
    .pipe(gulp.dest(config.serverApp + '/images'));
});
// fonts
gulp.task('fonts', function(){
  return gulp.src(config.fonts.folder + '/**/*')
    .pipe(gulp.dest(config.serverApp + '/fonts'));
});
// clean - dist
gulp.task('clean-dist', function(){
  return del.sync(config.serverApp);
});
// clean - tmp
gulp.task('clean-tmp', function(){
  return del.sync(config.temp);
});
// cache - clear
gulp.task('cache-clear', function(){
  return cache.clearAll(function(){
    console.log('Cache Cleared!');
  });
});
// build - build production files
gulp.task('build', function(){
  gutil.log(gutil.colors.bold.green('---------- Building Production Files! ----------'));
  return runSequence('clean-dist', 'sass', 'templateCache',
    ['useref', 'images', 'fonts'],
    'ngAnnotate','clean-tmp'
  )
});
// serve-prod - serve production files
gulp.task('serve-build', function(){
  return runSequence('build', function(){
    gutil.log(gutil.colors.bold.green('---------- Serving Production Files! ----------'));
    browserSync.init({
      server: {
        // root of the production files
        baseDir: config.serverApp
      }
    });
  });
});
// templateCache - creating angular template cache
gulp.task('templateCache', function() {
  gutil.log(gutil.colors.blue(('---------- Creating an AngularJS $templateCache ----------')));
  return gulp
    .src(config.htmlTemplates)
    .pipe(minifyHtml({empty: true}))
    .pipe(angularTemplatecache(
      config.templateCache.file,
      config.templateCache.options
    ))
    .pipe(gulp.dest(config.temp));
});
// ngAnnotate - customize $inject and concatenate files
gulp.task('ngAnnotate', function () {
  gutil.log(gutil.colors.blue(('---------- Running ngAnnotate and Concatenating $templateCache in app.js ----------')));
  return gulp.src([config.js.folder +'/**/*.module.js', config.temp + config.templateCache.file, config.js.folder + '/**/*.js' ])
    .pipe(concat('app.js'))
    .pipe(ngAnnotate())
    .pipe(gulpIf('*.js', uglify()))
    .pipe(gulp.dest(config.serverApp + '/scripts/'));
});