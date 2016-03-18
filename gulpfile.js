var gulp = require('gulp');
var concat = require('gulp-concat')
var jsTiny = require('gulp-uglify')
var tinyStyles = require('gulp-minify-css')

//Need to define tasks for gulp to run


//Runs when 'gulp' is run in the command line


// This will concatinate and minify all css files
gulp.task('miniCSS', function(){
	console.log('CSS Gulpin!')
	gulp.src('./css/src/**/*.css')
		.pipe( concat('mini.css') )
		.pipe( tinyStyles() )
		.pipe( gulp.dest('./css/dist') )
})


// This will concatinate and minify all js files
gulp.task('miniJS', function(){
	console.log('JS Gulpin!')
	gulp.src('./js/src/**/*.js')
		.pipe( concat('mini.js') )
		.pipe( jsTiny() )
		.pipe( gulp.dest('./js/dist') )
})

// This will watch for updates and automatically apply mini
gulp.task('default', function (){
	console.log('GULP!')
	gulp.watch('./css/src/**/*.css', ['miniCSS'])
	gulp.watch('./js/src/**/*.js', ['miniJS'])
})