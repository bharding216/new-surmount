<svelte:head>
	<title>About | Custom Software Developer</title>
	<meta name="description" content="Brandon Harding - Full-stack developer specializing in custom software, web applications, mobile apps (iOS & Android), and business automation solutions." />
</svelte:head>

<script>
	import headshot from '$lib/images/headshot.png';
</script>

<div class="container">

    <div class="py-5">
        <div class="row mb-3 justify-content-center">
            <div class="col-12 col-md-6 align-items-center d-flex">
                <div class="text-center">
                    <h1 class="pb-5">Hi there!</h1>

                    <p>
                        I'm Brandon, and <a href="/">Surmount</a> is my custom software development business. 
                        I work directly with business owners and founders to build software solutions that streamline operations,
                        automate workflows, and replace manual processes with efficient systems.
                    </p>

                    <p>
                        I'm a full-stack developer specializing in custom web applications, mobile apps (iOS & Android), 
                        internal tools, dashboards, and automation systems. I've built SaaS platforms serving 400+ users, 
                        real-time bidding systems, and data pipelines that transform how businesses operate.
                    </p>

                    <a href="https://calendly.com/brandon-surmount/intro-call" target="_blank" rel="noopener noreferrer">
                        <button type="button" class="btn btn-primary">Book a Free Strategy Call</button>
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
                <div class="col-12 col-lg-6 justify-content-center mb-4 expertise-col">
                    <div class="text-center expertise-content">
                        <h4 class="mb-4 mt-3">Custom Web Applications</h4>
                        <i class="fa-solid fa-laptop-code fa-2x"></i>
                        <p class="mt-4">
                            Full-stack web applications built from scratch to handle your unique business workflows, 
                            user management, and data processing needs.
                        </p>
                    </div>
                </div>

                <div class="col-12 col-lg-6 justify-content-center mb-4 expertise-col">
                    <div class="text-center expertise-content">
                        <h4 class="mb-4 mt-3">Mobile Applications</h4>
                        <i class="fa-solid fa-mobile-screen-button fa-2x"></i>
                        <p class="mt-4">
                            Native iOS and Android mobile applications that extend your business capabilities, 
                            reach customers on the go, and provide seamless mobile experiences.
                        </p>

                    </div>
                </div>

                <div class="col-12 col-lg-6 justify-content-center mb-4 expertise-col">
                    <div class="text-center expertise-content">
                        <h4 class="mb-4 mt-3">Internal Tools & Dashboards</h4>
                        <i class="fa-solid fa-database fa-2x"></i>
                        <p class="mt-4">
                            Custom internal tools, reporting dashboards, and data visualization systems that give you 
                            real-time visibility into your business operations.
                        </p>

                    </div>
                </div>

                <div class="col-12 col-lg-6 justify-content-center mb-4 expertise-col">
                    <div class="text-center expertise-content">
                        <h4 class="mb-4 mt-3">Workflow Automation</h4>
                        <i class="fa-solid fa-arrows-rotate fa-2x"></i>
                        <p class="mt-4">Automate repetitive tasks, integrate systems, and build data pipelines that eliminate manual work and reduce errors.</p>                    
                    </div>
                </div>

                <div class="col-12 col-lg-6 justify-content-center mb-4 expertise-col">
                    <div class="text-center expertise-content">
                        <h4 class="mb-4 mt-3">APIs & Integrations</h4>
                        <i class="fa-solid fa-plug fa-2x"></i>
                        <p class="mt-4">Custom APIs and system integrations that connect your tools and enable seamless data flow between platforms.</p>
                    </div>
                </div>

                <div class="col-12 col-lg-6 justify-content-center mb-4 expertise-col">
                    <div class="text-center expertise-content">
                        <h4 class="mb-4 mt-3">MVP Development</h4>
                        <i class="fa-solid fa-lightbulb fa-2x"></i>
                        <p class="mt-4">
                            Get your startup idea to market quickly with a minimum viable product that validates your concept 
                            and attracts early users.
                        </p>

                    </div>
                </div>

                <div class="col-12 col-lg-6 justify-content-center mb-4 expertise-col">
                    <div class="text-center expertise-content">
                        <h4 class="mb-4 mt-3">Production & Monitoring</h4>
                        <i class="fa-solid fa-server fa-2x"></i>
                        <p class="mt-4">Deploy, host, and monitor your applications with reliable infrastructure and monitoring tools that ensure uptime.</p>                    
                    </div>
                </div>

                <div class="col-12 col-lg-6 justify-content-center mb-4 expertise-col">
                    <div class="text-center expertise-content">
                        <h4 class="mb-4 mt-3">Technical Support & Maintenance</h4>
                        <i class="fa-solid fa-wrench fa-2x"></i>
                        <p class="mt-4">Ongoing support, maintenance, and updates to keep your applications running smoothly and adapt to changing business needs.</p>                    
                    </div>
                </div>
            </div>


        </div>

        <div class="row mb-5 text-center">
            <div class="col-12">
                <h3 class="mb-4">Ready to Build Something Great?</h3>
                <p class="mb-4">Let's discuss how we can help transform your business with custom software solutions.</p>
                <a href="https://calendly.com/brandon-surmount/intro-call" target="_blank" rel="noopener noreferrer">
                    <button type="button" class="btn btn-primary">Schedule Your Free Consultation</button>
                </a>  
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
		font-size: 20px;
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