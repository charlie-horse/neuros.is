<script lang="ts">
	let { src, alt, caption }: { src: string; alt: string; caption: string } =
		$props()
</script>

<figure class="poster-wrap">
	<div class="poster">
		<img
			{src}
			{alt}
			width="400"
			height="400"
			loading="eager"
			decoding="async"
			fetchpriority="high"
		/>
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

	.poster {
		position: relative;
		z-index: 1;
		background: var(--paper);
		padding: 0.6rem;
		box-shadow:
			0 10px 30px -12px var(--shadow),
			0 2px 4px var(--shadow);
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
