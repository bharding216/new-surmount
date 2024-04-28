<svelte:head>
	<title>About</title>
	<meta name="description" content="About this app" />
</svelte:head>

<script>
	import headshot from '$lib/images/headshot.png';
</script>

<div class="container">

    <div class="py-5">
        <div class="row mb-3 justify-content-center">
            <div class="col-12 col-md-6 align-items-center d-flex">
                <div class="text-center">
                    <h1 class="pb-5">Let's Partner Up</h1>

                    <p>
                        Hi there! I'm Brandon. <a href="/">Surmount</a> is my freelance web development business. 
                        I'll be working directly with you to create a website that is not only visually stunning,
                        but also optimized for performance and user experience.
                    </p>

                    <p>
                        I'm a full-stack developer with experience in front-end and back-end technologies.
                        I specialize in building responsive websites, web applications, and e-commerce sites.
                    </p>

                    <a href="/contact">
                        <button type="button" class="btn btn-primary">Let's do this!</button>
                    </a>  
                </div>
            </div>

            <div class="col-12 col-md-6 align-items-center d-flex justify-content-center">
                <img src='{headshot}' class="image-size headshot" alt="Headshot for Brandon Harding, owner of Surmount Web Services LLC.">
            </div>

        </div>
    </div>




    <div class="py-5">

        <div class="row mb-5 text-center">
            <h1>Our Expertise</h1>
        </div>

        <div class="pb-5">
            <div class="row mb-3 px-5 px-sm-0">
                <div class="col-sm-12 col-md-4 justify-content-center mb-4 expertise-col">
                    <div class="text-center expertise-content">
                        <h4 class="mb-4 mt-3">Responsive Website Design</h4>
                        <i class="fa-solid fa-laptop-code"></i>
                        <p class="mt-4">
                            We'll design and develop a visually stunning website that is optimized 
                            for seamless display across all devices.
                        </p>
                    </div>
                </div>

                <div class="col-sm-12 col-md-4 justify-content-center mb-4 expertise-col">
                    <div class="text-center expertise-content">
                        <h4 class="mb-4 mt-3">Apps & Database Integration</h4>
                        <i class="fa-solid fa-database"></i>
                        <p class="mt-4">
                            We specialize in integrating apps and databases to simplify your workflows, 
                            enhance your performance, and ensure data security.
                        </p>

                    </div>
                </div>

                <div class="col-sm-12 col-md-4 justify-content-center mb-4 expertise-col">
                    <div class="text-center expertise-content">
                        <h4 class="mb-4 mt-3">SEO & Keyword Research</h4>
                        <i class="fa-solid fa-magnifying-glass"></i>
                        <p class="mt-4">Climb the search engine ranks and drive traffic to your website with our expert SEO strategies and keyword research.</p>                    
                    </div>
                </div>
            </div>

            <div class="row mb-3 px-5 px-sm-0">
                <div class="col-sm-12 col-md-4 justify-content-center mb-4 expertise-col">
                    <div class="text-center expertise-content">
                        <h4 class="mb-4 mt-3">Production Monitoring Tools</h4>
                        <i class="fa-solid fa-chart-column"></i>
                        <p class="mt-4">Maximize your system uptime and minimize downtime with our reliable and efficient production monitoring tools.</p>
                    </div>
                </div>

                <div class="col-sm-12 col-md-4 justify-content-center mb-4 expertise-col">
                    <div class="text-center expertise-content">
                        <h4 class="mb-4 mt-3">E-Commerce & Social Media Integration</h4>
                        <i class="fa-solid fa-store"></i>
                        <p class="mt-4">
                            Expand your online presence, boost your sales, and connect with your customers on a 
                            deeper level with our e-commerce and social media integration services.
                        </p>

                    </div>
                </div>

                <div class="col-sm-12 col-md-4 justify-content-center mb-4 expertise-col">
                    <div class="text-center expertise-content">
                        <h4 class="mb-4 mt-3">Web Hosting & Backups</h4>
                        <i class="fa-solid fa-server"></i>
                        <p class="mt-4">Ensure your website is always up and running smoothly with our secure and reliable web hosting and backup solutions.</p>                    
                    </div>
                </div>
            </div>


        </div>


    </div>
</div>

<style>

	@media (max-width: 768px) {
		.headshot {
			padding: 50px;
		}

	}

	@media (min-width: 769px) {
		.headshot {
			height : 400px;
			width: auto;
		}

	}
	
	i {
		font-size: 50px;
	}

	.expertise-col {
		padding: 0px 25px;

	}

	.expertise-content {
		padding: 20px;
		background-color: var(--light-green); 
		border-radius: 20px; 
		height: 100%;
		border: 1px solid black;
		box-shadow: 0px 4px 8px 0px rgba(0,0,0,0.2);
	}
</style>