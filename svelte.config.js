import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';

const dev = process.env.NODE_ENV === 'development';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		adapter: adapter({
			// default options are shown
			pages: 'build',
			assets: 'build',
			fallback: null
		}),
		prerender: {
			enabled: true,
			entries: ['*'],
		},
		paths: {
			base: dev ? '' : '/prejuges',
		},
	},

	preprocess: [
		preprocess({
			postcss: true
		})
	]
};

export default config;
