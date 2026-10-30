<script lang="ts">
	let {
		n,
		href,
		title,
		blurb
	}: { n: string; href: string; title: string; blurb: string } = $props()
</script>

<li>
	<a class="slab" {href}>
		<span class="label rust num">{n}</span>
		<span class="slab-title">{title} <span aria-hidden="true">→</span></span
		>
		<span class="blurb">{blurb}</span>
	</a>
</li>

<style>
	.slab {
		display: grid;
		align-content: start;
		gap: 0.4rem;
		height: 100%;
		padding: 1.25rem 1.25rem 1.4rem;
		background: var(--surface);
		border: 1px solid var(--border);
		border-radius: 6px;
		box-shadow:
			var(--slab-highlight),
			0 1px 2px var(--shadow);
		color: var(--text);
		text-decoration: none;
	}

	.slab:focus-visible {
		border-radius: 6px;
	}

	.num {
		font-size: 1.75rem;
		letter-spacing: 0.04em;
		line-height: 1.1;
	}

	.slab-title {
		font: 800 var(--step-1) / 1.1 var(--font-sans);
		letter-spacing: -0.01em;
	}

	.blurb {
		color: var(--muted);
	}

	@media (hover: hover) {
		.slab:hover {
			text-decoration: none;
		}
		.slab:hover .slab-title {
			text-decoration: underline 0.3em
				color-mix(in srgb, var(--accent) 60%, transparent);
			text-underline-offset: 0.1em;
		}
	}

	@media (hover: hover) and (prefers-reduced-motion: no-preference) {
		.slab {
			transition: transform 200ms ease;
		}
		.slab:hover {
			transform: translateY(-2px);
		}
	}
</style>
