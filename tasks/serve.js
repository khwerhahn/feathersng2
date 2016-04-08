var gulp = require('gulp');
var liveServer = require('live-server');
var config = require('../gulp.config')();
var gulp = require('gulp'),
    spawn = require('child_process').spawn,
    node;

/* Start live server dev mode */
gulp.task('serve-dev', ['wiredep', 'tsc-app', 'watch-ts', 'watch-sass'], function () {  
    liveServer.start(config.liveServer.dev);
});

/* Start live server production mode */
gulp.task('serve-build', ['build'], function () {
    liveServer.start(config.liveServer.prod);
});

gulp.task('dev', ['build'], function () {  
    gulp.run('server')

	gulp.watch(['./src/**/*.js'], function() {
		gulp.run('server')
	})
});

gulp.task('server', function() {
  if (node) node.kill()
  node = spawn('node', ['src/index.js'], { stdio: 'inherit' })
  node.on('close', function (code) {
    if (code === 8) {
      gulp.log('Error detected, waiting for changes...');
    }
  });
})



// clean up if an error goes unhandled.
process.on('exit', function() {
    if (node) node.kill()
})