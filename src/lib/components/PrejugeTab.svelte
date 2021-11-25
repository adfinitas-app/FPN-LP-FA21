<script>
	import { tab_options } from '$lib/block-prejuge-config';

	let selected_tab = 0;
</script>

<section class='bg-fpn-blue text-white w-full flex flex-col'>
	<div class='grid grid-cols-3 items-center justify-center'>
		{#each tab_options as elem, index}
			<div class='group text-center text-5xl py-14 cursor-pointer'
					 class:bg-fpn-blue-dark={selected_tab !== index}
					 on:click={() => selected_tab = index}>
				<div>
					{elem.percentage}<span class='pl-2 text-xl'>%</span>
				</div>
				<div class='border-b-8 w-20 mt-6 mx-auto group-hover:border-fpn-orange'
						 class:border-fpn-orange={selected_tab === index}></div>
			</div>
		{/each}
	</div>
	<div class='flex-grow flex justify-center items-center px-16'>
		<img src='/icon-info.png' alt='Information icon' style='width: 45px;' />
		<div class='text-xl pl-14'>
			{#each tab_options as elem, index}
				<p class:hidden={selected_tab !== index}>{elem.text}</p>
			{/each}
		</div>
	</div>
</section>