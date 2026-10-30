<script lang="ts">
	import { site } from '#lib/site.ts'

	const lines = site.statusLines

	let i = $state(0)
	let turns = $state(0)
	let mounted = $state(false)

	// Runs only in the browser: the button is a JS-only enhancement.
	$effect(() => {
		mounted = true
	})

	function draft() {
		i = (i + 1) % lines.length
		turns++
	}
</script>

<div class="status">
	<p class="chip" aria-live="polite">
		<span class="label">Status:</span>
		{lines[i]}
	</p>
	{#if mounted}
		<button
			type="button"
			class="btn btn-secondary overthink"
			onclick={draft}
		>
			Draft <span class="spin" aria-hidden="true" style:--turns={turns}
				>↻</span
			>
		</button>
		<span class="label draft" aria-hidden="true"
			>Draft {turns + 1} of ∞</span
		>
	{/if}
</div>

<style>
	.status {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: 0.75rem;
		margin-top: 1.5rem;
	}

	.chip {
		margin: 0;
		background: var(--surface-2);
		border-left: 4px solid var(--accent);
		padding: 0.6rem 0.9rem;
		border-radius: 0 4px 4px 0;
		font-size: var(--step--1);
		color: var(--text);
		max-width: 100%;
	}

	.chip .label {
		color: var(--muted);
		margin-right: 0.25rem;
	}

	.spin {
		display: inline-block;
	}

	@media (prefers-reduced-motion: no-preference) {
		.spin {
			transform: rotate(calc(var(--turns) * 180deg));
			transition: transform 300ms;
		}
	}

	.draft {
		color: var(--muted);
	}
</style>
