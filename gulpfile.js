var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var babelify = require("babelify");
var reactify = require("reactify");

gulp.task('default', ['browserify', 'html', 'watch']);

gulp.task('browserify', function() {
	var b = browserify({
		entries: './app.js',
		debug: true
	})
	.transform(babelify, { global: true })
	.bundle()
	.pipe(source('app.js'))
	.pipe(buffer())
	.pipe(gulp.dest('./dist'));
});

gulp.task('watch', function() {
	gulp.watch(['./app.js', './components/**.js', './index.html'], ['browserify']);
	gulp.watch(['./index.html'], ['html']);
});

gulp.task('html', function() {
	return gulp.src("./index.html")
	.pipe(gulp.dest("dist"));
});