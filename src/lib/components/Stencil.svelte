<script lang="ts">
	import type { Snippet } from 'svelte'

	let {
		tone = 'muted',
		children
	}: { tone?: 'muted' | 'rust'; children: Snippet } = $props()
</script>

<span class="label stencil" class:rust={tone === 'rust'}
	>{@render children()}</span
>

<style>
	.stencil {
		color: var(--muted);
	}
	.stencil.rust {
		color: var(--accent-2);
	}
</style>
