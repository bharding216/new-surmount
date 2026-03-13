<script>
	import { texasCities } from '$lib/data/texas-cities.js';
</script>

<svelte:head>
	<title>Web Development Services Across Texas | Cities We Serve | Surmount</title>
	<meta name="description" content="Surmount Web Services provides professional web design, custom software development, SEO, and website maintenance to businesses across Texas. Find services in your city." />
	<link rel="canonical" href="https://getsurmount.com/locations" />
	<meta property="og:title" content="Web Development Services Across Texas | Cities We Serve" />
	<meta property="og:description" content="Professional web design, custom software, SEO, and website maintenance for businesses across Texas." />
	<meta property="og:url" content="https://getsurmount.com/locations" />
	<meta property="og:type" content="website" />
	<meta property="og:site_name" content="Surmount Web Services" />
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:title" content="Web Development Services Across Texas | Cities We Serve" />
	<meta name="twitter:description" content="Professional web design, custom software, SEO, and website maintenance for businesses across Texas." />
	<meta name="geo.region" content="US-TX" />
</svelte:head>

<div class="container">
	<section class="text-center pt-5 pb-3">
		<h1>Web Development Services Across Texas</h1>
		<p class="lead">We build websites, web apps, and custom software for small businesses in cities across the Lone Star State</p>
	</section>

	<section class="py-5">
		<div class="row">
			{#each texasCities as city}
				<div class="col-6 col-md-4 col-lg-3 mb-4">
					<a href="/locations/{city.slug}" class="city-card-link">
						<div class="city-card">
							<i class="fa-solid fa-location-dot"></i>
							<h3>{city.name}</h3>
							<span class="learn-more">View Services &rarr;</span>
						</div>
					</a>
				</div>
			{/each}
		</div>
	</section>

	<section class="py-5">
		<div class="row text-center">
			<div class="col-12">
				<h2 class="mb-3">Don't See Your City?</h2>
				<p class="lead mb-4">We work with businesses all across Texas. Contact us to discuss your project regardless of location.</p>
				<a href="https://calendly.com/brandon-surmount/intro-call" target="_blank" rel="noopener noreferrer">
					<button type="button" class="btn btn-primary">Book a Free Strategy Call</button>
				</a>
			</div>
		</div>
	</section>
</div>

<style>
	.city-card-link {
		text-decoration: none;
		color: inherit;
	}

	.city-card {
		padding: 20px;
		background-color: var(--light-green);
		border-radius: 15px;
		height: 100%;
		border: 1px solid #ddd;
		box-shadow: 0px 2px 6px 0px rgba(0,0,0,0.1);
		transition: transform 0.2s, box-shadow 0.2s;
		text-align: center;
	}

	.city-card:hover {
		transform: translateY(-3px);
		box-shadow: 0px 6px 12px 0px rgba(0,0,0,0.15);
	}

	.city-card i {
		color: var(--dark-green);
		font-size: 1.5rem;
		margin-bottom: 10px;
	}

	.city-card h3 {
		color: var(--dark-green);
		font-size: 1.1rem;
		margin-bottom: 8px;
	}

	.learn-more {
		color: var(--medium-green);
		font-weight: 600;
		font-size: 0.8rem;
	}
</style>
