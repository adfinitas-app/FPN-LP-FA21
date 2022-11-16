const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			margin: {
				'full': '100%',
			},
			padding: {
				'full': '100%',
			},
			minWidth: {
				'0': '0',
				'1/4': '25%',
				'1/3': '33.33%',
				'1/2': '50%',
				'3/4': '75%',
				'full': '100%',
			},
			transitionProperty: {
				'size': 'width, height',
			},
			colors: {
				'fpn-blue': '#3573A8',
				'fpn-blue-dark': '#2C5678',
				'fpn-orange': '#F37923',
				'fpn-blue-light': '#74a5c8',
				'fpn-pink': '#F73659',
			}
		}
	},

	plugins: [
		require('@tailwindcss/aspect-ratio'),
	]
};

module.exports = config;
