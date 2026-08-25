<svelte:head>
	<title>Industries We Build Software For | Surmount</title>
	<meta name="description" content="Custom operational software for childcare, field-service trades, and professional services businesses that have outgrown spreadsheets." />
	<link rel="canonical" href="https://getsurmount.com/industries" />
	<meta property="og:title" content="Industries We Build Software For | Surmount" />
	<meta property="og:description" content="Custom operational software for childcare, field-service trades, and professional services." />
	<meta property="og:url" content="https://getsurmount.com/industries" />
	<meta property="og:type" content="website" />
	<meta property="og:site_name" content="Surmount Web Services" />
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:title" content="Industries We Build Software For | Surmount" />
	<meta name="twitter:description" content="Custom operational software for childcare, field-service trades, and professional services." />
</svelte:head>

<div class="container py-5">
	<section class="text-center mb-5">
		<h1>Who we work with</h1>
		<p class="lead">Service businesses with people-heavy operations. If your team is the glue between tools, we build the software that should have been there.</p>
	</section>

	<section class="row">
		<div class="col-md-4 mb-4">
			<a href="/industries/childcare" class="industry-link">
				<div class="industry-card">
					<i class="fa-solid fa-school fa-2x"></i>
					<h2>Childcare &amp; education</h2>
					<p>Enrollment, waitlists, billing, and parent communications. We built software used by 400+ schools.</p>
					<span>See childcare software &rarr;</span>
				</div>
			</a>
		</div>
		<div class="col-md-4 mb-4">
			<a href="/industries/field-services" class="industry-link">
				<div class="industry-card">
					<i class="fa-solid fa-truck-pickup fa-2x"></i>
					<h2>Field-service trades</h2>
					<p>HVAC, plumbing, electrical, landscaping. Scheduling, dispatch, estimates, and invoicing that match how jobs actually run.</p>
					<span>See field-service software &rarr;</span>
				</div>
			</a>
		</div>
		<div class="col-md-4 mb-4">
			<a href="/industries/professional-services" class="industry-link">
				<div class="industry-card">
					<i class="fa-solid fa-briefcase fa-2x"></i>
					<h2>Professional services</h2>
					<p>Agencies, consultants, and engineering firms. Client portals, bidding, documents, and reporting without the spreadsheet shuffle.</p>
					<span>See professional services software &rarr;</span>
				</div>
			</a>
		</div>
	</section>

	<section class="text-center py-5">
		<h2 class="pb-3">Not on this list?</h2>
		<p class="lead pb-3">If the business is held together by spreadsheets, it is probably in range. Tell us what you are doing today.</p>
		<a href="/contact"><button type="button" class="btn btn-primary">Get a Free Software Assessment</button></a>
	</section>
</div>

<style>
	.industry-link {
		text-decoration: none;
		color: inherit;
	}

	.industry-card {
		padding: 30px;
		background-color: var(--light-green);
		border-radius: 20px;
		height: 100%;
		border: 1px solid black;
		box-shadow: 0px 4px 8px 0px rgba(0,0,0,0.2);
		text-align: center;
	}

	.industry-card i {
		font-size: 48px;
		color: var(--dark-green);
		margin-bottom: 16px;
	}

	.industry-card h2 {
		font-size: 1.35rem;
		margin-bottom: 12px;
	}

	.industry-card span {
		color: var(--dark-green);
		font-weight: 600;
	}

	.industry-card:hover {
		box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.18);
	}
</style>
