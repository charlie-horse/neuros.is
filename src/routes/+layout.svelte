<script lang="ts">
	import favicon from '#lib/assets/favicon.svg';
	import type { LayoutProps } from './$types';

	let { children }: LayoutProps = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<header>
	<a class="brand" href="/">neuros.is</a>
	<nav>
		<a href="/">Home</a>
		<a href="/about">About</a>
	</nav>
</header>

<main>
	{@render children()}
</main>

<style>
	:global(body) {
		margin: 0;
		font-family:
			system-ui,
			-apple-system,
			'Segoe UI',
			Roboto,
			sans-serif;
		line-height: 1.6;
		color: #1f2328;
		background: #fff;
	}

	header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		max-width: 48rem;
		margin: 0 auto;
		padding: 1.25rem 1.5rem;
		border-bottom: 1px solid #e5e7eb;
	}

	.brand {
		font-weight: 600;
		color: inherit;
		text-decoration: none;
	}

	nav {
		display: flex;
		gap: 1.25rem;
	}

	nav a {
		color: #57606a;
		text-decoration: none;
	}

	nav a:hover {
		color: #1f2328;
	}

	main {
		max-width: 48rem;
		margin: 0 auto;
		padding: 2rem 1.5rem;
	}
</style>
