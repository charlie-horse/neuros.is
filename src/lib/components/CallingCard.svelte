<script lang="ts">
	import { site } from '#lib/site.ts'

	let mounted = $state(false)
	let canCopy = $state(false)
	let copied = $state(false)
	let label = $state('Copy email')
	let timer: ReturnType<typeof setTimeout> | undefined

	$effect(() => {
		mounted = true
		canCopy = typeof navigator !== 'undefined' && 'clipboard' in navigator
		return () => clearTimeout(timer)
	})

	async function copy() {
		clearTimeout(timer)
		try {
			await navigator.clipboard.writeText(site.email)
			copied = true
			label = 'Copied ✓'
		} catch {
			copied = false
			label = 'Couldn’t copy'
		}
		timer = setTimeout(() => {
			copied = false
			label = 'Copy email'
		}, 2000)
	}
</script>

<div class="card-wrap">
	<article class="card" aria-labelledby="cc-name">
		<div class="top">
			<img src={site.avatar} alt="" width="96" height="96" class="mini" />
			<div>
				<h2 id="cc-name">{site.name}</h2>
				<p class="label domain">{site.domain}</p>
			</div>
		</div>

		<dl>
			<div class="row">
				<dt class="label">Email</dt>
				<dd><a href="mailto:{site.email}">{site.email}</a></dd>
			</div>
			<div class="row">
				<dt class="label">GitHub</dt>
				<dd><a href={site.github}>{site.githubLabel}</a></dd>
			</div>
			<div class="row">
				<dt class="label">Web</dt>
				<dd><a href="/">{site.domain}</a></dd>
			</div>
		</dl>

		<div class="actions">
			<a
				class="btn btn-primary"
				href={site.vcard}
				download="charlie-syvertsen.vcf"
				rel="external">Save contact card (.vcf)</a
			>
			{#if mounted && canCopy}
				<button class="btn btn-secondary" type="button" onclick={copy}
					>{label}</button
				>
				<span class="visually-hidden" aria-live="polite"
					>{copied ? 'Email address copied.' : ''}</span
				>
			{/if}
		</div>
	</article>
</div>

<style>
	.card-wrap {
		overflow: clip;
		padding: 0.5rem;
	}

	/* On wider screens let the rotated card's slack reach into the gutter so its
	   edge lines up with the column; on phones it stays inside the 16px gutter. */
	@media (min-width: 40rem) {
		.card-wrap {
			margin-inline: -0.5rem;
		}
	}

	.card {
		background: var(--surface);
		border: 1px solid var(--border);
		border-top: 3px solid var(--accent);
		border-radius: 6px;
		padding: 1.5rem;
		max-width: 30rem;
		box-shadow:
			var(--slab-highlight),
			0 12px 30px -16px var(--shadow);
	}

	.top {
		display: flex;
		align-items: center;
		gap: 1rem;
		margin-bottom: 1.25rem;
	}

	.mini {
		border-radius: 50%;
		width: 96px;
		height: 96px;
		object-fit: cover;
		flex: none;
		border: 3px solid var(--paper);
		box-shadow: 0 2px 6px var(--shadow);
	}

	h2 {
		font-size: var(--step-1);
		margin: 0 0 0.25rem;
	}

	.domain {
		color: var(--muted);
	}

	dl {
		margin: 0 0 1.5rem;
		display: grid;
		gap: 0.5rem;
	}

	.row {
		display: grid;
		grid-template-columns: 4.5rem 1fr;
		align-items: baseline;
		gap: 0.25rem 0.5rem;
		padding-block: 0.35rem;
		border-bottom: 1px dashed var(--border);
	}

	dt {
		color: var(--muted);
	}

	dd {
		margin: 0;
		min-width: 0;
		overflow-wrap: break-word;
		hyphens: none;
	}

	@media (max-width: 22.5rem) {
		.row {
			grid-template-columns: 1fr;
		}
	}

	.actions {
		display: flex;
		flex-wrap: wrap;
		gap: 0.75rem;
	}
</style>
