<script lang="ts">
	import { page } from '$app/state';
	import { site } from '#lib/site.ts';
	import SprayMark from '#lib/components/SprayMark.svelte';
	import Dictionary from '#lib/components/Dictionary.svelte';

	// Note: unknown URLs are served build/404.html (the SPA fallback shell), which needs JS to
	// render this page. Every real route is prerendered and readable without JS.
</script>

<svelte:head>
	<title>{page.status} · neuros.is</title>
</svelte:head>

<section class="err" aria-labelledby="err-title">
	<p class="code" aria-hidden="true">
		<span>{page.status}</span>{#if page.status === 404}<SprayMark variant="strike" />{/if}
	</p>
	<p class="visually-hidden">Error {page.status}</p>
	{#if page.status === 404}
		<h1 id="err-title">{site.notFound.title}</h1>
		<p class="lead">{site.notFound.body}</p>
		<Dictionary start={4} senses={[site.dictionary.notFoundSense]} />
	{:else}
		<h1 id="err-title">{site.notFound.errorTitle}</h1>
		<p class="lead">{site.notFound.errorBody}</p>
		{#if page.error?.message}<p class="label detail">{page.status}: {page.error.message}</p>{/if}
	{/if}
	<p class="actions">
		<a class="btn btn-primary" href="/">Back to the homepage</a>
		<span class="more"><a href="/about">About</a> · <a href="/contact">Contact</a></span>
	</p>
</section>

<style>
	.code {
		font: 500 clamp(5rem, 28vw, 12rem) / 1 var(--font-mono);
		color: var(--accent-2);
		position: relative;
		display: inline-block;
		margin: 0;
		letter-spacing: -0.02em;
	}

	.code :global(.spray--strike) {
		position: absolute;
		top: 35%;
		left: -5%;
		width: 110%;
		height: 0.35em;
	}

	h1 {
		font-size: var(--step-3);
		margin: 1rem 0 1rem;
	}

	.lead {
		max-width: 40ch;
		margin-bottom: 2rem;
	}

	.detail {
		color: var(--muted);
		margin-bottom: 2rem;
	}

	.actions {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: 1rem 1.5rem;
		margin-top: 2rem;
	}
</style>
