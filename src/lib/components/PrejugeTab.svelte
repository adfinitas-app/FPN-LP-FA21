<script>
	import { tab_options } from '$lib/block-prejuge-config';

	let selected_tab = 0;
</script>

<section class='bg-fpn-blue text-white w-full flex flex-col'>
	<div class='grid grid-cols-3 items-center justify-center'>
		{#each tab_options as elem, index}
			<div class='group text-center text-2xl md:text-4xl py-6 md:py-14 cursor-pointer'
					 class:bg-fpn-blue-dark={selected_tab !== index}
					 on:click={() => selected_tab = index}>
				<div>
					{elem.percentage}<span class='pl-2 text-xl'>%</span>
				</div>
				<div class='border-b-4 md:border-b-8 w-12 md:w-20 mt-2 md:mt-6 mx-auto group-hover:border-fpn-orange transition-colors'
						 class:border-fpn-orange={selected_tab === index}></div>
			</div>
		{/each}
	</div>
	<div class='flex-grow flex justify-center items-center p-4 md:px-16'>
		<img src='/prejuges/icon-info.png' alt='Information icon' style='width: 35px;' />
		<div class='text-md md:text-lg pl-4 md:pl-14'>
			{#each tab_options as elem, index}
				<p class:hidden={selected_tab !== index}>{elem.text}</p>
			{/each}
		</div>
	</div>
</section>