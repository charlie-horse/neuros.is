<script lang="ts">
	import { site } from '#lib/site.ts';
	import PageHeader from '#lib/components/PageHeader.svelte';
	import Stencil from '#lib/components/Stencil.svelte';

	// Explicit UTC so the prerendered string matches what hydration computes.
	const formatted = new Date(site.now.updated + 'T00:00:00Z').toLocaleDateString('en-GB', {
		day: 'numeric',
		month: 'long',
		year: 'numeric',
		timeZone: 'UTC'
	});
</script>

<svelte:head>
	<title>Now · neuros.is</title>
</svelte:head>

<PageHeader kicker={site.now.kicker} title="Now" lead={site.now.lead} />

<p class="label updated">Last updated <time datetime={site.now.updated}>{formatted}</time></p>

<ol class="now-list">
	{#each site.now.items as item, idx (item)}
		<li class:placeholder={item.startsWith('[')}>
			<Stencil tone="rust">{String(idx + 1).padStart(2, '0')}</Stencil>
			<span>{item}</span>
		</li>
	{/each}
</ol>

<p class="note">{site.now.note}</p>

<style>
	.updated {
		color: var(--muted);
		margin-bottom: 1.25rem;
	}

	.now-list {
		list-style: none;
		margin: 0 0 2rem;
		padding: 0;
		display: grid;
		gap: 0.75rem;
		max-width: 62ch;
	}

	.now-list li {
		display: grid;
		grid-template-columns: 2.5rem 1fr;
		align-items: baseline;
		gap: 0.75rem;
		padding: 1rem 1.25rem;
		background: var(--surface);
		border: 1px solid var(--border);
		border-left: 3px solid var(--accent);
		border-radius: 6px;
		box-shadow:
			var(--slab-highlight),
			0 1px 2px var(--shadow);
	}

	.now-list li :global(.stencil) {
		font-size: 1.125rem;
	}

	.now-list li.placeholder :global(.stencil) {
		font-style: normal;
	}

	.now-list li.placeholder {
		color: var(--muted);
		font-style: italic;
		border-left: 3px dashed var(--border-strong);
	}
</style>
