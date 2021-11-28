let supportsPassive = false;
try {
	window.addEventListener('test', null, Object.defineProperty({}, 'passive', {
		get: function() {
			supportsPassive = true;
		}
	}));
} catch (e) {
}

let wheelOpt = supportsPassive ? { passive: false } : false;

function preventDefault(e) {
	e.preventDefault();
}

export function disableScroll() {
	document.body.classList.add('overflow-hidden', 'h-full', 'md:overflow-auto', 'md:h-auto');
	document.body.addEventListener('touchmove', preventDefault, wheelOpt);
}

export function enableScroll() {
	document.body.classList.remove('overflow-hidden', 'h-full', 'md:overflow-auto', 'md:h-auto');
	document.body.removeEventListener('touchmove', preventDefault, wheelOpt);
}