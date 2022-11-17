<script>
	import PlaceholderWithCorner from '$lib/components/PlaceholderWithCorner.svelte';
	import { browser } from '$app/env';
	import { links, passUtmParamsToLink } from '$lib/links-utils';
</script>

<section class='relative max-w-6xl mx-auto bg-fpn-blue-light py-8 md:py-16 md:pb-0 md:mb-16'>
	<div class='absolute z-0 bottom-0 w-full h-24 bg-white hidden md:block'></div>
	<div class='relative z-10 mx-auto max-w-4xl text-white px-5 md:px-0'>
		<PlaceholderWithCorner>
			<h2 class='text-2xl md:text-3xl font-extrabold text-center'>
				Votre générosité fait naître de nouveaux sourires
			</h2>
		</PlaceholderWithCorner>
		<div class='grid mt-20 mx-5 grid-cols-1 md:grid-cols-3 gap-8'>
			<div class='bg-fpn-blue  p-6 pb-8 text-center flex flex-col justify-center'>
				<div class="" data-aos='zoom-in'>
					<p class='text-3xl font-extrabold'>
						50€
					</p>
					<p class='text-xl italic font-bold mt-6'>
						soit 17€
						après déduction fiscale
					</p>
				</div>
				<div class='mt-8 md:mt-14' data-aos='slide-up'>
					<div class='cursor-pointer transition-transform hover:scale-110'>
						<a href={browser ? passUtmParamsToLink(links['donner_50']) : links['donner_50'] } target='_blank'
							 class='text-lg uppercase p-4 bg-fpn-pink text-white text-sm font-bold'>
							<img class='inline-block h-6 pr-3' src='/idees-recues/icon-donner.svg' alt='donner logo' />
							Je donne
						</a>
					</div>
				</div>
			</div>
			<div class='bg-fpn-blue  p-6 pb-8  text-center flex flex-col justify-center'>
				<div data-aos='zoom-in'>
					<p class='text-3xl font-extrabold'>
						100€
					</p>
					<p class='text-xl italic font-bold mt-6'>
						soit 34€ après déduction fiscale
					</p>
				</div>
				<div class='mt-8 md:mt-14' data-aos='slide-up'>
					<div class='cursor-pointer transition-transform hover:scale-110'>
						<a href={browser ? passUtmParamsToLink(links['donner_100']) : links['donner_100'] } target='_blank'
							 class='text-lg uppercase p-4 bg-fpn-pink text-white text-sm font-bold'>
							<img class='inline-block h-6 pr-3' src='/idees-recues/icon-donner.svg' alt='donner logo' />
							Je donne
						</a>
					</div>
				</div>
			</div>
			<div class='bg-fpn-blue p-6 pb-8 text-center flex flex-col justify-center'>
				<div data-aos='zoom-in'>
					<p class='text-3xl font-extrabold'>
						200€
					</p>
					<p class='text-xl italic font-bold mt-6'>
						soit 68€ après déduction fiscale
					</p>
				</div>
				<div class='mt-8 md:mt-14' data-aos='slide-up'>
					<div class='cursor-pointer transition-transform hover:scale-110'>
						<a href={browser ? passUtmParamsToLink(links['donner_200']) : links['donner_200'] } target='_blank'
							 class='text-lg uppercase p-4 bg-fpn-pink text-white text-sm font-bold'>
							<img class='inline-block h-6 pr-3' src='/idees-recues/icon-donner.svg' alt='donner logo' />
							Je donne
						</a>
					</div>
				</div>
			</div>
		</div>
		<div class=" mx-auto text-[18px] leading-none font-black text-fpn-pink italic text-center m-5 w-full">Toute contribution est importante. Je fais un don du montant de mon choix <a class="underline" href={browser ? passUtmParamsToLink(links['ici']) : links['ici'] } target="_blank">ici.</a></div>
	</div>
</section>
