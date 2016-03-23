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