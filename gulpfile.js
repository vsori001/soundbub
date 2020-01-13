var gulp = require('gulp');
var less = require('gulp-less');
var browsersync = require('browser-sync').create();

gulp.task('watch', ['less'], function() {
  browsersync.init({
  	server: {
  		baseDir: ['./']
  	}
  });
  gulp.watch('less/*.less', ['less', browsersync.reload]);
  gulp.watch('index.html', ['less', browsersync.reload]);
});

gulp.task('less', function(){
	gulp.src('less/main.less')
		.pipe(less())
		.pipe(gulp.dest('css'))
		.pipe(browsersync.stream());
});


gulp.task('default', ['watch']);