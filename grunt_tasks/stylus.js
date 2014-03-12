module.exports = {
	build: {
		files: [{
			expand: true,
			compress: false,
			cwd: 'src',
			src: 'css/**/*.styl',
			dest: './build',
			ext: '.css'
		}]
	},
	src_css: {
		files: [{
			expand: true,
			compress: false,
			cwd: 'src/css',
			src: '**/*.styl',
			dest: './demo/css',
			ext: '.css'
		}]
	},
	demo_css: {
		files: [{
			expand: true,
			compress: false,
			cwd: 'src/demo',
			src: '**/*.styl',
			dest: './demo',
			ext: '.css'
		}]
	}
};