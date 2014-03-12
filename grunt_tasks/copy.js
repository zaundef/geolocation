module.exports = {
	img: {
		expand: true,
		cwd: 'src/demo',
		src: ['img/**/*'],
		dest: 'demo'
	},
	vendor: {
		expand: true,
		cwd: 'vendor',
		src: ['**/*.js', '**/*.css'],
		dest: 'demo'
	},
	fonts: {
		expand: true,
		cwd: 'vendor',
		src: ['fonts/**/*'],
		dest: 'demo'
	}
};