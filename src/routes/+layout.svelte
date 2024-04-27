<script>
	import Header from './Header.svelte';
	import './styles.css';
</script>

<div>
	<Header />

	<main>
		<slot />
	</main>

	<footer>
		<p>&copy; 2021 Your Name</p>
	</footer>
</div>

<style>





</style>
