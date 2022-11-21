<script>
	import PlaceholderWithCorner from '$lib/components/PlaceholderWithCorner.svelte';
</script>

<section class='max-w-6xl mx-auto'>
	<div class='relative bg-gradient-to-t from-white to-gray-100 px-5 md:px-0'>
		<div class='absolute top-0 bottom-0 left-0 right-0 bg-repeat-x bg-top opacity-50'
				 style='background-image: url("/idees-recues/bg-pattern.png")'></div>
		<div class='relative py-8 md:py-16 mx-auto max-w-4xl'>
			<PlaceholderWithCorner>
				<h2 class='text-2xl md:text-3xl text-fpn-blue font-extrabold text-center'>
					Donner le sourire et favoriser le bien-être des enfants 
				</h2>
			</PlaceholderWithCorner>
			<p class='text-md md:text-lg font-black text-fpn-blue italic my-10 text-center md:mx-8'>
				Grâce à votre générosité, Perce-Neige soutient des programmes adaptés pour permettre aux enfants en situation de handicap de s’épanouir.
			</p>
			<div class='grid grid-cols-1 md:grid-cols-2 gap-8'>
				<img src='/idees-recues/photo-sourire.jpg' alt='Solution photo' />
				<div class="my-auto">
					<div class="text-fpn-blue text-md font-bold italic">Quelques projets soutenus par Perce-Neige :</div>
					<div class='my-4 flex flex-col leading-none justify-center text-fpn-blue text-md font-bold gap-4 overflow-hidden'>
						<div data-aos='slide-left'>
							<div class='flex' data-aos='fade-in' data-aos-easing='easing-out' data-aos-duration='750'>
								<img src='/idees-recues/icon-arrow.svg' style='width: 30px;' alt='icone de fleche' />
								<p class='ml-4'>
									Une nouvelle « Classe Soleil » de maternelle au Vésinet dans les Yvelines, pour scolariser et préparer l’intégration en primaire des enfants autistes.
								</p>
							</div>
						</div>
						<div data-aos='slide-left'>
							<div class='flex' data-aos='fade-in' data-aos-easing='easing-out' data-aos-duration='750'>
								<img src='/idees-recues/icon-arrow.svg' style='width: 30px;' alt='icone de fleche' />
								<p class='ml-4'>La 1ère « Maison des plus petits » à Marseille, pour accueillir dans un cadre familial et chaleureux de jeunes enfants porteurs de handicaps lourds qui ne peuvent vivre chez eux.</p>
							</div>
						</div>
						<div data-aos='slide-left'>
							<div class='flex' data-aos='fade-in' data-aos-easing='easing-out' data-aos-duration='750'>
								<img src='/idees-recues/icon-arrow.svg' style='width: 30px;' alt='icone de fleche' />
								<p class='ml-4'>Le « Village des Enfants Extraordinaires » dans le Val-de-Marne, pour favoriser l’apprentissage par le jeu et l’intégration d’enfants porteurs de handicap.</p>
							</div>
						</div>
					</div>
					<div class="text-fpn-blue leading-none text-md font-bold italic">Et d’autres projets qui seront possibles grâce à votre soutien.</div>
				</div>
				
			</div>
		</div>
	</div>
</section>
