const mode = process.env.NODE_ENV;
const dev = mode === 'development';

const config = {
	plugins: [
		require('postcss-import')({
			path: ['src/styles/'],
		}),
		require('tailwindcss/nesting')(),
		require('tailwindcss')(),
		require('autoprefixer')(),
		!dev &&
		require('cssnano')({
			preset: 'default'
		})
	]
};

module.exports = config;
