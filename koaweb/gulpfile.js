const gulp = require('gulp');
const babel = require('gulp-babel');

gulp.task('default',['praise'],() =>{//先做praise,然后做default
	gulp.watch(['src/**/*.es','!src/public/*/*.es'],['praise'])//watch后依然praise
}	
);

gulp.task('praise',()=>{
	return gulp.src(['src/**/*.es','!src/public/*/*.es'])
		.pipe(babel({
			presets: ['es2015','stage-0']
		}))
		.pipe(gulp.dest('./build'))
})