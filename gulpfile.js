"use strict";

var gulp = require('gulp');
var connect = require('gulp-connect');//for running local dev server
var open = require('gulp-open'); //to open a url in browser
var browserify = require('browserify'); //Bundles JS
var reactify = require('reactify');//Transform JSX to JS
var source = require('vinyl-source-stream');//use conventional text stream with gulp
var concat = require('gulp-concat');//concats files
var lint = require('gulp-eslint'); //Lint JS filesand JSX

//configs 
var config = {
    port  : 9005,
    devBaseUrl: 'http://localhost',
    paths: {
        html : './src/*.html',
        js : './src/**/*.js',//to look sub directory also
        css : [
            'node_modules/bootstrap/dist/css/bootstrap.min.css',
            'node_modules/bootstrap/dist/css/bootstrap-theme.min.css',
            ],
        dist : './dist',
        mainJs : './src/main.js'
    }
}


//task 1 start a local dev server

gulp.task('connect',function(){

    connect.server({
        root : ['dist'],
        port : config.port,
        base : config.devBaseUrl,
        livereload : true
    })
});

//task to open in browser .
//It has a dependency first on connect task
gulp.task('open',['connect'],function(){
    gulp.src('dist/index.html')
    .pipe(open({ uri : config.devBaseUrl +':'+ config.port +'/'}))

});

//dist task
//get the file frm src and put it in destinatn and upon that reload
gulp.task('html',function(){
    gulp.src(config.paths.html)
    .pipe(gulp.dest(config.paths.dist))
    .pipe(connect.reload());

});

//js task
gulp.task('js',function(){
    browserify(config.paths.mainJs)
    .transform(reactify)
    .bundle()
    .on('error',console.error.bind(console))
    .pipe(source('bundle.js'))
    .pipe(gulp.dest(config.paths.dist+'/scripts'))
    .pipe(connect.reload());

});
//css task
gulp.task('css',function(){
    gulp.src(config.paths.css)
    .pipe(concat('bundle.css'))
    .pipe(gulp.dest(config.paths.dist+'/css'))
    .pipe(connect.reload());

});

//lint task
gulp.task('lint',function(){
   return gulp.src(config.paths.js)
   .pipe(lint({config:'eslint.config.json'}))
   .pipe(lint.format());
})

//watch Task
gulp.task('watch',function(){
    gulp.watch(config.paths.html,['html']); //watch the file and upon that run html task
    gulp.watch(config.paths.js,['js','lint']);
})
//default task
gulp.task('default',['html','js','lint','css','open','watch']);//whenever v open console and type gulp this task ll b executed