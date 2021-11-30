<script>
	import PlaceholderWithCorner from '$lib/components/PlaceholderWithCorner.svelte';
	import Video from '$lib/components/Video.svelte';
</script>

<section class='relative max-w-6xl mx-auto py-8 md:py-16 px-5 md:px-0'>
	<div class='mx-auto max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-24'>
		<div class='text-fpn-blue'>
			<PlaceholderWithCorner>
				<div id="video">
					<h2 class='text-2xl md:text-3xl text-fpn-blue-dark font-extrabold text-center'>
						<span class='relative'>L</span>eur bonheur est notre récompense.
					</h2>
					<p class='text-right'>Lino Ventura</p>
				</div>
			</PlaceholderWithCorner>
			<p class='text-sm pt-6 text-justify' data-aos='fade-in'>
				La Fondation Perce-Neige mène un combat initié il y a plus de 55 ans par Lino Ventura,
				pour que les personnes handicapées trouvent leur place dans la société et soient reconnues
				en tant qu’individus à part entière. Pour cela, la Fondation accueille et accompagne,
				de façon adaptée, les enfants et les adultes touchés par une déficience mentale,
				un handicap physique, psychique ou l'autisme. Elle apporte un soutien aux familles touchées
				par le handicap et favorise la recherche scientifique et médicale.
			</p>
			<p class='text-sm italic pt-4 text-justify' data-aos='fade-in'>
				Reconnue d’utilité publique, La Fondation Perce-Neige a besoin de votre soutien
				pour aider les personnes handicapées à s’épanouir sereinement et pleinement
				au sein de la société.
			</p>
		</div>
		<div class='flex justify-center items-end'>
			<div class='w-full'>
				<div class='relative w-full inline-block' data-aos='flip-down'>
					<div class='mt-full'></div>
					<div class='absolute -top-10 bottom-10 left-10 -right-10 bg-gray-200 hidden md:block'
							 data-aos='zoom-in' data-aos-delay='400'></div>
					<div class='absolute top-0 bottom-0 left-0 right-0 bg-fpn-blue p-5'>
						<Video />
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
    h2 > span::before {
        position: absolute;
        content: ' ';
        background-image: url("/prejuges/icon-quote.svg");
        background-size: 40px 40px;
        width: 40px;
        height: 40px;
        z-index: -10;
        top: -15px;
        left: -25px;
    }
</style>