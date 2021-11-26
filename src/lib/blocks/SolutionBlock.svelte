<script>
	import PlaceholderWithCorner from '$lib/components/PlaceholderWithCorner.svelte';
</script>

<section class='max-w-6xl mx-auto'>
	<div class='relative bg-gradient-to-t from-white to-gray-100'>
		<div class='absolute top-0 bottom-0 left-0 right-0 bg-repeat-x bg-top opacity-50'
				 style='background-image: url("/bg-pattern.png")'></div>
		<div class='relative py-16 mx-auto max-w-4xl'>
			<PlaceholderWithCorner>
				<h2 class='text-3xl text-fpn-blue-dark font-extrabold text-center'>
					30 jours pour redonner sourire et espérance !
				</h2>
			</PlaceholderWithCorner>
			<p class='text-lg text-fpn-blue italic my-10 text-center mx-8'>
				Votre générosité nous permet d’agir concrètement pour aider les
				personnes en situation de handicap et leur famille.
			</p>
			<div class='grid grid-cols-2 gap-8'>
				<img src='photo-solution.png' alt='Solution photo' />
				<div class='h-full flex flex-col justify-center text-fpn-blue text-md font-bold gap-4'>
					<div data-aos='slide-left'>
						<div class='flex' data-aos='fade-in' data-aos-easing='easing-out' data-aos-duration='750'>
							<img src='/icon-arrow.svg' style='width: 30px;' alt='icone de fleche' />
							<p class='ml-4'>
								Accueillir et accompagner des personnes handicapées au sein de nos structures adaptées.
							</p>
						</div>
					</div>
					<div data-aos='slide-left'>
						<div class='flex' data-aos='fade-in' data-aos-easing='easing-out' data-aos-duration='750'>
							<img src='/icon-arrow.svg' style='width: 30px;' alt='icone de fleche' />
							<p class='ml-4'>Conseiller, soutenir les familles confrontées à l’isolement.</p>
						</div>
					</div>
					<div data-aos='slide-left'>
						<div class='flex' data-aos='fade-in' data-aos-easing='easing-out' data-aos-duration='750'>
							<img src='/icon-arrow.svg' style='width: 30px;' alt='icone de fleche' />
							<p class='ml-4'>Sensibiliser le grand public aux enjeux liés au handicap.</p>
						</div>
					</div>
					<div data-aos='slide-left'>
						<div class='flex' data-aos='fade-in' data-aos-easing='easing-out' data-aos-duration='750'>
							<img src='/icon-arrow.svg' style='width: 30px;' alt='icone de fleche' />
							<p class='ml-4'>
								Développer des offres innovantes qui s’adaptent aux besoins spécifiques des personnes handicapées.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
