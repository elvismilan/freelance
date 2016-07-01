var gulp = require('gulp'),
	sass = require('gulp-sass'),
	concat = require('gulp-concat'),
	watch = require('gulp-watch'),
	minify_css = require('gulp-minify-css'),
	prefixer = require('gulp-autoprefixer'),
	imagemin = require('gulp-imagemin'),
	pngquant = require('imagemin-pngquant'),
	plumber = require('gulp-plumber'),
	notify = require('gulp-notify'),
	jshint = require('gulp-jshint'),
	uglify = require('gulp-uglify'),
	broserSync = require('browser-sync');

//---------------------------------------

var src = {
	sass: 'sass/**/*.sass',
	css: 'css/*.css',
	js: 'js/**/*.js'
};

var output = {
	css: 'public/css/',
	js: 'public/js/',
	html: 'public/index.html',
	min_css: 'app.min.css',
	min_js: 'app.min.js'
};

//-----------------------------

var onError = function(err) {
	console.log(err);
	this.emit('end');
};

// SASS to CSS
gulp.task('sass', function(){
	
	return gulp.src([src.sass, src.css])
		.pipe(plumber({
			errorLandeler: onError
		}))
		.pipe(sass())
		.pipe(prefixer('last 2 versions'))
		.pipe(concat(output.min_css))
		.pipe(gulp.dest(output.css))
		.pipe(minify_css())
		.pipe(gulp.dest(output.css))
		.pipe(broserSync.reload({stream: true}));
});

//-----------------------------

// Compile JS
gulp.task('scripts', function() {
	
	return gulp.src(src.js)
		.pipe(plumber({
			errorLandeler: onError
		}))
		.pipe(uglify())
		.pipe(concat(output.min_js))
		.pipe(gulp.dest(output.js))
		.pipe(broserSync.reload({stream: true}));
});

//-----------------------------

// Watch
gulp.task('watch', function() {
	broserSync.init({
		//proxy: 'elvismilan'
		server: './public',
		port: 9000
	});
	gulp.watch(src.js, ['scripts']);
	gulp.watch(src.sass, ['sass']);
	gulp.watch(output.html).on('change', broserSync.reload);
});

//-----------------------------

// Default 
gulp.task('default', ['watch', 'sass', 'scripts']);