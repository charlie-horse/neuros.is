<script lang="ts">
	type Props = {
		variant: 'underline' | 'tag' | 'strike';
		/** Draw immediately, no spray-on animation (used for the nav underline). */
		still?: boolean;
		class?: string;
	};

	let { variant, still = false, class: className = '' }: Props = $props();

	const viewBox = $derived(variant === 'underline' ? '0 0 100 8' : '0 0 200 40');
</script>

<svg
	class="spray spray--{variant} {className}"
	class:still
	aria-hidden="true"
	focusable="false"
	{viewBox}
	preserveAspectRatio="none"
>
	{#if variant === 'underline'}
		<path
			d="M2 5 C 25 2, 50 7, 75 4 S 95 3, 98 5"
			pathLength="1"
			fill="none"
			stroke="var(--accent)"
			stroke-width="3"
			stroke-linecap="round"
			filter="url(#spray)"
		/>
	{:else if variant === 'tag'}
		<path
			d="M6 24 C 50 14, 110 30, 194 18"
			pathLength="1"
			fill="none"
			stroke="var(--accent)"
			stroke-width="14"
			stroke-linecap="round"
			opacity=".9"
			filter="url(#spray)"
		/>
		<path
			class="drip"
			d="M60 22 L 60.5 34"
			pathLength="1"
			fill="none"
			stroke="var(--accent)"
			stroke-width="3"
			stroke-linecap="round"
		/>
		<path
			class="drip"
			d="M140 23 L 139.6 37"
			pathLength="1"
			fill="none"
			stroke="var(--accent)"
			stroke-width="3"
			stroke-linecap="round"
		/>
		<circle class="drop" cx="60.5" cy="35" r="2.5" fill="var(--accent)" />
		<circle class="drop" cx="139.6" cy="38" r="2.5" fill="var(--accent)" />
	{:else}
		<path
			d="M4 26 C 60 18, 130 22, 196 12"
			pathLength="1"
			fill="none"
			stroke="var(--accent)"
			stroke-width="10"
			stroke-linecap="round"
			filter="url(#spray)"
		/>
	{/if}
</svg>

<style>
	.spray {
		overflow: visible;
		pointer-events: none;
	}

	.spray path {
		stroke-dasharray: 1;
		stroke-dashoffset: 0;
	}

	@media (prefers-reduced-motion: no-preference) {
		.spray:not(.still) path {
			stroke-dashoffset: 1;
			animation: spray-on 700ms cubic-bezier(0.2, 0.7, 0.2, 1) 150ms forwards;
		}

		.spray:not(.still) .drip {
			animation-delay: 650ms;
			animation-duration: 450ms;
		}

		.spray:not(.still) .drop {
			opacity: 0;
			animation: drop-in 200ms ease-out 1000ms forwards;
		}
	}

	@keyframes spray-on {
		to {
			stroke-dashoffset: 0;
		}
	}

	@keyframes drop-in {
		to {
			opacity: 1;
		}
	}
</style>
