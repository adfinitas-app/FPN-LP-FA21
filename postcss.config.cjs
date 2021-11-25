const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');
const tailwindcss_nesting = require('tailwindcss/nesting');
const cssnano = require('cssnano');

const mode = process.env.NODE_ENV;
const dev = mode === 'development';

const config = {
	plugins: [
		tailwindcss_nesting(),
		tailwindcss(),
		autoprefixer(),
		!dev &&
			cssnano({
				preset: 'default'
			})
	]
};

module.exports = config;
