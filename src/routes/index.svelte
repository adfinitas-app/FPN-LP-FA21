<script>
	import Navbar from '$lib/components/Navbar.svelte';
	import HeaderBlock from '$lib/blocks/HeaderBlock.svelte';
	import PrejugeBlock from '$lib/blocks/PrejugeBlock.svelte';
	import SolutionBlock from '$lib/blocks/SolutionBlock.svelte';
	import DonBlock from '$lib/blocks/DonBlock.svelte';
	import TestimonialBlock from '$lib/blocks/TestimonialBlock.svelte';
	import FooterBlock from '$lib/blocks/FooterBlock.svelte';
</script>

<svelte:head>
	<title>Faites place aux personnes handicapées</title>
	<meta name='description'
				content='Les préjugés sont les premiers obstacles qui empêchent les personnes en situation de handicap mental d’être pleinement respectées, reconnues et intégrées.' />
	<meta name='keywords' content='' />
	<meta name='viewport' content='width=device-width, initial-scale=1.0' />

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
	})(window, document, 'script', 'dataLayer', 'GTM-WQ2RDH6');
	</script>
	<!-- End Google Tag Manager -->
</svelte:head>

<!-- Google Tag Manager (noscript) -->
<noscript>
	<iframe src='https://www.googletagmanager.com/ns.html?id=GTM-WQ2RDH6'
					height='0' width='0' style='display:none;visibility:hidden'></iframe>
</noscript>
<!-- End Google Tag Manager (noscript) -->

<Navbar />
<HeaderBlock />
<PrejugeBlock />
<SolutionBlock />
<DonBlock />
<TestimonialBlock />
<FooterBlock />