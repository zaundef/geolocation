module.exports = {
	options: {
		banner: '/*! <%= pkg.name %> <%= pkg.version %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
	},
	build_min: {
		expand: true,
		cwd: 'src/js',
		src: '**/*.js',
		dest: 'build/js',
		ext: '.min.js'
	},
	src_demo: {
		expand: true,
		cwd: 'src/demo',
		src: '**/*.js',
		dest: 'demo',
		ext: '.js'
	},
	src_js: {
		expand: true,
		cwd: 'src/js',
		src: '**/*.js',
		dest: 'demo/js',
		ext: '.min.js',
		compress: false
	}
};