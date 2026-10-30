<script lang="ts">
	import SprayMark from './SprayMark.svelte';

	let { kicker, title, lead }: { kicker: string; title: string; lead?: string } = $props();

	const cut = $derived(title.lastIndexOf(' '));
	const titleRest = $derived(cut === -1 ? '' : title.slice(0, cut + 1));
	const lastWord = $derived(cut === -1 ? title : title.slice(cut + 1));
</script>

<header class="page-header">
	<p class="label rust">{kicker}</p>
	<h1>{titleRest}<span class="last">{lastWord}<SprayMark variant="underline" /></span></h1>
	{#if lead}<p class="lead">{lead}</p>{/if}
</header>

<style>
	.page-header {
		margin-bottom: 2.5rem;
	}

	h1 {
		font-size: var(--step-3);
		margin: 0.6rem 0 1.25rem;
		padding-bottom: 0.15em;
	}

	.last {
		position: relative;
		display: inline-block;
	}

	.last :global(.spray) {
		position: absolute;
		left: 0;
		bottom: -0.15em;
		width: 100%;
		height: 0.25em;
	}

	.lead {
		max-width: 40ch;
	}
</style>
