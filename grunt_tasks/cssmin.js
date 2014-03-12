module.exports = {
	build: {
		expand: true,
		cwd: 'build',
		src: ['**/*.css'],
		dest: 'build',
		ext: '.min.css'
	}
};