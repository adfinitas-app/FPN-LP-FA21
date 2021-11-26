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
</svelte:head>

<Navbar />
<HeaderBlock />
<PrejugeBlock />
<SolutionBlock />
<DonBlock />
<TestimonialBlock />
<FooterBlock />