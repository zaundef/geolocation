module.exports = {
	build: {
		files: 'src/**/*.js',
		tasks: ['uglify']
	},
	fonts: {
		files: 'vendor/fonts/**/*',
		tasks: ['copy:fonts']
	},
	img: {
		files: 'src/demo/img/*',
		tasks: ['copy:img']
	},
	jade: {
		files: 'src/demo/**/*.jade',
		tasks: ['jade']
	},
	styl: {
		files: 'src/**/*.styl',
		tasks: ['stylus', 'autoprefixer']
	},
	vendor: {
		files: ['vendor/**/*.js', 'vendor/**/*.css'],
		tasks: ['copy:vendor']
	},
	livereload: {
		options: {
			livereload: 4001
		},
		files: ['demo/**/*']
	}
}