<script>
	import PlaceholderWithCorner from '$lib/components/PlaceholderWithCorner.svelte';
	import PrejugeTab from '$lib/components/PrejugeTab.svelte';
	import PrejugeGrid from '$lib/components/PrejugeGrid.svelte';
</script>

<section class='mt-16 max-w-7xl mx-auto'>
	<div>
		<div class='mx-auto max-w-5xl'>
			<PlaceholderWithCorner>
				<h2 class='text-4xl text-fpn-blue-dark font-extrabold text-center'>
					Luttons contre les préjugés, offrons-leur un sourire !
				</h2>
			</PlaceholderWithCorner>
		</div>
		<div class='relative py-10 bg-gradient-to-b from-white to-gray-200' >
			<div class='absolute top-0 bottom-0 left-0 right-0 bg-repeat-x bg-top rotate-180' style='background-image: url("/bg-pattern.png")'></div>
			<div class='mx-auto max-w-5xl z-10 relative'>
				<div class='grid grid-cols-3 gap-x-8 mt-10'>
					<img src='/photo-prejuge-1.png' alt='Photo de préjugés' />
					<div class='col-span-2 flex'>
						<PrejugeTab />
					</div>
					<p class='col-span-3 text-right text-sm italic text-fpn-blue font-bold'>
						<u>Source</u> : La perception du handicap mental en France, Ipsos, 2010.
					</p>
				</div>
			</div>
		</div>
		<div class='mx-auto max-w-5xl'>
			<div class='py-16'>
				<PrejugeGrid />
			</div>
		</div>
	</div>
</section>
