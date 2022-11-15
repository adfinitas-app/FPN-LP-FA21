import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		
		// adapter: adapter({
		// 	// default options are shown
		// 	pages: 'build',
		// 	assets: 'build',
		// 	fallback: null
		// }),
		prerender: {
			enabled: true,
			entries: ['*'],
		},
		// paths: {
		// 	base: '/prejuges',
		// },
		adapter: adapter({
			pages: process.env.NODE_ENV === "production" ? "build/idees-recues" : undefined,
			assets: process.env.NODE_ENV === "production" ? "build/idees-recues" : undefined,
		}),
		paths: {
			base: process.env.NODE_ENV === "production" ? "/idees-recues" : undefined,
		},
	},

	preprocess: [
		preprocess({
			postcss: true
		})
	]
};

export default config;
