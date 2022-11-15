import { browser } from '$app/env';

export function passUtmParamsToLink(base) {
	const url = new URL(base);
	if (browser) {
		const params = new URLSearchParams(window.location.search);
		params
			.forEach((value, key) => {
				if (key === 'utm_campaign' || key === 'utm_source' || key === 'utm_medium' || key === 'reserved_code_media') {
					url.searchParams.set(key, value);
				}
			});
	}
	return url.href;
}

export const links = {
	'header': 'https://donner.perce-neige.org/b?cid=85&lang=fr_FR',
	'prejuge': 'https://donner.perce-neige.org/b?cid=71&utm_campaign=FA21&utm_source=LP&utm_medium=organic',
	'donner_50': 'https://donner.perce-neige.org/b?cid=85&lang=fr_FR&amount=5000',
	'donner_100': 'https://donner.perce-neige.org/b?cid=85&lang=fr_FR&amount=10000',
	'donner_200': 'https://donner.perce-neige.org/b?cid=85&lang=fr_FR&amount=20000',
	'facebook': 'https://www.facebook.com/associationperceneige/',
	'twitter': 'https://twitter.com/PerceNeigeinfos/',
	'youtube': 'https://www.youtube.com/playlist?list=PL52013EC3213402EE',
	'instagram': 'https://www.instagram.com/fondationperceneige/',
	'linkedin': 'https://fr.linkedin.com/company/perce-neige',
	'mentions_legales': 'https://www.perce-neige.org/mentions-legales/',
	'gestion_des_cookies': 'https://www.perce-neige.org/politique-de-protection-des-donnees-a-caractere-personnel/',
	'ici': 'https://donner.perce-neige.org/b?cid=85&lang=fr_FR'
};