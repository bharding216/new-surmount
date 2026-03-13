<script>
	import './styles.css';

	var currentYear = new Date().getFullYear();
</script>

<footer>
	<div class="container py-5">
		<div class="row">
			<div class="col-md-4 mb-4 mb-md-0">
				<h5 class="footer-heading">Surmount Web Services</h5>
				<p class="footer-text">Custom web design, development, and software solutions for small businesses in San Antonio, TX and across Texas.</p>
				<p class="footer-text"><a href="mailto:brandon@getsurmount.com">brandon@getsurmount.com</a></p>
			</div>

			<div class="col-6 col-md-2 mb-4 mb-md-0">
				<h6 class="footer-heading">Services</h6>
				<ul class="footer-links">
					<li><a href="/services/web-design">Web Design</a></li>
					<li><a href="/services/web-development">Web Apps</a></li>
					<li><a href="/services/mobile-apps">Mobile Apps</a></li>
					<li><a href="/services/seo">SEO</a></li>
					<li><a href="/services/ecommerce">E-Commerce</a></li>
					<li><a href="/services/website-maintenance">Maintenance</a></li>
				</ul>
			</div>

			<div class="col-6 col-md-2 mb-4 mb-md-0">
				<h6 class="footer-heading">Company</h6>
				<ul class="footer-links">
					<li><a href="/about">About</a></li>
					<li><a href="/portfolio">Portfolio</a></li>
					<li><a href="/pricing">Pricing</a></li>
					<li><a href="/blog">Blog</a></li>
					<li><a href="/contact">Contact</a></li>
				</ul>
			</div>

			<div class="col-md-4">
				<h6 class="footer-heading">Areas We Serve</h6>
				<ul class="footer-links footer-locations">
					<li><a href="/locations/san-antonio">San Antonio</a></li>
					<li><a href="/locations/houston">Houston</a></li>
					<li><a href="/locations/dallas">Dallas</a></li>
					<li><a href="/locations/austin">Austin</a></li>
					<li><a href="/locations/fort-worth">Fort Worth</a></li>
					<li><a href="/locations/el-paso">El Paso</a></li>
					<li><a href="/locations/corpus-christi">Corpus Christi</a></li>
					<li><a href="/locations/plano">Plano</a></li>
				</ul>
				<a href="/locations" class="footer-see-all">All Texas Locations &rarr;</a>
			</div>
		</div>

		<hr class="footer-divider">

		<div class="row">
			<div class="col-12 text-center">
				<p class="footer-copyright">&copy; <span>{currentYear}</span> Surmount Web Services LLC &middot; San Antonio, TX</p>
			</div>
		</div>
	</div>
</footer>

<style>
	footer {
		background-color: #1a1a1a;
		color: #ccc;
	}

	.footer-heading {
		color: #fff;
		font-size: 1rem;
		margin-bottom: 15px;
	}

	.footer-text {
		font-size: 0.85rem;
		color: #aaa;
		line-height: 1.6;
	}

	.footer-text a {
		color: var(--medium-green);
		text-decoration: none;
	}

	.footer-text a:hover {
		color: #fff;
	}

	.footer-links {
		list-style: none;
		padding: 0;
		margin: 0;
	}

	.footer-links li {
		margin-bottom: 8px;
	}

	.footer-links a {
		color: #aaa;
		text-decoration: none;
		font-size: 0.85rem;
		transition: color 0.2s;
	}

	.footer-links a:hover {
		color: #fff;
	}

	.footer-locations {
		display: flex;
		flex-wrap: wrap;
		gap: 0;
	}

	.footer-locations li {
		width: 50%;
	}

	.footer-see-all {
		color: var(--medium-green);
		text-decoration: none;
		font-size: 0.8rem;
		font-weight: 600;
	}

	.footer-see-all:hover {
		color: #fff;
	}

	.footer-divider {
		border-color: #333;
		margin: 30px 0 20px;
	}

	.footer-copyright {
		font-size: 0.8rem;
		color: #777;
		margin-bottom: 0;
	}
</style>
