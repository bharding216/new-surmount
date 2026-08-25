<script>
	import toddly1 from '$lib/images/toddly1.png';
	import toddly2 from '$lib/images/toddly2.png';
	import toddly3 from '$lib/images/toddly3.png';
	import toddlyWebsite from '$lib/images/toddly-map.png';
</script>

<svelte:head>
	<title>Childcare Software Used by 400+ Schools | Surmount Case Study</title>
	<meta name="description" content="We built a childcare SaaS platform with automated billing, parent communications, waitlists, and registration. It is used by 400+ schools." />
	<link rel="canonical" href="https://getsurmount.com/work/childcare-saas" />
	<meta property="og:title" content="Childcare Software Used by 400+ Schools | Surmount" />
	<meta property="og:description" content="A case study of the childcare platform we built: payments, waitlists, registration, and parent communications for 400+ schools." />
	<meta property="og:url" content="https://getsurmount.com/work/childcare-saas" />
	<meta property="og:type" content="article" />
	<meta property="og:site_name" content="Surmount Web Services" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Childcare Software Used by 400+ Schools | Surmount" />
	<meta name="twitter:description" content="A case study of the childcare platform we built for 400+ schools." />
</svelte:head>

<div class="container py-5">
	<section class="text-center mb-5">
		<p class="eyebrow"><a href="/portfolio">Work</a> / Childcare</p>
		<h1 class="pb-3">Software used by 400+ childcare centers</h1>
		<p class="lead">We built and launched a platform that automates billing, parent communications, waitlists, and registration — the work that used to live in spreadsheets.</p>
	</section>

	<section class="mb-5 text-center">
		<img src={toddlyWebsite} alt="Childcare platform map connecting parents with local schools" class="hero-image image-shadow">
	</section>

	<section class="case-block mb-5">
		<h2>The problem</h2>
		<p>Childcare centers run on enrollment. That means waitlists, registration packets, tuition, and a constant stream of parent questions. Most of it was still manual: spreadsheets for the waitlist, email for updates, and staff time for billing.</p>
		<p>Parents needed a way to find a school, get on a list, and pay. Schools needed one place to run that process instead of stitching together tools that were not built for childcare.</p>
	</section>

	<section class="case-block mb-5">
		<h2>What we built</h2>
		<ul>
			<li>Online payments so tuition and fees are not chased by hand</li>
			<li>Parent communications instead of one-off emails and phone trees</li>
			<li>Automated waitlist management</li>
			<li>Registration workflows that replace paper packets</li>
			<li>A live map so parents can find nearby schools</li>
			<li>Calendar integration for schedules and important dates</li>
		</ul>
	</section>

	<div class="row mb-5">
		<div class="col-12 col-md-4 mb-4">
			<img src={toddly1} alt="School directory and map" class="image-size image-shadow">
		</div>
		<div class="col-12 col-md-4 mb-4">
			<img src={toddly2} alt="Billing and parent communications" class="image-size image-shadow">
		</div>
		<div class="col-12 col-md-4 mb-4">
			<img src={toddly3} alt="Waitlist and registration workflows" class="image-size image-shadow">
		</div>
	</div>

	<section class="case-block mb-5">
		<h2>The result</h2>
		<p>The platform is used by <strong>400+ schools</strong>. Billing and parent communications run in the product instead of in inboxes and spreadsheets.</p>
		<p>That is the work we still do: take a people-heavy operation, find the expensive manual pieces, and replace them with software that matches how the business actually runs.</p>
	</section>

	<section class="text-center py-5">
		<h2 class="pb-3">Running a childcare operation on spreadsheets?</h2>
		<p class="lead pb-3">Tell us what enrollment, billing, or parent communication looks like today. We'll tell you if custom software is worth it.</p>
		<a href="/contact"><button type="button" class="btn btn-primary">Get a Free Software Assessment</button></a>
		<p class="mt-3"><a href="/industries/childcare">More on childcare software</a> · <a href="/portfolio">All work</a></p>
	</section>
</div>

<style>
	.eyebrow {
		text-transform: uppercase;
		letter-spacing: 0.08em;
		font-size: 0.85rem;
		color: var(--dark-green);
	}

	.hero-image {
		width: 100%;
		max-width: 800px;
		height: auto;
	}

	.image-shadow {
		box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
	}

	.case-block {
		max-width: 720px;
		margin-left: auto;
		margin-right: auto;
	}

	.case-block ul {
		padding-left: 1.25rem;
	}

	.case-block li {
		margin-bottom: 0.5rem;
	}
</style>
