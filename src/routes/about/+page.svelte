<script lang="ts">
	import { site } from '#lib/site.ts';
	import PageHeader from '#lib/components/PageHeader.svelte';
	import Dictionary from '#lib/components/Dictionary.svelte';
</script>

<svelte:head>
	<title>About · neuros.is</title>
</svelte:head>

<PageHeader kicker={site.about.kicker} title="About" lead={site.about.lead} />

<section class="draft prose" aria-labelledby="draft-label">
	<p id="draft-label" class="label rust">{site.about.draftLabel}</p>
	<!-- PLACEHOLDER: real bio goes in src/lib/site.ts → about.paragraphs -->
	{#each site.about.paragraphs as para (para)}<p>{para}</p>{/each}
</section>

<section aria-labelledby="why">
	<h2 id="why">Why neuros.is?</h2>
	<p class="say">Say it out loud. Then say it again, slower.</p>
	<Dictionary senses={site.dictionary.senses} />
</section>

<aside class="colophon prose" aria-labelledby="colophon">
	<h2 id="colophon" class="label">About this site</h2>
	<p>{site.about.colophon}</p>
</aside>

<p class="closing">Want the real version sooner? <a href="/contact">Say hello</a>.</p>

<style>
	.draft {
		background: var(--surface);
		border: 1.5px dashed var(--border-strong);
		border-radius: 6px;
		padding: 1.25rem;
	}

	.draft .label {
		margin-bottom: 0.75rem;
	}

	.say {
		margin-bottom: 1.25rem;
	}

	.colophon {
		margin-top: 3rem;
		padding-top: 1.25rem;
		border-top: 1px dashed var(--border);
		color: var(--muted);
		font-size: var(--step--1);
	}

	.colophon h2 {
		margin: 0 0 0.5rem;
		letter-spacing: 0.08em;
		line-height: 1.4;
		font-weight: 500;
		font-size: var(--label);
	}

	.closing {
		margin-top: 2rem;
	}
</style>
