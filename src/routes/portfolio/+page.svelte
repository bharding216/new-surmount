<script>
	import usl1 from '$lib/images/usl1.png';
	import usl2 from '$lib/images/usl2.png';
	import usl3 from '$lib/images/usl3.png';
</script>

<svelte:head>
	<title>Portfolio</title>
	<meta name="description" content="San Antonio web developer" />
</svelte:head>

<div class="container">
	<section>
		<div class="row mt-5 mb-3 pb-4">
			<div class="text-center">
				<h1>Some Projects We're Especially Proud Of</h1>
			</div>
		</div>

		<div class="row justify-content-center text-center">
			<div class="portfolio-section">
				<div class="row justify-content-center text-center pb-2 pb-md-4">
					<div class="row pb-3">
						<h3>Lab Test Booking Platform</h3>
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

		<div class="row justify-content-center text-center">
			<div class="portfolio-section">
				<div class="row text-center">
					<p>Another one</p>
				</div>
			</div>
		</div>

		<div class="row justify-content-center text-center">
			<div class="portfolio-section">
				<div class="row text-center">
					<p>Another one</p>
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

</style>
