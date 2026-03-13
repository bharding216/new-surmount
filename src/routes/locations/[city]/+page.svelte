<script>
	export let data;
	const city = data.city;
</script>

<svelte:head>
	<title>Web Designer & Developer in {city.name}, TX | Surmount Web Services</title>
	<meta name="description" content="Looking for a web designer or developer in {city.name}, Texas? Surmount builds professional websites, custom web apps, mobile apps, and provides SEO and maintenance services for small businesses in {city.name} and {city.county}." />
	<link rel="canonical" href="https://getsurmount.com/locations/{city.slug}" />
	<meta property="og:title" content="Web Designer & Developer in {city.name}, TX | Surmount" />
	<meta property="og:description" content="Professional web design, custom software, SEO, and website maintenance for small businesses in {city.name}, Texas." />
	<meta property="og:url" content="https://getsurmount.com/locations/{city.slug}" />
	<meta property="og:type" content="website" />
	<meta property="og:site_name" content="Surmount Web Services" />
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:title" content="Web Designer & Developer in {city.name}, TX | Surmount" />
	<meta name="twitter:description" content="Professional web design and custom software for businesses in {city.name}, Texas." />
	<meta name="geo.region" content="US-TX" />
	<meta name="geo.placename" content="{city.name}" />
	{@html `<script type="application/ld+json">${JSON.stringify({
		"@context": "https://schema.org",
		"@type": "LocalBusiness",
		"name": "Surmount Web Services",
		"description": `Professional web design, custom software development, and digital services for small businesses in ${city.name}, Texas.`,
		"url": `https://getsurmount.com/locations/${city.slug}`,
		"address": {
			"@type": "PostalAddress",
			"addressLocality": city.name,
			"addressRegion": "TX",
			"addressCountry": "US"
		},
		"areaServed": {
			"@type": "City",
			"name": city.name
		},
		"priceRange": "$1,000 - $25,000+",
		"hasOfferCatalog": {
			"@type": "OfferCatalog",
			"name": `Web Development Services in ${city.name}`,
			"itemListElement": [
				{ "@type": "Offer", "itemOffered": { "@type": "Service", "name": `Web Design in ${city.name}` } },
				{ "@type": "Offer", "itemOffered": { "@type": "Service", "name": `Web Development in ${city.name}` } },
				{ "@type": "Offer", "itemOffered": { "@type": "Service", "name": `SEO Services in ${city.name}` } },
				{ "@type": "Offer", "itemOffered": { "@type": "Service", "name": `Mobile App Development in ${city.name}` } },
				{ "@type": "Offer", "itemOffered": { "@type": "Service", "name": `Website Maintenance in ${city.name}` } }
			]
		}
	})}</script>`}
</svelte:head>

<div class="container">
	<section class="pt-5 pb-3">
		<div class="row mb-4">
			<div class="col-12 text-center">
				<h1>Web Design & Development in {city.name}, Texas</h1>
				<p class="lead">Professional websites, custom software, and digital services for small businesses in {city.name}, TX</p>
				<div class="mt-4">
					<a href="https://calendly.com/brandon-surmount/intro-call" target="_blank" rel="noopener noreferrer">
						<button type="button" class="btn btn-primary">Get a Free Quote for Your {city.name} Business</button>
					</a>
				</div>
			</div>
		</div>
	</section>
</div>

<section class="about-city-section py-5">
	<div class="container">
		<div class="row">
			<div class="col-lg-8 offset-lg-2">
				<h2 class="text-center mb-4">Why {city.name} Businesses Need a Professional Website</h2>
				<p>{city.description}</p>
				<p>Whether you're a startup looking to establish your online presence or an established business ready to upgrade your website, Surmount Web Services provides the expertise and personalized service that {city.name} businesses deserve. We understand the local market and build websites that help you stand out from competitors right here in {city.county}.</p>
				<p>With more customers searching online for local services every day, having a professional, mobile-friendly website is no longer optional — it's essential. If someone in {city.name} searches for your type of business and your website doesn't show up or looks outdated, you're losing customers to competitors who invested in their online presence.</p>
			</div>
		</div>
	</div>
</section>

<div class="container">
	<section class="py-5">
		<h2 class="text-center mb-5">Our Services in {city.name}</h2>
		<div class="row">
			<div class="col-md-6 col-lg-4 mb-4">
				<a href="/services/web-design" class="service-link">
					<div class="service-card">
						<i class="fa-solid fa-palette fa-2x"></i>
						<h3>Web Design</h3>
						<p>Custom, mobile-responsive website design for {city.name} businesses. From restaurants and salons to contractors and medical practices.</p>
						<span class="price-tag">From $1,000</span>
					</div>
				</a>
			</div>

			<div class="col-md-6 col-lg-4 mb-4">
				<a href="/services/web-development" class="service-link">
					<div class="service-card">
						<i class="fa-solid fa-code fa-2x"></i>
						<h3>Custom Web Apps</h3>
						<p>Full-stack web applications, dashboards, portals, and internal tools built to streamline your {city.name} business operations.</p>
						<span class="price-tag">From $5,000</span>
					</div>
				</a>
			</div>

			<div class="col-md-6 col-lg-4 mb-4">
				<a href="/services/mobile-apps" class="service-link">
					<div class="service-card">
						<i class="fa-solid fa-mobile-screen-button fa-2x"></i>
						<h3>Mobile Apps</h3>
						<p>iOS and Android mobile applications for {city.name} businesses looking to reach customers on their phones.</p>
						<span class="price-tag">From $10,000</span>
					</div>
				</a>
			</div>

			<div class="col-md-6 col-lg-4 mb-4">
				<a href="/services/ecommerce" class="service-link">
					<div class="service-card">
						<i class="fa-solid fa-cart-shopping fa-2x"></i>
						<h3>E-Commerce</h3>
						<p>Online stores for {city.name} retailers with product catalogs, payment processing, and inventory management.</p>
						<span class="price-tag">From $5,000</span>
					</div>
				</a>
			</div>

			<div class="col-md-6 col-lg-4 mb-4">
				<a href="/services/seo" class="service-link">
					<div class="service-card">
						<i class="fa-solid fa-magnifying-glass fa-2x"></i>
						<h3>SEO Services</h3>
						<p>Get your {city.name} business found on Google. Local SEO, Google Business Profile optimization, and content strategy.</p>
						<span class="price-tag">Custom Quote</span>
					</div>
				</a>
			</div>

			<div class="col-md-6 col-lg-4 mb-4">
				<a href="/services/website-maintenance" class="service-link">
					<div class="service-card">
						<i class="fa-solid fa-wrench fa-2x"></i>
						<h3>Website Maintenance</h3>
						<p>Keep your {city.name} business website running smoothly with ongoing updates, security, and support.</p>
						<span class="price-tag">Monthly Plans</span>
					</div>
				</a>
			</div>
		</div>
	</section>

	<section class="py-5">
		<h2 class="text-center mb-5">Industries We Serve in {city.name}</h2>
		<div class="row justify-content-center">
			{#each city.industries as industry}
				<div class="col-6 col-md-4 col-lg-2 mb-3">
					<div class="industry-tag text-center">
						{industry}
					</div>
				</div>
			{/each}
		</div>
	</section>

	<section class="py-5">
		<h2 class="text-center mb-4">Why Choose Surmount for Your {city.name} Business?</h2>
		<div class="row">
			<div class="col-md-6 mb-4">
				<div class="benefit-card">
					<i class="fa-solid fa-handshake"></i>
					<h4>Personal Service</h4>
					<p>You work directly with the developer — no account managers or middlemen. Your project gets dedicated attention from start to finish.</p>
				</div>
			</div>
			<div class="col-md-6 mb-4">
				<div class="benefit-card">
					<i class="fa-solid fa-map-location-dot"></i>
					<h4>Texas-Based</h4>
					<p>We're based in San Antonio and serve businesses across Texas. We understand the local market and time zone-friendly communication is guaranteed.</p>
				</div>
			</div>
			<div class="col-md-6 mb-4">
				<div class="benefit-card">
					<i class="fa-solid fa-dollar-sign"></i>
					<h4>Affordable Pricing</h4>
					<p>Professional websites starting at $1,000. No hidden fees, no surprise charges. Get a scoped quote before we start.</p>
				</div>
			</div>
			<div class="col-md-6 mb-4">
				<div class="benefit-card">
					<i class="fa-solid fa-rocket"></i>
					<h4>Results-Driven</h4>
					<p>We've built software used by 400+ organizations and helped businesses across Texas grow their online presence and streamline operations.</p>
				</div>
			</div>
		</div>
	</section>

	<section class="py-5">
		<h2 class="text-center mb-4">Frequently Asked Questions — {city.name} Web Design</h2>
		<div class="row justify-content-center">
			<div class="col-lg-8">
				<details class="faq-item">
					<summary>How much does a website cost in {city.name}?</summary>
					<p>Website costs vary based on complexity. A professional small business website starts at $1,000, while custom web applications with databases and integrations start at $5,000. We provide a detailed quote after understanding your specific needs during a free consultation.</p>
				</details>

				<details class="faq-item">
					<summary>How long does it take to build a website?</summary>
					<p>A standard small business website typically takes 2-4 weeks. More complex web applications can take 4-12 weeks depending on features and scope. We'll provide a realistic timeline during our initial strategy call.</p>
				</details>

				<details class="faq-item">
					<summary>Do you work with businesses outside of {city.name}?</summary>
					<p>Yes! While we serve many businesses in {city.name} and {city.county}, we work with clients across Texas and beyond. All communication happens via video calls, email, and project management tools.</p>
				</details>

				<details class="faq-item">
					<summary>Will my website show up on Google in {city.name}?</summary>
					<p>All our websites are built with SEO best practices including proper meta tags, fast loading speeds, mobile responsiveness, and structured data. We also offer dedicated SEO services to help your {city.name} business rank higher in local search results.</p>
				</details>

				<details class="faq-item">
					<summary>Can you redesign my existing website?</summary>
					<p>Absolutely. Many of our {city.name} clients come to us with outdated websites that need a refresh. We can redesign your site to be modern, mobile-friendly, and optimized for search engines while preserving your existing content and SEO equity.</p>
				</details>
			</div>
		</div>
	</section>

	<section class="py-5 mb-5">
		<div class="row text-center">
			<div class="col-12">
				<h2 class="mb-4">Ready to Grow Your {city.name} Business Online?</h2>
				<p class="lead mb-4">Book a free 30-minute strategy call to discuss your project. No obligation, no pressure — just honest advice on the best path forward.</p>
				<a href="https://calendly.com/brandon-surmount/intro-call" target="_blank" rel="noopener noreferrer">
					<button type="button" class="btn btn-primary btn-lg">Book Your Free Strategy Call</button>
				</a>
				<p class="mt-3 text-muted">Or email us at <a href="mailto:brandon@getsurmount.com">brandon@getsurmount.com</a></p>
			</div>
		</div>
	</section>
</div>

<style>
	.about-city-section {
		background-color: var(--light-green);
	}

	.about-city-section p {
		font-size: 1.05rem;
		line-height: 1.8;
		color: #444;
	}

	.service-link {
		text-decoration: none;
		color: inherit;
	}

	.service-card {
		padding: 25px;
		background-color: #fff;
		border-radius: 15px;
		height: 100%;
		border: 1px solid #e0e0e0;
		box-shadow: 0px 2px 6px rgba(0,0,0,0.08);
		transition: transform 0.2s, box-shadow 0.2s;
		text-align: center;
	}

	.service-card:hover {
		transform: translateY(-5px);
		box-shadow: 0px 8px 16px rgba(0,0,0,0.15);
	}

	.service-card i {
		color: var(--dark-green);
		margin-bottom: 15px;
	}

	.service-card h3 {
		color: var(--dark-green);
		font-size: 1.2rem;
		margin-bottom: 12px;
	}

	.service-card p {
		color: #555;
		font-size: 0.9rem;
		margin-bottom: 12px;
	}

	.price-tag {
		display: inline-block;
		background-color: var(--dark-green);
		color: white;
		padding: 4px 12px;
		border-radius: 12px;
		font-size: 0.8rem;
		font-weight: 600;
	}

	.industry-tag {
		background-color: var(--light-green);
		border: 1px solid var(--medium-green);
		border-radius: 10px;
		padding: 10px;
		font-size: 0.85rem;
		text-transform: capitalize;
		color: var(--dark-green);
		font-weight: 500;
	}

	.benefit-card {
		padding: 25px;
		background-color: #f8f9fa;
		border-radius: 15px;
		height: 100%;
		border-left: 4px solid var(--dark-green);
	}

	.benefit-card i {
		color: var(--dark-green);
		font-size: 1.5rem;
		margin-bottom: 12px;
	}

	.benefit-card h4 {
		color: var(--dark-green);
		margin-bottom: 10px;
	}

	.benefit-card p {
		color: #555;
		font-size: 0.95rem;
		margin-bottom: 0;
	}

	.faq-item {
		margin-bottom: 15px;
		border: 1px solid #e0e0e0;
		border-radius: 10px;
		overflow: hidden;
	}

	.faq-item summary {
		padding: 18px 20px;
		cursor: pointer;
		font-weight: 600;
		color: var(--dark-green);
		background-color: #f8f9fa;
		font-size: 1rem;
	}

	.faq-item summary:hover {
		background-color: var(--light-green);
	}

	.faq-item p {
		padding: 15px 20px;
		margin: 0;
		color: #555;
		line-height: 1.6;
	}

	.btn-lg {
		padding: 12px 30px;
		font-size: 1.1rem;
	}
</style>
