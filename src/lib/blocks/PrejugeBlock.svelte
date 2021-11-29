<script>
	import PlaceholderWithCorner from '$lib/components/PlaceholderWithCorner.svelte';
	import PrejugeTab from '$lib/components/PrejugeTab.svelte';
	import PrejugeGrid from '$lib/components/PrejugeGrid.svelte';
</script>

<section class='mt-8 md:mt-10 max-w-6xl mx-auto'>
	<div>
		<div class='mx-auto max-w-4xl px-5 md:px-0'>
			<PlaceholderWithCorner>
				<h2 class='text-2xl md:text-3xl text-fpn-blue-dark font-extrabold text-center'>
					Luttons contre les préjugés, donnons-leur le sourire !
				</h2>
			</PlaceholderWithCorner>
		</div>
		<div class='relative pb-6 bg-gradient-to-b from-white to-gray-100' >
			<div class='absolute top-0 bottom-0 left-0 right-0 bg-repeat-x bg-top rotate-180 opacity-50' style='background-image: url("./bg-pattern.png")'></div>
			<div class='mx-auto max-w-4xl z-10 relative px-5 md:px-0'>
				<div class='grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 mt-10'>
					<img src='./photo-prejuge-1.png' alt='Photo de préjugés' />
					<div class='col-span-1 md:col-span-2 flex'>
						<PrejugeTab />
					</div>
					<p class='col-span-1 md:col-span-3 text-right text-xs md:text-sm italic text-fpn-blue font-bold'>
						<u>Source</u> : La perception du handicap mental en France, Ipsos, 2010.
					</p>
				</div>
			</div>
		</div>
		<div class='mx-auto max-w-4xl px-5 md:px-0'>
			<div class='py-8 md:py-16'>
				<PrejugeGrid />
			</div>
		</div>
	</div>
</section>
