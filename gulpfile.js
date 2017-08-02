var gulp = require('gulp');
var concat= require('gulp-concat');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-minify-css');
var webserver = require('gulp-webserver');
var watch = require('gulp-watch');

//1.1la primera tarea se llama script, que concatena los archivs js
gulp.task('script', function(){
	gulp.src(['node_modules/jquery/dist/jquery.js','node_modules/materialize-css/dist/js/materialize.js','assets/js/geolocation.js'])
	.pipe(concat('script.js'))
	//carpeta dist
	.pipe(gulp.dest('dist/js'));
});
//1.2 creacion de main para vicular script al html page01.
gulp.task('main01', function(){
	gulp.src(['node_modules/jquery/dist/jquery.js','node_modules/materialize-css/dist/js/materialize.js','assets/js/main01.js'])
	.pipe(concat('main01.js'))
	//carpeta dist
	.pipe(gulp.dest('dist/js'));
});

//1.3 creacion de main para vicular script al html page02.
gulp.task('main02', function(){
	gulp.src(['node_modules/jquery/dist/jquery.js','node_modules/materialize-css/dist/js/materialize.js','assets/js/main02.js'])
	.pipe(concat('main02.js'))
	//carpeta dist
	.pipe(gulp.dest('dist/js'));
});
//2.1segunda tarea es style que concatena y minifica archivos scss a style.min.css 
gulp.task('style', function(){
	gulp.src(['node_modules/materialize-css/dist/css/materialize.css','assets/sass/main.scss'])
		.pipe(sass().on('error', sass.logError))//ejecuta sass para compilar archivos .scss
		.pipe(minifyCSS())
		.pipe(concat('style.min.css'))
		.pipe(gulp.dest('dist/css'));//se  guarda en dist t de aca se linquea al html
	});
//3.1watch sass
gulp.task('watch', function() {
    gulp.watch('assets/sass/*.scss',['style']); //para mirar cambios en css
	});
//4.1 tarea Webserver, crea el servidor web de desarrollo a ejecutarse en localhost puerto 8000
gulp.task('webserver', function(){
	gulp.src('../darksky/')
		.pipe(webserver({
			fallback: 'start-page.html',
			livereload: true,
			directoryListing: false,
			open:true,
		}));
});




gulp.task('default',['script', 'style','watch', 'webserver']);