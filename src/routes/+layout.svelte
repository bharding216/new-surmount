<script>
	import { page } from '$app/stores';
	import { browser } from '$app/environment';
	import { onMount } from 'svelte';
	import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit';
	import Header from './Header.svelte';
	import Footer from './Footer.svelte';
	import { trackEvent, trackPageView } from '$lib/analytics';
	import './styles.css';

	injectSpeedInsights();

	let lastPath = '';

	if (browser) {
		page.subscribe(($page) => {
			const path = $page.url.pathname;
			if (path === lastPath) return;
			if (lastPath) {
				trackPageView(path);
			}
			lastPath = path;
		});
	}

	onMount(() => {
		function handleClick(event) {
			const link = event.target.closest('a');
			if (!link) return;
			const href = link.getAttribute('href') || '';
			if (href.includes('calendly.com')) {
				trackEvent('book_call', { link_url: href });
			} else if (href === '/contact' || href.startsWith('/contact?')) {
				trackEvent('assessment_cta_click', { link_url: href });
			}
		}

		document.addEventListener('click', handleClick);
		return () => document.removeEventListener('click', handleClick);
	});
</script>

<div>
	<Header />

	<main>
		<slot />
	</main>

	<Footer />
</div>
