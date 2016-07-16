var gulp = require('gulp'),
	uglify = require('gulp-uglify'),
	concat = require('gulp-concat'),
	cssmin = require('gulp-cssmin'),
	clean  = require('gulp-clean');

gulp.task('buildScripts', function(){
	console.log("Start build scripts");
	gulp.src('js/*.js')
		.pipe(uglify())
		.pipe(gulp.dest('build/js'));
});

gulp.task('concatScripts', function() {
	console.log("Start concat scripts");
	gulp.src('build/js/*.js')
    	.pipe(concat('app.js'))
    	.pipe(gulp.dest('.'));
});

gulp.task('buildScriptsLibraries', function(){
	console.log("Start build scripts libraries");
	gulp.src('libraries/*.js')
		.pipe(uglify())
		.pipe(gulp.dest('build/js/libraries'));
});

gulp.task('concatScriptsLibraries', function() {
	console.log("Start concat scripts libraries");
	gulp.src('build/js/libraries/*.js')
    	.pipe(concat('vendor.js'))
    	.pipe(gulp.dest('.'));
});

gulp.task('buildStyles', function(){
	console.log("Start build styles");
	gulp.src('css/*.css')
		.pipe(cssmin())
		.pipe(gulp.dest('build/css'));
});

gulp.task('concatStyles', function() {
	console.log("Start concat styles");
	gulp.src('build/css/*.css')
    	.pipe(concat('app.css'))
    	.pipe(gulp.dest('.'));
});

gulp.task('buildStylesLibraries', function(){
	console.log("Start build styles libraries");
	gulp.src('libraries/*.css')
		.pipe(cssmin())
		.pipe(gulp.dest('build/css/libraries'));
});

gulp.task('concatStylesLibraries', function() {
	console.log("Start concat styles libraries");
	gulp.src('build/css/libraries/*.css')
    	.pipe(concat('vendor.css'))
    	.pipe(gulp.dest('.'));
});

gulp.task('clean', function () {
	gulp.src('app.*', {read: false})
        .pipe(clean());
    gulp.src('vendor.*', {read: false})
        .pipe(clean());  
  	gulp.src('build', {force: true})
        .pipe(clean());
})

gulp.task("default", [ 
	'buildScripts', 
	'concatScripts', 
	'buildScriptsLibraries', 
	'concatScriptsLibraries', 
	'buildStyles', 
	'concatStyles', 
	'buildStylesLibraries',
	'concatStylesLibraries'
]); 
