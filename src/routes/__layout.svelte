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

<slot />
