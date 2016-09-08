/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-09-07 16:22:36
 * @version $Id$
 */

var gulp = require('gulp');

var connect = require('gulp-connect');
gulp.task('server',function(){
	connect.server({
		root:'',
		livereload:true
	});
})