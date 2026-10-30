<script lang="ts">
	import { site } from '#lib/site.ts';
	import SprayMark from '#lib/components/SprayMark.svelte';
	import StatusBoard from '#lib/components/StatusBoard.svelte';
	import Poster from '#lib/components/Poster.svelte';
	import Slab from '#lib/components/Slab.svelte';
</script>

<svelte:head>
	<title>neuros.is</title>
</svelte:head>

<section class="hero" aria-labelledby="hero-title">
	<div class="hero-text">
		<p class="label rust">{site.home.kicker}</p>
		<h1 id="hero-title" class="wordmark-xl">
			neuros<span class="tld">.is<SprayMark variant="tag" /></span>
		</h1>
		<p class="lead">{site.home.lead}</p>
		<StatusBoard />
	</div>
	<Poster src={site.avatar} alt={site.avatarAlt} caption={site.home.posterCaption} />
</section>

<h2 class="visually-hidden">Sections</h2>
<ol class="slabs">
	{#each site.home.slabs as slab (slab.href)}
		<Slab {...slab} />
	{/each}
</ol>

<style>
	.hero {
		display: grid;
		gap: 2rem;
	}

	@media (min-width: 52rem) {
		.hero {
			grid-template-columns: 1.2fr 0.8fr;
			gap: 3rem;
			align-items: center;
		}
	}

	.wordmark-xl {
		font-size: var(--step-hero);
		line-height: 0.9;
		font-weight: 800;
		letter-spacing: -0.035em;
		margin: 0.5rem 0 1.25rem;
		padding-bottom: 0.25em;
	}

	.tld {
		position: relative;
		display: inline-block;
		color: var(--accent-ink);
		isolation: isolate;
	}

	/* The tag sits under the baseline, not behind the glyphs, so ".is" stays on --bg for contrast. */
	.tld :global(.spray--tag) {
		position: absolute;
		left: -4%;
		width: 108%;
		height: 0.38em;
		top: 82%;
		z-index: -1;
	}

	.lead {
		max-width: 32ch;
	}

	.slabs {
		list-style: none;
		padding: 0;
		margin: 3rem 0 0;
		display: grid;
		gap: 1rem;
		grid-template-columns: repeat(auto-fit, minmax(min(100%, 14rem), 1fr));
	}
</style>
