<script>
	import PlaceholderWithCorner from '$lib/components/PlaceholderWithCorner.svelte';
</script>

<section class='relative max-w-6xl mx-auto bg-fpn-blue-dark py-16 pb-0 mb-16'>
	<div class='absolute z-0 bottom-0 w-full h-24 bg-white'></div>
	<div class='relative z-10 mx-auto max-w-4xl text-white'>
		<PlaceholderWithCorner>
			<h2 class='text-3xl font-extrabold text-center'>
				Faites un don avant le 31 décembre et bénéficiez d’une déduction fiscale
			</h2>
		</PlaceholderWithCorner>
		<p class='text-lg italic my-10 text-center mx-8'>
			Vous pourrez profiter de deux dispositifs de déduction fiscale
			en fonction de votre situation.
		</p>
		<div class='grid grid-cols-2 gap-24'>
			<div class='bg-fpn-blue px-16 py-20 text-center flex flex-col justify-between'>
				<div data-aos='zoom-in'>
					<p class='text-5xl font-extrabold'>
						66<span class='ml-2 text-2xl'>%</span>
					</p>
					<p class='text-2xl italic font-bold mt-6'>
						du montant de votre don déduits de votre impôt sur le revenu.
					</p>
				</div>
				<div class='mt-14' data-aos='slide-up'>
					<div class='cursor-pointer transition-transform hover:scale-110'>
						<a class='text-lg uppercase p-4 bg-fpn-orange text-white text-sm font-bold'>
							<img class='inline-block h-6 pr-3' src='/icon-donner.svg' alt='donner logo' />
							Je donne
						</a>
					</div>
				</div>
			</div>
			<div class='bg-fpn-blue px-16 py-20 text-center flex flex-col justify-between'>
				<div data-aos='zoom-in'>
					<p class='text-5xl font-extrabold'>
						75<span class='ml-2 text-2xl'>%</span>
					</p>
					<p class='text-2xl italic font-bold mt-6'>
						du montant de votre don déduits de votre impôt sur la fortune immobilière.
					</p>
				</div>
				<div class='mt-14' data-aos='slide-up'>
					<div class='cursor-pointer transition-transform hover:scale-110'>
						<a class='text-lg uppercase p-4 bg-fpn-orange text-white text-sm font-bold'>
							<img class='inline-block h-6 pr-3' src='/icon-donner.svg' alt='donner logo' />
							Je donne
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
