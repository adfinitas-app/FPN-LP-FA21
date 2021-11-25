<script>
	import { grid_options } from '$lib/block-prejuge-config';

	let selected_grid = null;
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
							<div class='h-full w-full flex flex-col space-between'>
								<div class='bg-fpn-blue-dark py-2'>Préjugé {index}</div>
								<div class='relative italic flex-grow flex justify-center items-center'>
									<img class='absolute z-0 top-8 left-8 opacity-75' style='width: 40px' src='/icon-quote.svg'
											 alt='Plus icon' />
									<p class='relative mx-4'>{elem.title}</p>
									<img class='absolute bottom-4 right-4 cursor-pointer' style='width: 30px;' src='/icon-plus.svg'
											 alt='Plus icon'
											 on:click={() => selected_grid = index} />
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
			{#if elem.type === 'prejuge'}
				<div class='z-20 absolute top-0 w-full h-full bg-fpn-blue transition text-white p-12 pb-8'
						 class:hidden={selected_grid !== index}>
					<img class='absolute top-6 right-6 cursor-pointer' style='width: 40px;' src='/icon-cross.svg' alt='Croix icon'
							 on:click={() => selected_grid = null} />
					<div class='flex flex-col space-between justify-between h-full max-h-full'>
						<div class='flex-shrink'>
							<p class='italic text-xl'>Préjugé {index}</p>
							<p class='italic text-xl'>{elem.title}</p>
							<p class='mt-2 italic text-md'>{elem.subtitle}</p>
						</div>
						<div class='flex-1 bg-fpn-blue-dark overflow-y-auto my-4'>
							<div class='p-4 flex flex-col gap-4 justify-center items-center h-full'>
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
						<div class='flex-shrink'>
							<p class='text-xl font-extrabold'>{elem.precta_text}</p>
							<div class='mt-4 text-center'>
								<a class='text-lg uppercase p-4 bg-fpn-orange text-white text-sm font-bold cursor-pointer'>
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
            border-width: 10px 0 0 10px;
        }
    }
</style>