// css 构建
const
    gulp = require('gulp'),
    // 自动同步浏览器插件
    browserSync = require('browser-sync'),
    // 补全前缀
    autoprefixer = require('gulp-autoprefixer'),
    // 压缩javasricpt
    uglify = require('gulp-uglify'),
    // less 插件
    less = require('gulp-less'),
    // 抛出异常 且 不终止watch事件
    plumber = require('gulp-plumber'),
    // 错误提示
    notify = require('gulp-notify'),
    // 压缩
    cssnano = require('cssnano'),
    // postcss 插件
    postcss = require('gulp-postcss'),
    // 重命名
    rename = require('gulp-rename'),
    // map
    sourcemaps = require('gulp-sourcemaps'),
    // 删除
    del = require('del'),
    // 同步运行任务插件
    runSequence = require('run-sequence');


// 自动更新浏览器任务
gulp.task('browserSync', () => {
    browserSync.init({
        server: {
            baseDir: '.'
        }
    })
});

gulp.task('less', () => {
    return gulp.src(['src/less/*.less'])
        .pipe(plumber({ errorHandler: notify.onError('Error: <%= error.message %>') }))
        .pipe(sourcemaps.init())
        .pipe(less())
        .pipe(sourcemaps.write({ includeContent: false }))
        .pipe(autoprefixer({ browsers: ['last 4 versions', '> 1%', 'opera 12.1', 'bb 10', 'android 4'] }))
        .pipe(postcss([cssnano({ reduceIdents: { keyframes: false } })]))
        .pipe(rename({ suffix: '.min' }))
        .pipe(sourcemaps.write('/'))
        .pipe(gulp.dest('dist/css'));
});

gulp.task('js', () => {
    return gulp.src(['src/js/*.js', 'src/js/**/*.js'])
        .pipe(plumber())
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
})

gulp.task('clean', () => {
    return del.sync('dist');
});

gulp.task('watch', ['browserSync', 'less'], () => {
    gulp.watch(['src/less/*.less', 'src/less/**/*.less'], ['less', browserSync.reload]);
    gulp.watch(['src/js/*.js', 'src/js/**/*.js'], ['js', browserSync.reload]);
    gulp.watch(['docs/*.md', 'docs/**/*.md'], browserSync.reload);
    gulp.watch('index.html', browserSync.reload);
});

// gulp 默认执行任务
gulp.task('default', (callback) => {
    runSequence(['clean', 'less', 'js', 'browserSync', 'watch'], callback);
});