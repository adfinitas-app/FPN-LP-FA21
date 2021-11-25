<script>
	import PlaceholderWithCorner from '$lib/components/PlaceholderWithCorner.svelte';
	import PrejugeTab from '$lib/components/PrejugeTab.svelte';
	import PrejugeGrid from '$lib/components/PrejugeGrid.svelte';
</script>

<section class='mt-16 px-64'>
	<div>
		<PlaceholderWithCorner>
			<h2 class='text-5xl text-fpn-blue-dark font-extrabold text-center'>
				Luttons contre les préjugés, offrons-leur un sourire !
			</h2>
		</PlaceholderWithCorner>
	</div>
	<div class='py-16 bg-bottom bg-repeat-x' style='background-image: url("/bg-pattern.png")'>
		<div class='flex space-between mt-10 gap-x-10 bg-bottom bg-repeat-x'>
			<img src='/photo-prejuge-1.png' alt='Photo de préjugés' />
			<PrejugeTab />
		</div>
		<div class='w-full mt-2'>
			<p class='text-right text-sm italic text-fpn-blue font-bold'><u>Source</u> : La perception du handicap mental en
				France, Ipsos, 2010.</p>
		</div>
	</div>
	<div class='py-16'>
		<PrejugeGrid />
	</div>
</section>
