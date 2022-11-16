<script>
	import { links } from '$lib/links-utils';
</script>

<section class='max-w-6xl mx-auto pt-6 pb-4 bg-fpn-blue-light text-white px-5 md:px-0'>
	<div class='mx-auto max-w-4xl'>
		<div class='grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-24'>
			<div>
				<p class='text-4xl text-white font-extrabold'>
					Perce<br />
					Neige
				</p>
				<p class='mt-4 text-sm'>
					Fondation reconnue d’utilité publique qui agit en faveur des enfants et adultes
					touchés par une déficience mentale, un handicap physique, psychique ou l'autisme.<br />
					Créée en 1966 à l’initiative de l’acteur Lino Ventura.
				</p>
			</div>
			<div class=''>
				<div class='flex flex-col md:flex-row gap-2 md:gap-0 justify-between items-center'>
					<p>Suivez-nous</p>
					<ul>
						<li class='inline-block mr-1 transition-transform hover:scale-110 cursor-pointer'>
							<a href={links['facebook']} target='_blank'>
								<img style='width: 40px;' src='/idees-recues/icon-facebook.svg' alt='icone facebook' />
							</a>
						</li>
						<li class='inline-block mx-1 transition-transform hover:scale-110 cursor-pointer'>
							<a href={links['twitter']} target='_blank'>
								<img style='width: 40px;' src='/idees-recues/icon-twitter.svg' alt='icone twitter' />
							</a>
						</li>
						<li class='inline-block mx-1 transition-transform hover:scale-110 cursor-pointer'>
							<a href={links['youtube']} target='_blank'>
								<img style='width: 40px;' src='/idees-recues/icon-youtube.svg' alt='icone youtube' />
							</a>
						</li>
						<li class='inline-block mx-1 transition-transform hover:scale-110 cursor-pointer'>
							<a href={links['instagram']} target='_blank'>
								<img style='width: 40px;' src='/idees-recues/icon-instagram.svg' alt='icone instagram' />
							</a>
						</li>
						<li class='inline-block ml-1 transition-transform hover:scale-110 cursor-pointer'>
							<a href={links['linkedin']} target='_blank'>
								<img style='width: 40px;' src='/idees-recues/icon-linkedin.svg' alt='icone linkedin' />
							</a>
						</li>
					</ul>
				</div>
				<div class='mt-4 md:mt-10'>
					<a href="https://www.donenconfiance.org" target='_blank'>
					  <img class='mx-auto' style='width: 90px;' src='/idees-recues/icon-don_en_confiance.png' />
					</a>
				</div>
			</div>
		</div>
		<ul class='text-xs text-center mt-8 md:mt-12'>
			<li class='md:inline-block md:mr-2 mb-1 md:my-0'>
				Perce-Neige {(new Date()).getFullYear()}
			</li>
			<li class='md:inline-block md:mx-2 my-1 md:my-0'>
				<a href={links['mentions_legales']}
					 target='_blank'>
					Mentions légales
				</a>
			</li>
			<li class='md:inline-block md:ml-2 mt-1 md:my-0'>
				<a href={links['gestion_des_cookies']}
					 target='_blank'>
					Gestion des cookies
				</a>
			</li>
		</ul>
	</div>
</section>