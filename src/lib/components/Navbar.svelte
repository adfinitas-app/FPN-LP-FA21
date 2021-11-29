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
	<div class='bg-fpn-blue-dark max-w-6xl mx-auto'>
		<div id='navbar' class='max-w-5xl mx-auto flex justify-between px-5 md:px-0'>
			<div id='logo' class='extended bg-white transition-size' bind:this={logo}>
				<a href={links['logo']} target='_blank'>
					<img class='py-2 mx-auto w-auto h-full' src='/prejuges/logo.png' alt='FPN Logo' />
				</a>
			</div>
			<div class='self-center'>
				<div class='transition-transform hover:scale-110 cursor-pointer p-2 bg-fpn-orange md:p-5'>
					<a href={browser ? passUtmParamsToLink(links['header']) : links['header']} target='_blank'
						 class='uppercase text-white text-xs md:text-sm font-bold'>
						<img class='inline-block h-5 md:h-6 pr-1 md:pr-3' src='/prejuges/icon-donner.svg' alt='donner logo' />
						Faire un don
					</a>
				</div>
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

            &.extended {
                @apply h-36 w-32;
            }
        }
    }
</style>