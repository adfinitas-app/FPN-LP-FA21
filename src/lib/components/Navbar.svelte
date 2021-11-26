<script>
	let logo;

	function calculateLogoSize() {
		if (window.scrollY > 0) {
			logo.style.height = "80px";
			logo.style.width = "64px";
		} else {
			logo.style.height = "130px";
			logo.style.width = "115px";
		}
	}
</script>

<svelte:window on:scroll={calculateLogoSize} />

<section class='z-50 w-full fixed top-0'>
	<div class='bg-fpn-blue-dark max-w-6xl mx-auto'>
		<div class='max-w-5xl mx-auto flex justify-between' style='height: 80px;'>
			<div class='bg-white transition-size' style='height: 130px; width: 115px;' bind:this={logo}>
				<a>
					<img class='py-2 mx-auto w-auto h-full' src='/logo.png' alt='FPN Logo' />
				</a>
			</div>
			<div class='self-center'>
				<div class='transition-transform hover:scale-110 cursor-pointer'>
					<a class='uppercase p-5 bg-fpn-orange text-white text-sm font-bold'>
						<img class='inline-block h-6 pr-3' src='/icon-donner.svg' alt='donner logo' />
						Faire un don
					</a>
				</div>
			</div>
		</div>
	</div>
</section>
