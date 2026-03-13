import { blogPosts } from '$lib/data/blog-posts.js';
import { error } from '@sveltejs/kit';

export const prerender = true;

export function load() {
	const post = blogPosts.find((p) => p.slug === 'do-i-need-a-custom-website-or-website-builder');
	if (!post) throw error(404, 'Post not found');
	return { post };
}
