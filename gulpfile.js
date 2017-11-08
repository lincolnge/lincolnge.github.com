var gulp        = require('gulp');
var browserSync = require('browser-sync');
var sass        = require('gulp-sass');
var prefix      = require('gulp-autoprefixer');
var cp          = require('child_process');
var imagemin    = require('gulp-imagemin');
var jpegtran    = require('imagemin-jpegtran');
var pngquant    = require('imagemin-pngquant');
var imageResize = require('gulp-image-resize');
var less        = require('gulp-less');

var messages = {
    jekyllBuild: '<span style="color: grey">Running:</span> $ jekyll build'
};

// gulp.task('copy', () =>
//     gulp.src('files/images/**/*')
//       .pipe(gulp.dest('files/images_ori'))
// );

// 任务：压缩jpg
gulp.task('jpgmin', () =>
    gulp.src(['files/images_ori/**/*.jpg', 'files/images_ori/**/*.jepg'])
      .pipe(imagemin({
          progressive: true,
          use: [jpegtran()]
      }))
      .pipe(gulp.dest('files/images'))
);

// 任务：压缩png
gulp.task('pngmin', () =>
    gulp.src('files/images_ori/**/*.png')
        .pipe(imagemin({
            quality: '65-80',
            speed: 4,
            use:[pngquant()]
        }))
        .pipe(gulp.dest('files/images'))
);

gulp.task('imagemin2', ['jpgmin', 'pngmin'])

/**
 * 安装必要的依赖。
 * brew install imagemagick
 * brew install graphicsmagick
 **/
gulp.task('resize', function () {
    return gulp.src('files/images_ori/**/*')
        .pipe(imageResize({
            width: 700
        }))
        .pipe(gulp.dest('files/images'));
});

gulp.task('imagemin', () =>
    gulp.src('files/images_ori/**/*')
        .pipe(imagemin({
            progressive: true, // 无损压缩JPG图片
        }))
        .pipe(gulp.dest('files/images'))
);

gulp.task('image', () =>
    gulp.src('files/images_ori/**/*')
        .pipe(imageResize({
            width: 700
        }))
        .pipe(imagemin({
            progressive: true, // 无损压缩JPG图片
            use:[pngquant()],
        }))
        .pipe(gulp.dest('files/images'))
);

/**
 * Build the Jekyll Site
 */
gulp.task('jekyll-build', function (done) {
    browserSync.notify(messages.jekyllBuild);
    return cp.spawn('jekyll', ['build'], {stdio: 'inherit'})
        .on('close', done);
});

/**
 * Rebuild Jekyll & do page reload
 */
gulp.task('jekyll-rebuild', ['jekyll-build'], function () {
    browserSync.reload();
});

/**
 * Wait for jekyll-build, then launch the Server
 */
gulp.task('browser-sync', ['css', 'jekyll-build'], function() {
    browserSync({
        server: {
            baseDir: '_site'
        },
        port: 3003
    });
});

/**
 * Compile files from _scss into both _site/css (for live injecting) and site (for future jekyll builds)
 */

gulp.task('less', function () {
    return gulp.src('assets/themes/twitter-lin/less/*.less')
        .pipe(less({}))
        .pipe(prefix(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
        .pipe(gulp.dest('_site/assets/themes/twitter-lin/css'))
        .pipe(browserSync.reload({stream:true}))
        .pipe(gulp.dest('assets/themes/twitter-lin/css'));
});

// 不再用 sass 啦。
gulp.task('sass', function () {
    return gulp.src('assets/themes/twitter-lin/scss/*.scss')
        .pipe(sass({
            includePaths: ['scss'],
            onError: browserSync.notify
        }))
        .pipe(prefix(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
        .pipe(gulp.dest('_site/assets/themes/twitter-lin/css'))
        .pipe(browserSync.reload({stream:true}))
        .pipe(gulp.dest('assets/themes/twitter-lin/css'));
});

gulp.task('css', function () {
    // return gulp.run('sass');
    return gulp.run('less');
});

/**
 * Watch scss files for changes & recompile
 * Watch html/md files, run jekyll & reload BrowserSync
 */
gulp.task('watch', function () {
    gulp.watch('assets/themes/twitter-lin/less/*.less', ['css']);
    gulp.watch(['*.md', '_layouts/*.html', '_posts/**/*', '**/**.html', '_config.yml', 'assets/themes/twitter-lin/js/*.js'], ['jekyll-rebuild']);
});

/**
 * Default task, running just `gulp` will compile the sass,
 * compile the jekyll site, launch BrowserSync & watch files.
 */
gulp.task('default', ['browser-sync', 'watch']);
