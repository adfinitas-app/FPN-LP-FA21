<script>
	import PlaceholderWithCorner from '$lib/components/PlaceholderWithCorner.svelte';
</script>

<section class='max-w-6xl mx-auto bg-fpn-blue-light'>
	<div class='relative mr-auto max-w-6xl grid grid-cols-1 justify-items-center gap-0 md:gap-8 md:grid-cols-2'>
		<div class='w-full h-full bg-header self-bottom absolute bottom-0 opacity-25 md:relative md:opacity-100 md:visible'>&nbsp;</div>
		<div class='max-w-2xl self-center text-white text-center my-8 md:my-14 px-5 md:px-0 md:pr-5'>
			<PlaceholderWithCorner>
				<div data-aos='zoom-in' data-aos-duration='1000'>
					<h1 class='text-4xl font-extrabold'>
						<span class='text-5xl'>En décembre,</span>
						donnons-leur le sourire&nbsp;!
					</h1>
				</div>
			</PlaceholderWithCorner>
			<p class='relative text-md font-black italic mt-10'
				 data-aos='fade-in'
				 data-aos-delay='1000'
				 data-aos-easing='ease-in-out'>
				Les idées reçues empêchent les enfants et adultes en situation de handicap mental de se sentir pleinement respectés et reconnus. Aujourd’hui pour les aider à vivre sereinement au sein de la société, offrons-leur notre soutien, notre attention et donnons-leur le sourire&nbsp;!
			</p>
		</div>
	</div>
</section>

<style>
	.bg-header {
		background-image: url('/idees-recues/leftheader.jpg');
		background-size: cover;
		background-position-x: 60%;
	}

	@media(min-width:768px) {
		.bg-header::after {
			position: absolute;
			content: "";
			top:0;
			bottom:0;
			left:0;
			right:0;
			background: linear-gradient(to left, #74a5c8 0%, rgba(116, 165, 200, 0) 40%);

		}
	}
</style>
