<script>
	import '../app.css';
	import { onMount } from 'svelte';
	import { browser } from '$app/env';

	let AOS;
	onMount(async () => {
		AOS = (await import('aos')).default;
		AOS.init();
	});
</script>

<svelte:head>
	<!-- Google Tag Manager -->
	<script>(function(w, d, s, l, i) {
		w[l] = w[l] || [];
		w[l].push({
			'gtm.start':
				new Date().getTime(), event: 'gtm.js'
		});
		var f = d.getElementsByTagName(s)[0],
			j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : '';
		j.async = true;
		j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
		f.parentNode.insertBefore(j, f);
	})(window, document, 'script', 'dataLayer', 'GTM-KJ24B2L');
	</script>
	<!-- End Google Tag Manager -->
</svelte:head>

<!-- Google Tag Manager (noscript) -->
<noscript>
	<iframe src='https://www.googletagmanager.com/ns.html?id=GTM-KJ24B2L'
					height='0' width='0' style='display:none;visibility:hidden'></iframe>
</noscript>
<!-- End Google Tag Manager (noscript) -->

<slot />
