<script>
	import { blogPosts } from '$lib/data/blog-posts.js';
</script>

<svelte:head>
	<title>Web Development Blog | Tips for Small Businesses | Surmount</title>
	<meta name="description" content="Expert web development tips, SEO guides, and website advice for small businesses. Learn about web design costs, getting on Google, site speed, mobile optimization, and more." />
	<link rel="canonical" href="https://getsurmount.com/blog" />
	<meta property="og:title" content="Web Development Blog | Tips for Small Businesses | Surmount" />
	<meta property="og:description" content="Expert web development tips, SEO guides, and website advice for small businesses." />
	<meta property="og:url" content="https://getsurmount.com/blog" />
	<meta property="og:type" content="website" />
	<meta property="og:site_name" content="Surmount Web Services" />
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:title" content="Web Development Blog | Tips for Small Businesses" />
	<meta name="twitter:description" content="Expert web development tips, SEO guides, and website advice for small businesses." />
</svelte:head>

<div class="container">
	<section class="text-center pt-5 pb-3">
		<h1>Web Development Blog</h1>
		<p class="lead">Practical advice on websites, SEO, and growing your business online</p>
	</section>

	<section class="py-4">
		<div class="row">
			{#each blogPosts as post}
				<div class="col-md-6 col-lg-4 mb-4">
					<a href="/blog/{post.slug}" class="blog-card-link">
						<article class="blog-card">
							<span class="category-badge">{post.category}</span>
							<h2>{post.title}</h2>
							<p>{post.description}</p>
							<div class="blog-meta">
								<span>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
								<span>{post.readTime}</span>
							</div>
							<span class="read-more">Read Article &rarr;</span>
						</article>
					</a>
				</div>
			{/each}
		</div>
	</section>

	<section class="py-5">
		<div class="row text-center">
			<div class="col-12">
				<h2 class="mb-4">Have a Question About Your Website?</h2>
				<p class="lead mb-4">Book a free strategy call and get expert advice tailored to your business.</p>
				<a href="https://calendly.com/brandon-surmount/intro-call" target="_blank" rel="noopener noreferrer">
					<button type="button" class="btn btn-primary">Book Your Free Strategy Call</button>
				</a>
			</div>
		</div>
	</section>
</div>

<style>
	.blog-card-link {
		text-decoration: none;
		color: inherit;
	}

	.blog-card {
		padding: 25px;
		background-color: #fff;
		border-radius: 15px;
		height: 100%;
		border: 1px solid #e0e0e0;
		box-shadow: 0px 2px 6px rgba(0,0,0,0.08);
		transition: transform 0.2s, box-shadow 0.2s;
		display: flex;
		flex-direction: column;
	}

	.blog-card:hover {
		transform: translateY(-3px);
		box-shadow: 0px 6px 12px rgba(0,0,0,0.15);
	}

	.category-badge {
		display: inline-block;
		background-color: var(--light-green);
		color: var(--dark-green);
		padding: 4px 12px;
		border-radius: 12px;
		font-size: 0.75rem;
		font-weight: 600;
		margin-bottom: 15px;
		width: fit-content;
		text-transform: uppercase;
	}

	.blog-card h2 {
		font-size: 1.15rem;
		color: var(--dark-green);
		margin-bottom: 12px;
		line-height: 1.4;
	}

	.blog-card p {
		color: #555;
		font-size: 0.9rem;
		line-height: 1.5;
		flex-grow: 1;
	}

	.blog-meta {
		display: flex;
		justify-content: space-between;
		font-size: 0.8rem;
		color: #999;
		margin-bottom: 12px;
		padding-top: 12px;
		border-top: 1px solid #eee;
	}

	.read-more {
		color: var(--dark-green);
		font-weight: 600;
		font-size: 0.9rem;
	}
</style>
