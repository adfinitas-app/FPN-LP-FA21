<script>
	import { links, passUtmParamsToLink } from '$lib/links-utils';
	import { browser } from '$app/env';

	let logo;

	function calculateLogoSize() {
		if (window.scrollY > 0) {
			logo.classList.remove('extended');
		} else {
			logo.classList.add('extended');
		}
	}
</script>

<svelte:window on:scroll={calculateLogoSize} />

<section class='z-50 w-screen md:w-full fixed top-0'>
	<div class='bg-fpn-blue max-w-6xl mx-auto'>
		<div id='navbar' class='max-w-5xl mx-auto flex justify-between px-5 md:px-0'>
			<div id='logo' class='extended bg-white transition-size' bind:this={logo}>
				<img class='py-2 mx-auto w-auto h-full' src='/idees-recues/logo.png' alt='FPN Logo' />
			</div>
			<div class='self-center'>
				<a href={browser ? passUtmParamsToLink(links['header']) : links['header']} target='_blank'
					 class='transition-transform hover:scale-110 cursor-pointer p-2 bg-fpn-pink md:p-5 uppercase text-white text-xs md:text-sm font-bold'>
					<img class='inline-block h-5 md:h-6 pr-1 md:pr-3' src='/idees-recues/icon-donner.svg' alt='donner logo' />
					je fais un don
				</a>
			</div>
		</div>
	</div>
</section>
<section id='navbar-placeholder' class='w-full'></section>

<style lang='postcss'>
    #navbar, #navbar-placeholder {
        @apply h-16;
    }

    #logo {
        @apply h-16 w-14;
    }

    @screen md {
        #navbar, #navbar-placeholder {
            @apply h-20;
        }

        #logo {
            @apply h-20 w-16;
        }

		#logo.extended {
			@apply h-36 w-32;
		}
    }
</style>