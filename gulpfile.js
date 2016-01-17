
var gulp = require('gulp'),
	concatCss = require('gulp-concat-css'),//прпменная  берем в плагине
	minifyCSS = require('gulp-minify-css'),
	notify = require("gulp-notify"),
	rename = require("gulp-rename"); 


gulp.task('default', function() {
		gulp.src('css/*.css')   // путь к папке с файламе с которыми будем работать
		    .pipe(concatCss("app/bundle.css"))  // это пайпы тоесть вызов различных функций таких как конкат цсс
		    .pipe(minifyCSS())
		    .pipe(notify("Hello Gulp!"))
		    .pipe(rename("myfile.css"))// как будет называться после выполнения gulp
		    .pipe(gulp.dest('app/css')); // куда схохранять файл кот получиться
});


// что бы следило за всеми изминениями в css создадим gulp watch

gulp.task('watch', function () {
     gulp.watch('css/*.css', ['default'])
        
});
	