<script>
	import usl1 from '$lib/images/usl1.png';
	import usl2 from '$lib/images/usl2.png';
	import usl3 from '$lib/images/usl3.png';
	import eb1 from '$lib/images/eb1.png';
	import eb2 from '$lib/images/eb2.png';
	import eb3 from '$lib/images/eb3.png';
	import se1 from '$lib/images/se1.png';
	import se2 from '$lib/images/se2.png';
	import se3 from '$lib/images/se3.png';
	import toddly1 from '$lib/images/toddly1.png';
	import toddly2 from '$lib/images/toddly2.png';
	import toddly3 from '$lib/images/toddly3.png';
</script>

<svelte:head>
	<title>Portfolio</title>
	<meta name="description" content="San Antonio web developer" />
</svelte:head>

<div class="container">
	<section class="portfolio-whole-section">
		<div class="row mt-5 mb-3 pb-4">
			<div class="text-center">
				<h1>Projects We're Especially Proud Of</h1>
			</div>
		</div>

		<div class="row justify-content-center text-center">
			<div class="portfolio-section">
				<div class="row justify-content-center text-center pb-2 pb-md-4">
					<div class="row pb-3">
						<h3>Interior Designer Website Redesign</h3>
					</div>

					<div class="row">
						<p>Partnered with a local interior designer and saved her over 50% on her annual hosting costs.</p>
						<p>We also provided the branding and graphic design package.</p>
					</div>
				</div>

				<div class="row pb-5">
					<div class="col-12 col-md-4 align-items-center d-flex">
						<div class="text-center">
							<img src={eb1} alt="EB screenshot" class="portfolio-image">
						</div>
					</div>
		
					<div class="col-12 col-md-4 align-items-center d-flex" >
						<div class="text-center">
							<img src={eb2} alt="EB screenshot" class="portfolio-image">
						</div>
					</div>
		
					<div class="col-12 col-md-4 align-items-center d-flex">
						<div class="text-center">
							<img src={eb3} alt="EB screenshot" class="portfolio-image">
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="row justify-content-center text-center">
			<div class="portfolio-section">
				<div class="row justify-content-center text-center pb-2 pb-md-4">
					<div class="row pb-3">
						<h3>Childcare Center Online Marketplace</h3>
					</div>

					<div class="row">
						<p>A web app that connects parents with local childcare centers. Allows parents to schedule tours, get on a waitlist, and submit registration forms online.</p>
						<p>Includes online payment processing, real-time map updates, and calendar invites through the app.</p>
					</div>
				</div>

				<div class="row pb-5">
					<div class="col-12 col-md-4 align-items-center d-flex">
						<div class="text-center">
							<img src={toddly1} alt="Toddly screenshot" class="portfolio-image">
						</div>
					</div>
		
					<div class="col-12 col-md-4 align-items-center d-flex" >
						<div class="text-center">
							<img src={toddly2} alt="Toddly screenshot" class="portfolio-image">
						</div>
					</div>
		
					<div class="col-12 col-md-4 align-items-center d-flex">
						<div class="text-center">
							<img src={toddly3} alt="Toddly screenshot" class="portfolio-image">
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="row justify-content-center text-center">
			<div class="portfolio-section">
				<div class="row justify-content-center text-center pb-2 pb-md-4">
					<div class="row pb-3">
						<h3>Real-time Engineering Project Bidding System</h3>
					</div>

					<div class="row">
						<p>Built a live bidding system for a local firm.</p>
						<p>This project includes cloud storage for application documents, user authentication, and encrypted business information in our database.</p>
					</div>
				</div>

				<div class="row pb-5">
					<div class="col-12 col-md-4 align-items-center d-flex">
						<div class="text-center">
							<img src={se1} alt="SE screenshot" class="portfolio-image">
						</div>
					</div>
		
					<div class="col-12 col-md-4 align-items-center d-flex" >
						<div class="text-center">
							<img src={se2} alt="SE screenshot" class="portfolio-image">
						</div>
					</div>
		
					<div class="col-12 col-md-4 align-items-center d-flex">
						<div class="text-center">
							<img src={se3} alt="SE screenshot" class="portfolio-image">
						</div>
					</div>
				</div>
			</div>
		</div>



		<div class="row justify-content-center text-center">
			<div class="portfolio-section">
				<div class="row justify-content-center text-center pb-2 pb-md-4">
					<div class="row pb-3">
						<h3>Laboratory Test Booking Platform</h3>
					</div>

					<div class="row">
						<p>Responsive web application with e-commerce integration for shipping and payments.</p>
						<p>We also provided the branding and graphic design package.</p>
					</div>
				</div>

				<div class="row pb-5">
					<div class="col-12 col-md-4 align-items-center d-flex">
						<div class="text-center">
							<img src={usl1} alt="USL screenshot" class="portfolio-image">
						</div>
					</div>
		
					<div class="col-12 col-md-4 align-items-center d-flex" >
						<div class="text-center">
							<img src={usl3} alt="USL screenshot" class="portfolio-image">
						</div>
					</div>
		
					<div class="col-12 col-md-4 align-items-center d-flex">
						<div class="text-center">
							<img src={usl2} alt="USL screenshot" class="portfolio-image">
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="row text-center pt-5 mt-5 pb-5">
			<h2 class="pb-4">Let's talk about your next big idea</h2>
			<a href="/contact"><button type="button" class="btn btn-primary">Reach out</button></a>  
		</div>

	</section>
</div>

<style>

	.portfolio-image {
		width: 100%;
		height: auto;
	}

	.portfolio-section {
		background-color: var(--light-green); 
		border-radius: 20px; 
		height: 100%;
		border: 1px solid black;
		box-shadow: 0px 4px 8px 0px rgba(0,0,0,0.2);
		padding-top: 50px;
		padding-bottom: 50px;
		margin-bottom: 50px;
	}

	@media (max-width: 768px) {
		.portfolio-whole-section {
			padding-left: 20px;
			padding-right: 20px;
		}

		.portfolio-image {
			width: 70%;
			height: auto;
		}

		.portfolio-section {
			padding-bottom: 0px;
		}
	}

</style>
