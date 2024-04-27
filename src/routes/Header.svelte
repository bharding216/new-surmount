<script>
	import { page } from '$app/stores';
	import logo from '$lib/images/logo.png';
</script>

<header>
	<nav class="navbar sticky-top navbar-expand-lg navbar-custom static-top">
		<div class="container">

			<!--Logo to the left-->
			<a class="navbar-brand" href="/">
				<img alt="Company logo" src={logo} class="d-none d-md-inline-block align-top" width="200" height="130">
				<img alt="Company logo" src={logo} class="d-md-none d-inline-block align-top" width="120" height="75">
			</a>

			<button class="navbar-toggler" 
				type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
				aria-controls="navbarSupportedContent" aria-expanded="false" 
				aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>

			<!--Links to the right-->
			<div class="navbar-collapse collapse mb-3" id="navbarSupportedContent">
				<ul class="navbar-nav ms-auto me-5">
					<li aria-current={$page.url.pathname === '/portfolio' ? 'page' : undefined} class="nav-item">
						<a href="/portfolio" class="nav-link">Portfolio</a>
					</li>

					<li aria-current={$page.url.pathname === '/about' ? 'page' : undefined} class="nav-item">
						<a href="/about" class="nav-link">About</a>
					</li>

					<li aria-current={$page.url.pathname === '/pricing' ? 'page' : undefined} class="nav-item">
						<a href="/pricing" class="nav-link">Pricing</a>
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
		font-size: 16px;
	}

	@media (max-width: 768px) {
		.nav-link {
			font-size: 14px;
		}
	}
</style>
