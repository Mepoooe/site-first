<<<<<<< HEAD
var gulp = require("gulp"),
 browserSync = require('browser-sync'),
 modernizr = require('gulp-modernizr');

gulp.task('modernizr', function(){
	gulp.src('app/js/*.js')
		.pipe(modernizr(
		  {
		  	//подключаем необх опции
		  	"options" : [
		  		"setClasses",
		  		"html5shiv"
		  		],

		  	//подключ необх набор тустов
		  	"test" : ['placeholder', 'cssanimations'],

		  	//собирать минифиц-ную вурсию
		  	"uglify" : true,

		  }
		))
	.pipe(gulp.dest("app/js/vendor"))
});

gulp.task('server', function(){
 browserSync({
  port: 9000,
  server: {
   baseDir: 'app'
  }
 });
});

gulp.task('watch', function(){
 gulp.watch([
  'app/*.html',
  'app/js/**/*.js',
  'app/css/**/*.css'
  ]).on('change', browserSync.reload);
});

gulp.task('default', ['modernizr', 'server', 'watch']);


/*
[18:24:06] Юрий Кучма: spritesmith = require('gulp.C'),
[18:24:20] Юрий Кучма: / -------- auto sprites  -------- /
gulp.task('sprite', function() {
    var spriteData = gulp.src(paths.dev + '/img/icons/*.png')
        .pipe(spritesmith({
            imgName: 'sprite.png',
            imgPath: '../img/sprite.png',
            cssName: 'sprite.scss'
        }));
    spriteData.img.pipe(gulp.dest(paths.dev + '/img/'));
    spriteData.css.pipe(gulp.dest(paths.dev + '/scss/'));
});*/
=======

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
	
>>>>>>> 0393b44a0f235e9b42700d0efcef48338e004483
