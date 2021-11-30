export function disableScroll() {
	document.body.classList.add('overflow-hidden', 'h-full', 'md:overflow-auto', 'md:h-auto');
}

export function enableScroll() {
	document.body.classList.remove('overflow-hidden', 'h-full', 'md:overflow-auto', 'md:h-auto');
}