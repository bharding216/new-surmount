export function trackEvent(name, params = {}) {
	if (typeof window === 'undefined' || typeof window.gtag !== 'function') return;
	window.gtag('event', name, params);
}

export function trackPageView(pathname) {
	if (typeof window === 'undefined' || typeof window.gtag !== 'function') return;
	window.gtag('event', 'page_view', {
		page_path: pathname,
		page_location: window.location.href,
		page_title: document.title
	});
}
