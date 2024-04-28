<script>
	import webBuilders from '$lib/images/web-builders.png';
	import ebWebsite from '$lib/images/eb.png';
	import toddlyWebsite from '$lib/images/toddly-map.png';
	import customCode from '$lib/images/custom-code.png';

</script>

<svelte:head>
	<title>San Antonio Web Developer</title>
	<meta name="description" content="San Antonio web developer" />
</svelte:head>

<div class="container">
	<section>
		<div class="pt-5 pb-3">
			<div class="row mb-3">
				<div class="col-12 col-md-6 align-items-center d-flex mb-4 px-5">
					<div class="text-center">
						<h1 class="pb-3">We Build Stunning Websites</h1>
						<p>Whether you need a basic website or a complex web app, we'll work with you to create a site that exceeds your expectations.</p>
						<div><a href="/contact"><button type="button" class="btn btn-primary">Start your project</button></a></div> 
					</div>
				</div>
	
				<div class="col-12 col-md-6 align-items-center d-flex justify-content-center">
					<div><img src={webBuilders} alt="A team of developers building a website." id="web-builders"></div>
				</div>
			</div>
		</div>
	</section>
	
	
	<section>
		<div class="py-5">
			<div class="pt-5">
				<div class="row mb-5 text-center">
					<h1>Our Gameplan</h1>
				</div>
			</div>
		
			<div class="pb-5">
				<div class="row mb-3 px-5 px-sm-0">
					<div class="col-sm-12 col-md-4 justify-content-center gameplan-col mb-4">
						<div class="text-center gameplan-content">
							<h4 class="mb-4 mt-3">Outline your goals</h4>
							<i class="fa-solid fa-bullseye"></i>
							<p class="mt-4">We'll meet to learn about your vision and your expectations.</p>
						</div>
					</div>
		
					<div class="col-sm-12 col-md-4 justify-content-center gameplan-col mb-4">
						<div class="text-center gameplan-content">
							<h4 class="mb-4 mt-3">Build together</h4>
							<i class="fa-solid fa-code"></i>
							<p class="mt-4">We'll have check-ins to ensure you love the final product.</p>
	
						</div>
					</div>
		
					<div class="col-sm-12 col-md-4 justify-content-center gameplan-col mb-4">
						<div class="text-center gameplan-content">
							<h4 class="mb-4 mt-3">Deploy and grow</h4>
							<i class="fa-solid fa-rocket"></i>
							<p class="mt-4">After we launch, we continue to support your project.</p>                    
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</div>


<section class="portfolio-section-homepage py-5">
	<div class="container">
		<div class="row pb-5">
			<div class="text-center">
				<h1>What We've Been Up To</h1>
			</div>
		</div>
	
		<div class="row justify-content-center text-center pb-5">
			<div class="row pb-3">
				<div class="col d-flex align-items-center flex-column justify-content-center portfolio-text">
					<h3>Good-lookin' websites</h3>
					<p>We're industry agnostic, having worked with interior designers, engineering corporations, and legal firms.</p>
				</div>
	
				<div class="col d-flex align-items-center justify-content-center">
					<a href="/portfolio">
						<img src={ebWebsite} alt="A screenshot of a website" class="image-size image-shadow"/>				
					</a>
				</div>
			</div>
	
			<div class="row pb-3">
				<div class="col d-flex align-items-center flex-column justify-content-center">
					<a href="/portfolio">
						<img src={toddlyWebsite} alt="A screenshot of a website" class="image-size image-shadow"/>
					</a>
				</div>
	
				<div class="col d-flex align-items-center flex-column justify-content-center portfolio-text">
					<h3>Web page magic <i class="fa-solid fa-wand-magic-sparkles" style="font-size: 22px;"></i></h3>
					<p>Need front-end design work? Custom API calls? We got you covered.</p>
				</div>
			</div>
	
			<div class="row pb-3">
				<div class="col d-flex align-items-center flex-column justify-content-center portfolio-text">
					<h3><i>Smooooth</i> business processes</h3>
					<p>We'll write custom code to help improve your visibility over your business processes.</p>
				</div>
	
				<div class="col d-flex align-items-center justify-content-center">
					<a href="/portfolio">
						<img src={customCode} alt="A screenshot of a website" class="image-size image-shadow"/>
					</a>
				</div>
			</div>
		</div>
	
		<div class="row">
			<div class="col text-center">
				<a href="/portfolio"><button type="button" class="btn btn-primary">See our full portfolio</button></a>		
			</div>
		</div>	
	</div>


</section>


<div class="container">
	<section>
		<div class="row text-center pt-5 mt-5 pb-5">
			<h2 class="pb-4">Let's talk about your next big idea</h2>
			<a href="/contact"><button type="button" class="btn btn-primary">Reach out</button></a>  
		</div>
	</section>
</div>




<style>
	.gameplan-col {
		padding: 0px 25px;

	}

	.gameplan-content {
		padding: 20px;
		background-color: var(--light-green); 
		border-radius: 20px; 
		height: 100%;
		border: 1px solid black;
		box-shadow: 0px 4px 8px 0px rgba(0,0,0,0.2);
	}

	.fa-solid {
		font-size: 50px;
	}

    .image-shadow {
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }

	.image-size:hover {
		cursor: pointer;
	}


	@media (max-width: 768px) {
		.portfolio-text {
			padding: 0px 25px;
		}
	}

	@media (min-width: 769px) {
		.portfolio-text {
			padding: 0px 50px;
		}
	}

	.portfolio-section-homepage {
		background-color: rgb(255, 249, 241);
		width: 100%;

	}


</style>
