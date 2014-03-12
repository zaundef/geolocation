module.exports = {
	build: {
		expand: true,
		cwd: 'build',
		src: ['**/*.css'],
		dest: 'build'
	},
	demo: {
		expand: true,
		cwd: 'demo',
		src: ['**/*.css'],
		dest: 'demo'
	}
};