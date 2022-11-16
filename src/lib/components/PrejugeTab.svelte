<script>
	import { tab_options } from '$lib/block-prejuge-config';

	let selected_tab = 0;
</script>

<section class='bg-fpn-blue-light text-white w-full flex flex-col'>
	<div class='grid grid-cols-3 items-center justify-center'>
		{#each tab_options as elem, index}
			<div class='group text-center text-2xl md:text-4xl py-6 md:py-14 cursor-pointer'
					 class:bg-fpn-blue={selected_tab !== index}
					 on:click={() => selected_tab = index}>
				<div class="font-bold">
					{elem.percentage}<span class='pl-2 font-bold text-xl'>%</span>
				</div>
				<div class='border-b-4 md:border-b-8 w-12 md:w-20 mt-1 relative md:mt-4 mx-auto arrow-down border-fpn-blue-light group-hover:border-fpn-pink transition-colors'
						 class:!border-fpn-pink={selected_tab === index}></div>
			</div>
		{/each}
	</div>
	<div class='flex-grow flex justify-center items-center p-4 md:px-16'>
		<img src='/idees-recues/icon-info.png' alt='Information icon' style='width: 35px;' />
		<div class='text-md md:text-lg pl-4 md:pl-14'>
			{#each tab_options as elem, index}
				<p class:hidden={selected_tab !== index}>{elem.text}</p>
			{/each}
		</div>
	</div>
</section>

<style>
	.arrow-down:after {
		content: "";
		width: 0px;
		height: 0px;
		position: absolute;
		border-left: 5px solid transparent;
		border-right: 5px solid transparent;
		border-top: 5px solid #74a5c8;
		border-bottom: 5px solid transparent;
		left: 0;
		transition: all;
		transition-duration: 150ms;
		margin-left: auto;
		right: 0;
		margin-right: auto;
		top: 8px;
	}

	.group:hover .arrow-down:after {
		border-top: 5px solid #F73659;
		transition: all;
		transition-duration: 150ms;
	}

	.\!border-fpn-pink::after {
		border-top: 5px solid #F73659;
		transition: all;
		transition-duration: 150ms;
	}
</style>