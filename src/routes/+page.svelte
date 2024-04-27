<script>
	import webBuilders from '$lib/images/web-builders.png';

</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="San Antonio web developer" />
</svelte:head>

<section>
	<div class="pt-5 pb-3">
		<div class="row mb-3">
			<div class="col-12 col-md-6 align-items-center d-flex mb-4 px-5">
				<div class="text-center">
					<h1>Your Partner For Stunning Websites</h1>

					<p>
						Whether you need a basic website or a complex web application, 
						we'll work with you to create a site that exceeds your expectations.
					</p>

					<div>
						<a href="/contact"><button type="button" class="btn btn-primary">Start your project</button></a> 
					</div> 
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
						<p class="mt-4">We'll meet to learn about your business and your expectations.</p>
					</div>
				</div>
	
				<div class="col-sm-12 col-md-4 justify-content-center gameplan-col mb-4">
					<div class="text-center gameplan-content">
						<h4 class="mb-4 mt-3">Build together</h4>
						<i class="fa-solid fa-code"></i>
						<p class="mt-4">We'll have recurring check-ins throughout the build to ensure your requirements are met.</p>

					</div>
				</div>
	
				<div class="col-sm-12 col-md-4 justify-content-center gameplan-col mb-4">
					<div class="text-center gameplan-content">
						<h4 class="mb-4 mt-3">Deploy and grow</h4>
						<i class="fa-solid fa-rocket"></i>
						<p class="mt-4">Once we're ready to launch, we'll provide you with admin access for your site.</p>                    
					</div>
				</div>
			</div>
		</div>
	</div>
</section>



<style>
	.gameplan-col {
		padding: 0px 25px;

	}

	.gameplan-content {
		padding: 20px;
		background-color: var(--light-green); 
		border-radius: 20px; 
		height: 100%;
	}

	i {
		font-size: 50px;
	}


</style>
