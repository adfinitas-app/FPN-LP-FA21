<script>
	import { fade } from 'svelte/transition';
	import { grid_options } from '$lib/block-prejuge-config';
	import { disableScroll, enableScroll } from '$lib/scrolling-utils';
	import { browser } from '$app/env';
	import { links, passUtmParamsToLink } from '$lib/links-utils';

	let selected_grid = null;

	function toggleSelectedGrid(index) {
		if (selected_grid === index) {
			enableScroll();
			selected_grid = null;
		} else {
			disableScroll();
			selected_grid = index;
		}
	}
</script>

<section class='relative'>
	<div class='grid grid-cols-1 md:grid-cols-3 gap-8 text-white text-center'>
		{#each grid_options as elem, index}
			<div data-aos='flip-down' data-aos-easing='ease-in-out' data-aos-duration='500'>
				<div class='relative w-full inline-block'>
					<div class='mt-full'></div>
					{#if index === 0}
						<div class='absolute -top-6 bottom-6 -left-6 right-6 bg-gray-200 hidden md:block'
								 data-aos='zoom-in' data-aos-delay='400'></div>
					{:else if index === 5}
						<div class='absolute top-6 -bottom-6 left-6 -right-6 bg-gray-200 hidden md:block'
								 data-aos='zoom-in' data-aos-delay='400'></div>
					{/if}
					<div class='absolute top-0 bottom-0 left-0 right-0 bg-fpn-blue'>
						{#if elem.type === 'img'}
							<img src={elem.src} />
						{:else}
							<div class='h-full w-full flex flex-col space-between'>
								<div class='bg-fpn-blue py-3 italic font-black text-sm md:text-xl'>Idée reçue {index}</div>
								<div class='relative bg-fpn-blue-light italic flex-grow flex justify-center items-center px-4'>
									<p class='with-quote z-10 font-black italic mx-8 md:mx-4 text-xl'>{@html elem.title}</p>
									<img
										class='absolute z-10 bottom-4 right-4 cursor-pointer opacity-75 hover:opacity-100 hover:scale-125 transition-transform'
										style='width: 30px;'
										src='/idees-recues/icon-plus.svg'
										alt='Plus icon'
										on:click={toggleSelectedGrid.bind(null, index)} />
								</div>
							</div>
						{/if}
					</div>
				</div>
			</div>
		{/each}
	</div>
	<div>
		{#each grid_options as elem, index}
			{#if elem.type !== 'img'}
				<div
					class='grid-item-opened z-20 fixed md:absolute top-0 left-0 bottom-0 right-0 bg-fpn-blue-light transition text-white p-12 pb-8 mt-16 md:mt-0'
					class:hidden={selected_grid !== index}
					transition:fade={{duration: 150}}>
					<img
						class='absolute top-6 right-6 cursor-pointer opacity-75 hover:opacity-100 hover:scale-125 transition-transform'
						style='width: 40px;' src='/idees-recues/icon-cross.svg' alt='Croix icon'
						on:click={toggleSelectedGrid.bind(null, index)} />
					<div class='flex flex-col space-between justify-between h-full max-h-full' data-aos='fade-in'>
						<div class='flex-shrink'>
							<p class='text-2xl text-white font-extrabold'>{@html elem.title}</p>
							<p class='mt-2 text-md'>{elem.subtitle}</p>
						</div>
						<div class='flex-1 bg-fpn-blue overflow-y-auto my-4'>
							<div class='p-4 flex flex-col gap-4 justify-center items-center'>
								{#if elem.testimonial}
									<div class=''>
										<p class='text-sm'>{@html elem.testimonial}</p>
									</div>
								{/if}
								<div class=''>
									<p class='underline text-md'>{elem.solution_title}</p>
									<p class='text-sm mt-4'>{@html elem.solution_text}</p>
								</div>
							</div>
						</div>
						<div class='flex-shrink' data-aos='slide-up'>
							<p class='text-md'>{elem.precta_text}</p>
							<div class='group mt-4 text-center transition-transform hover:scale-110'>
								<a href={browser ? passUtmParamsToLink(links['prejuge']) : links['prejuge'] } target='_blank'
									 class='text-lg uppercase p-4 bg-fpn-pink text-white text-sm font-bold cursor-pointer'>
									<img class='inline-block h-6 pr-3' src='/idees-recues/icon-donner.svg' alt='donner logo' />
									je fais un don
								</a>
							</div>
						</div>
					</div>
				</div>
			{/if}
		{/each}
	</div>
</section>

<style lang='postcss'>
    section > div:last-child > div::before, section > div:last-child > div::after {
            @apply border-fpn-pink;
            position: absolute;
            width: 40px;
            height: 40px;
            border-style: solid; /* or whatever style */
            content: ' ';

    }

	section > div:last-child > div::before {
		@apply top-8 left-8;
            border-width: 10px 0 0 10px;
	}

    .with-quote :global(> span::before) {
        position: absolute;
        content: ' ';
        background-image: url("/idees-recues/icon-quote.svg");
        background-size: 30px 30px;
        width: 30px;
        height: 30px;
        z-index: -10;
        top: -15px;
        left: -20px;
    }
</style>