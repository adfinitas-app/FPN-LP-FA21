import { browser } from '$app/env';

export function passQueryParamsToLink(base) {
	const url = new URL(base);
	if (browser) {
		const params = new URLSearchParams(window.location.search);
		params.forEach((value, key) => url.searchParams.set(key, value));
	}
	return url.href;
}

export const links = {
	'logo': 'https://www.perce-neige.org/',
	'header': 'https://donner.perce-neige.org/b?cid=71&utm_campaign=FA21&utm_source=PH1&utm_medium=organic&reserved_code_media=FA21PH',
	'prejuge': 'https://donner.perce-neige.org/b?cid=71&utm_campaign=FA21&utm_source=PH1&utm_medium=organic&reserved_code_media=FA21PH',
	'donner_66': 'https://donner.perce-neige.org/b?cid=71&utm_campaign=FA21&utm_source=PH1&utm_medium=organic&reserved_code_media=FA21PH',
	'donner_75': 'https://donner.perce-neige.org/b?cid=72&utm_campaign=FA21&utm_source=PH1&utm_medium=organic&reserved_code_media=FA21PH',
	'facebook': 'https://www.facebook.com/associationperceneige/',
	'twitter': 'https://twitter.com/PerceNeigeinfos/',
	'youtube': 'https://www.youtube.com/playlist?list=PL52013EC3213402EE',
	'instagram': 'https://www.instagram.com/fondationperceneige/',
	'linkedin': 'https://fr.linkedin.com/company/perce-neige',
	'mentions_legales': 'https://www.perce-neige.org/mentions-legales/',
	'gestion_des_cookies': 'https://www.perce-neige.org/politique-de-protection-des-donnees-a-caractere-personnel/'
};