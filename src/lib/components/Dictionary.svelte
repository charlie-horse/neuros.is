<script lang="ts">
	import { site } from '#lib/site.ts';

	let { senses, start = 1 }: { senses: readonly string[]; start?: number } = $props();

	const d = site.dictionary;
</script>

<div class="dict">
	<p class="entry">
		<span class="hw">{d.headword}</span>
		<span class="pron">{d.pronunciation}</span>
		<em class="pos">{d.pos}</em>
	</p>
	<ol {start}>
		{#each senses as s (s)}<li>{s}</li>{/each}
	</ol>
</div>

<style>
	.dict {
		background: var(--surface);
		border: 1px solid var(--border);
		border-radius: 6px;
		padding: 1.25rem;
		max-width: 62ch;
		box-shadow: var(--slab-highlight);
	}

	.entry {
		display: flex;
		flex-wrap: wrap;
		align-items: baseline;
		gap: 0.25rem 0.75rem;
		margin: 0 0 0.75rem;
	}

	.hw {
		font-weight: 800;
		font-size: var(--step-2);
		letter-spacing: -0.02em;
		line-height: 1.1;
	}

	/* IPA glyphs fall outside the Bricolage latin subset; a system face here
	   avoids fetching the extra latin-ext font file just for this one line. */
	.pron {
		color: var(--muted);
		font-family: system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;
	}

	.pos {
		color: var(--accent-2);
		font-style: italic;
	}

	ol {
		margin: 0;
		padding-left: 2rem;
		display: grid;
		gap: 0.5rem;
	}

	ol li {
		padding-left: 0.25rem;
	}

	ol li::marker {
		font: 500 0.9em var(--font-mono);
		color: var(--accent-2);
	}
</style>
