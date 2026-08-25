<script>
	import se2 from '$lib/images/se2.png';
	import se3 from '$lib/images/se3.png';
</script>

<svelte:head>
	<title>Custom Software for Professional Services Firms | Surmount</title>
	<meta name="description" content="Custom software for agencies, consultants, and engineering firms: client portals, bidding, document workflows, and reporting that replace spreadsheet handoffs." />
	<link rel="canonical" href="https://getsurmount.com/industries/professional-services" />
	<meta property="og:title" content="Custom Software for Professional Services Firms | Surmount" />
	<meta property="og:description" content="Client portals, bidding, documents, and reporting for firms that have outgrown shared drives and spreadsheets." />
	<meta property="og:url" content="https://getsurmount.com/industries/professional-services" />
	<meta property="og:type" content="website" />
	<meta property="og:site_name" content="Surmount Web Services" />
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:title" content="Custom Software for Professional Services Firms | Surmount" />
	<meta name="twitter:description" content="Client portals, bidding, documents, and reporting without the spreadsheet shuffle." />
</svelte:head>

<div class="container py-5">
	<section class="text-center mb-5">
		<h1>Software for professional services</h1>
		<p class="lead">Agencies, consultants, architecture and engineering firms, and practices where the product is the work — and the admin around the work is still a pile of files.</p>
		<a href="/contact"><button type="button" class="btn btn-primary">Get a Free Software Assessment</button></a>
	</section>

	<section class="row mb-5">
		<div class="col-md-6 mb-4">
			<img src={se2} alt="Document and bidding workspace" class="image-size image-shadow">
		</div>
		<div class="col-md-6 mb-4">
			<img src={se3} alt="Secure project access for a professional services firm" class="image-size image-shadow">
		</div>
	</section>

	<section class="mb-5 content">
		<h2>Handoffs are the product tax</h2>
		<ul>
			<li>Proposals, bids, and SOWs living in email threads</li>
			<li>Clients asking for status because there is no portal</li>
			<li>Time, files, and invoices that never quite line up</li>
			<li>A “system” that is really a shared drive plus two spreadsheets</li>
		</ul>
		<p>Generic practice-management software is built for an average firm. If your workflow is the thing that wins work, the software should match it.</p>
	</section>

	<section class="mb-5 content">
		<h2>What we automate</h2>
		<ul>
			<li>Client portals and project status</li>
			<li>Bidding and proposal collection</li>
			<li>Document storage with access control</li>
			<li>Reporting the partner currently builds by hand</li>
			<li>The glue between billing, files, and the people doing the work</li>
		</ul>
	</section>

	<section class="mb-5 content">
		<h2>Related work</h2>
		<p>We built a real-time engineering project bidding system with cloud document storage, authentication, and encrypted business data. Bids stopped living in inboxes.</p>
		<p><a href="/portfolio">See the work</a></p>
	</section>

	<section class="text-center py-5">
		<h2 class="pb-3">Tell us where the work gets stuck</h2>
		<p class="lead pb-3">We'll tell you whether a custom portal or workflow is worth building.</p>
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
