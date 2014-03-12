module.exports = {
	compile: {
		options: {
			pretty: true
		},
		files: [{
			expand: true,
			cwd: 'src/demo',
			src: '**/*.jade',
			dest: './demo',
			ext: '.html'
		}]
	}
};