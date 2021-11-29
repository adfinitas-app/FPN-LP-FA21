<script>
	import PlaceholderWithCorner from '$lib/components/PlaceholderWithCorner.svelte';
</script>

<section class='max-w-6xl mx-auto bg-fpn-blue'>
	<div class='relative mx-auto max-w-4xl grid grid-cols-1 justify-items-center gap-0 md:gap-8 md:grid-cols-2'>
		<img class='max-w-lg w-full md:w-auto self-bottom absolute bottom-0 opacity-25 md:static md:opacity-100 md:visible' src='./photo-header.png' alt='Image' />
		<div class='max-w-2xl self-center text-white text-center my-8 md:my-14 px-5 md:px-0'>
			<PlaceholderWithCorner>
				<div data-aos='zoom-in' data-aos-duration='1000'>
					<h1 class='text-4xl font-extrabold'>
						<span class='text-5xl'>30 jours</span> pour faire
						place aux personnes
						en situation de handicap
					</h1>
				</div>
			</PlaceholderWithCorner>
			<p class='relative text-md italic mt-10'
				 data-aos='fade-in'
				 data-aos-delay='1000'
				 data-aos-easing='ease-in-out'>
				Les préjugés sont les premiers obstacles qui empêchent les personnes
				en situation de handicap mental d’être pleinement respectées,
				reconnues et intégrées. Aujourd’hui pour les aider à vivre sereinement au sein de la société,
				offrons-leur notre soutien, notre attention et donnons-leur le sourire !
			</p>
		</div>
	</div>
</section>
