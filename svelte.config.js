
import adapter from "@sveltejs/adapter-static";
import preprocess from "svelte-preprocess";
import path from "path";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [
		preprocess({
			postcss: true
		})
	],

	kit: {
		adapter: adapter({
			pages: process.env.NODE_ENV === "production" ? "build/idees-recues" : undefined,
			assets: process.env.NODE_ENV === "production" ? "build/idees-recues" : undefined
		}),
		paths: {
			base: process.env.NODE_ENV === "production" ? "/idees-recues" : undefined
		},
		prerender: {
			enabled: true,
			entries: ['*'],},
		
	},

};

export default config;
