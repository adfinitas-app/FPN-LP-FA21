<script>
	import { grid_options } from '$lib/block-prejuge-config';

	let selected_grid = 1;
</script>

<section class='relative'>
	<div class='grid grid-cols-3 gap-8 text-white text-2xl text-center'>
		{#each grid_options as elem, index}
			<div>
				<div class='relative w-full inline-block'>
					<div class='mt-full'></div>
					<div class='absolute top-0 bottom-0 left-0 right-0 bg-fpn-blue'>
						{#if elem.type === 'img'}
							<img src={elem.src} />
						{:else}
							<img class='absolute z-0 top-16 left-10' style='width: 50px' src='/icon-quote.svg' alt='Plus icon' />
							<div class='h-full w-full flex justify-center items-center'>
								<p class='z-10 mx-10 italic'>
									{elem.title}
								</p>
							</div>
							<img class='absolute bottom-8 right-8 cursor-pointer' style='width: 40px;' src='/icon-plus.svg' alt='Plus icon'
									 on:click={() => selected_grid = index} />
						{/if}
					</div>
				</div>
			</div>
		{/each}
	</div>
	<div>
		{#each grid_options as elem, index}
			{#if elem.type === 'prejuge'}
				<div class='z-20 absolute top-0 min-w-full min-h-full bg-fpn-blue transition text-white p-16'
						 class:hidden={selected_grid !== index}>
					<img class='absolute top-8 right-8 cursor-pointer' src='/icon-cross.svg' alt='Croix icon'
							 on:click={() => selected_grid = null} />
					<div class='flex flex-col space-between h-full'>
						<div class='pr-10'>
							<p class='italic text-2xl'>{elem.title}</p>
							<p class='mx-10 mt-10 text-xl italic'>{elem.subtitle}</p>
						</div>
						{#if elem.testimonial}
							<div class='mx-10 mt-10'>
								<p class='italic text-md'>{@html elem.testimonial}</p>
							</div>
						{/if}
						<div class='border-b-8 w-64 my-10 mx-auto border-fpn-orange'></div>
						<div class='mx-10'>
							<p class='italic underline text-md'>{elem.solution_title}</p>
							<p class='italic text-md mt-4'>{@html elem.solution_text}</p>
						</div>
						<div class='mx-10 mt-10'>
							<p class='text-xl font-extrabold italic'>{elem.precta_text}</p>
							<div class='mt-10 text-center'>
								<a class='uppercase p-5 bg-fpn-orange text-white text-sm font-bold cursor-pointer'>
									<img class='inline-block h-6 pr-3' src='/icon-donner.svg' alt='donner logo' />
									Faire un don
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
    section > div:last-child > div {
        &:before, &:after {
            @apply border-fpn-orange;
            position: absolute;
            width: 40px;
            height: 40px;
            border-style: solid; /* or whatever style */
            content: ' ';
        }

        &:before {
            @apply top-8 left-8;
            border-width: 12px 0 0 12px;
        }
    }
</style>