<script lang="ts">
	let { src, alt, caption }: { src: string; alt: string; caption: string } = $props();
</script>

<figure class="poster-wrap">
	<div class="halo" aria-hidden="true"></div>
	<div class="poster">
		<img {src} {alt} width="400" height="400" loading="eager" decoding="async" fetchpriority="high" />
	</div>
	<figcaption class="label">{caption}</figcaption>
</figure>

<style>
	.poster-wrap {
		position: relative;
		width: min(100%, 22rem);
		margin: 0 auto;
		padding: 1.25rem;
		overflow: clip;
	}

	.halo {
		position: absolute;
		inset: 6%;
		background: radial-gradient(
			closest-side,
			color-mix(in srgb, var(--accent) 55%, transparent),
			transparent
		);
		filter: blur(24px);
		z-index: 0;
	}

	.poster {
		position: relative;
		z-index: 1;
		background: var(--paper);
		padding: 0.6rem;
		box-shadow:
			0 10px 30px -12px var(--shadow),
			0 2px 4px var(--shadow);
		transform: rotate(-2deg);
	}

	.poster::before,
	.poster::after {
		content: '';
		position: absolute;
		top: -0.6rem;
		width: 4.5rem;
		height: 1.4rem;
		background: rgba(233, 231, 226, 0.78);
		box-shadow: 0 1px 2px rgba(0, 0, 0, 0.08);
		mask: linear-gradient(90deg, transparent 0 3px, #000 3px calc(100% - 3px), transparent 0);
	}

	.poster::before {
		left: 12%;
		transform: rotate(-8deg);
	}

	.poster::after {
		right: 12%;
		transform: rotate(8deg);
	}

	img {
		width: 100%;
		height: auto;
	}

	@media (prefers-reduced-motion: no-preference) and (hover: hover) {
		.poster {
			transition: transform 300ms ease;
		}
		.poster-wrap:hover .poster {
			transform: rotate(0);
		}
	}

	figcaption {
		position: relative;
		z-index: 1;
		margin-top: 0.9rem;
		text-align: center;
		color: var(--muted);
	}
</style>
