<script>
	import se1 from '$lib/images/se1.png';
	import customCode from '$lib/images/custom-code.png';
</script>

<svelte:head>
	<title>Custom Software for HVAC, Plumbing &amp; Field Service | Surmount</title>
	<meta name="description" content="Custom software for field-service trades: job scheduling, dispatch, estimates, invoicing, and QuickBooks connections for HVAC, plumbing, electrical, and landscaping companies that have outgrown Jobber or spreadsheets." />
	<link rel="canonical" href="https://getsurmount.com/industries/field-services" />
	<meta property="og:title" content="Custom Software for Field-Service Trades | Surmount" />
	<meta property="og:description" content="Scheduling, dispatch, estimates, and invoicing for trades companies that have outgrown spreadsheets or off-the-shelf job software." />
	<meta property="og:url" content="https://getsurmount.com/industries/field-services" />
	<meta property="og:type" content="website" />
	<meta property="og:site_name" content="Surmount Web Services" />
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:title" content="Custom Software for Field-Service Trades | Surmount" />
	<meta name="twitter:description" content="Scheduling, dispatch, estimates, and invoicing built around how your jobs actually run." />
</svelte:head>

<div class="container py-5">
	<section class="text-center mb-5">
		<h1>Software for field-service trades</h1>
		<p class="lead">HVAC, plumbing, electrical, landscaping, and other crews with an office manager and a schedule that lives in too many places. We build the system around how jobs actually run.</p>
		<a href="/contact"><button type="button" class="btn btn-primary">Get a Free Software Assessment</button></a>
	</section>

	<section class="row mb-5">
		<div class="col-md-6 mb-4">
			<img src={se1} alt="Job and bidding workflow software" class="image-size image-shadow">
		</div>
		<div class="col-md-6 mb-4">
			<img src={customCode} alt="Operations dashboard for a service business" class="image-size image-shadow">
		</div>
	</section>

	<section class="mb-5 content">
		<h2>The office is the bottleneck</h2>
		<ul>
			<li>Jobs assigned from a whiteboard, group text, or a spreadsheet tab</li>
			<li>Estimates written in one tool, invoices in another, payments in QuickBooks</li>
			<li>Jobber, Housecall Pro, or ServiceTitan cover the generic job — not your process</li>
			<li>The person who knows “how we do it” is one sick day away from chaos</li>
		</ul>
		<p>Off-the-shelf field-service software proves you will pay for this. Custom software is for when those tools do not match the way you bid, dispatch, or bill.</p>
	</section>

	<section class="mb-5 content">
		<h2>What we automate</h2>
		<ul>
			<li>Job scheduling and dispatch</li>
			<li>Estimates and change orders</li>
			<li>Invoicing and payment collection</li>
			<li>QuickBooks and accounting handoffs</li>
			<li>Customer status without a phone call to the office</li>
		</ul>
	</section>

	<section class="mb-5 content">
		<h2>Related work</h2>
		<p>We built a live project bidding system for an engineering firm — documents, access, and bids in one place instead of email. Same shape of problem: field work, files, and a process that did not fit a generic CRM.</p>
		<p><a href="/portfolio">See the work</a></p>
	</section>

	<section class="text-center py-5">
		<h2 class="pb-3">Tell us how a job moves through the shop today</h2>
		<p class="lead pb-3">We'll tell you whether custom software is worth building — or whether you should stay on the tool you already have.</p>
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
