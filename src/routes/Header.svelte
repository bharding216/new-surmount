<script>
	import { page } from '$app/stores';
	import logo from '$lib/images/logo.png';
</script>

<header>
	<nav class="navbar sticky-top navbar-expand-lg navbar-custom static-top">
		<div class="container">

			<a class="navbar-brand" href="/">
				<img alt="Surmount Web Services - Custom Web Design and Development in San Antonio TX" src={logo} class="logo align-top">
			</a>

			<button class="navbar-toggler" 
				type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
				aria-controls="navbarSupportedContent" aria-expanded="false" 
				aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>

			<div class="navbar-collapse collapse mb-3" id="navbarSupportedContent">
				<ul class="navbar-nav ms-auto me-5">
					<li class="nav-item dropdown">
						<a class="nav-link dropdown-toggle" href="/services" role="button" data-bs-toggle="dropdown" aria-expanded="false"
							aria-current={$page.url.pathname.startsWith('/services') ? 'page' : undefined}>
							Services
						</a>
						<ul class="dropdown-menu">
							<li><a class="dropdown-item" href="/services/web-design">Web Design</a></li>
							<li><a class="dropdown-item" href="/services/web-development">Web Development</a></li>
							<li><a class="dropdown-item" href="/services/mobile-apps">Mobile Apps</a></li>
							<li><a class="dropdown-item" href="/services/ecommerce">E-Commerce</a></li>
							<li><a class="dropdown-item" href="/services/seo">SEO</a></li>
							<li><a class="dropdown-item" href="/services/website-maintenance">Maintenance</a></li>
							<li><a class="dropdown-item" href="/services/speed-optimization">Speed Optimization</a></li>
							<li><hr class="dropdown-divider"></li>
							<li><a class="dropdown-item" href="/services">All Services</a></li>
						</ul>
					</li>

					<li aria-current={$page.url.pathname === '/portfolio' ? 'page' : undefined} class="nav-item">
						<a href="/portfolio" class="nav-link">Portfolio</a>
					</li>

					<li aria-current={$page.url.pathname === '/about' ? 'page' : undefined} class="nav-item">
						<a href="/about" class="nav-link">About</a>
					</li>

					<li aria-current={$page.url.pathname === '/pricing' ? 'page' : undefined} class="nav-item">
						<a href="/pricing" class="nav-link">Pricing</a>
					</li>

					<li aria-current={$page.url.pathname.startsWith('/blog') ? 'page' : undefined} class="nav-item">
						<a href="/blog" class="nav-link">Blog</a>
					</li>

					<li aria-current={$page.url.pathname === '/contact' ? 'page' : undefined} class="nav-item">
						<a href="/contact" class="nav-link">Contact</a>
					</li>
				</ul>
			</div>
		</div>
	</nav>
</header>

<style>
	.navbar-nav a {
		text-transform: uppercase;
	}

	.nav-link {
		font-size: 12px;
	}

	.logo {
		width: 120px;
		height: 75px;
	}

	.navbar-custom {
		background-color: var(--primary-color);
	}

	.dropdown-menu {
		border: 1px solid #e0e0e0;
		box-shadow: 0 4px 12px rgba(0,0,0,0.1);
		border-radius: 8px;
	}

	.dropdown-item {
		font-size: 13px;
		padding: 8px 20px;
		text-transform: none;
	}

	.dropdown-item:hover {
		background-color: var(--light-green);
		color: var(--dark-green);
	}

	@media (max-width: 768px) { 
		.nav-link {
			font-size: 14px;
		}
	}

	@media (min-width: 768px) {
		.logo {
			width: 150px;
			height: 84px;
		}
	}
</style>
