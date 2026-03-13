import { texasCities } from '$lib/data/texas-cities.js';
import { error } from '@sveltejs/kit';

export const prerender = true;

export function entries() {
	return texasCities.map((city) => ({ city: city.slug }));
}

export function load({ params }) {
	const city = texasCities.find((c) => c.slug === params.city);

	if (!city) {
		throw error(404, 'City not found');
	}

	return { city };
}
