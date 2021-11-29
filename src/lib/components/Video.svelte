<script>
	let video;
	let opened_video = false;

	function start_video() {
		opened_video = true;
		video.play();
	}
</script>

<section class='relative h-full w-full'>
	<div class='h-full w-full' class:hidden={opened_video}>
		<img class='relative top-0 w-full h-full opacity-75' src='photo-video.png' alt='Photo de la video' />
		<div class='absolute top-0 w-full h-full opacity-50 bg-white'></div>
		<div class='absolute top-0 bottom-0 left-0 right-0 flex justify-center items-center' on:click={start_video}>
			<a class='absolute opacity-80 transition-transform hover:scale-125 hover:opacity-100 cursor-pointer'>
				<img style='width: 90px;' src='./icon-play.svg' alt='icone de lancement de video' />
			</a>
			<p class='relative top-20 uppercase text-2xl text-white font-extrabold cursor-pointer'>
				Voir la video
			</p>
		</div>
	</div>
	<video controls bind:this={video} class:hidden={!opened_video}>
		<source
			src='https://adfinitas-statics-cdn.s3.eu-west-3.amazonaws.com/Perce-Neige/FA-21/Perce_Neige-Campagne-NOV21-V1-1-1_MixWeb.mp4' />
	</video>
</section>