<script>
	import toddly1 from '$lib/images/toddly1.png';
	import toddly2 from '$lib/images/toddly2.png';
</script>

<svelte:head>
	<title>Custom Software for Childcare Centers | Surmount</title>
	<meta name="description" content="Custom childcare software for enrollment, waitlists, billing, and parent communications. Built by the team behind a platform used by 400+ schools." />
	<link rel="canonical" href="https://getsurmount.com/industries/childcare" />
	<meta property="og:title" content="Custom Software for Childcare Centers | Surmount" />
	<meta property="og:description" content="Enrollment, waitlists, billing, and parent communications — without the spreadsheet stack. Used by 400+ schools." />
	<meta property="og:url" content="https://getsurmount.com/industries/childcare" />
	<meta property="og:type" content="website" />
	<meta property="og:site_name" content="Surmount Web Services" />
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:title" content="Custom Software for Childcare Centers | Surmount" />
	<meta name="twitter:description" content="Enrollment, waitlists, billing, and parent communications for childcare operations." />
</svelte:head>

<div class="container py-5">
	<section class="text-center mb-5">
		<h1>Software for childcare &amp; education</h1>
		<p class="lead">Enrollment, waitlists, billing, and parent communications — built around how a school actually operates, not how a generic CRM thinks it should.</p>
		<a href="/contact"><button type="button" class="btn btn-primary">Get a Free Software Assessment</button></a>
	</section>

	<section class="row mb-5">
		<div class="col-md-6 mb-4">
			<img src={toddly1} alt="Childcare platform used by schools" class="image-size image-shadow">
		</div>
		<div class="col-md-6 mb-4">
			<img src={toddly2} alt="Billing and parent communications" class="image-size image-shadow">
		</div>
	</section>

	<section class="mb-5 content">
		<h2>The work that eats the office</h2>
		<ul>
			<li>Waitlists managed in a spreadsheet nobody else understands</li>
			<li>Registration packets collected by email and printed forms</li>
			<li>Tuition chased one family at a time</li>
			<li>Parent updates sent as one-off texts and emails</li>
			<li>Off-the-shelf school software that covers 70% of the process</li>
		</ul>
		<p>If that is the day, custom software is usually cheaper than another hire.</p>
	</section>

	<section class="mb-5 content">
		<h2>What we automate</h2>
		<ul>
			<li>Enrollment and registration workflows</li>
			<li>Waitlist management</li>
			<li>Billing and payments</li>
			<li>Parent communications</li>
			<li>Calendars, maps, and the status the office currently tracks by hand</li>
		</ul>
	</section>

	<section class="mb-5 content">
		<h2>Proof</h2>
		<p>We built a platform used by <strong>400+ schools</strong> with automated billing and parent communications. That is not a mockup. It is production software.</p>
		<p><a href="/work/childcare-saas">Read the case study</a></p>
	</section>

	<section class="text-center py-5">
		<h2 class="pb-3">Tell us how enrollment works today</h2>
		<p class="lead pb-3">We'll tell you whether custom software is worth building.</p>
		<a href="/contact"><button type="button" class="btn btn-primary">Get a Free Software Assessment</button></a>
		<p class="mt-3"><a href="https://calendly.com/brandon-surmount/intro-call" target="_blank" rel="noopener noreferrer">Or book a call</a></p>
	</section>
</div>

<style>
	.content {
		max-width: 720px;
		margin-left: auto;
		margin-right: auto;
	}

	.image-shadow {
		box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
	}

	ul {
		padding-left: 1.25rem;
	}

	li {
		margin-bottom: 0.5rem;
	}
</style>
