import { blogPosts } from '$lib/data/blog-posts.js';
import { error } from '@sveltejs/kit';

export const prerender = true;

export function load() {
	const post = blogPosts.find((p) => p.slug === 'what-to-look-for-in-a-web-developer');
	if (!post) throw error(404, 'Post not found');
	return { post };
}
