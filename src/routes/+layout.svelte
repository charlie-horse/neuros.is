<script lang="ts">
	import '@fontsource-variable/bricolage-grotesque/wght.css';
	import '@fontsource/ibm-plex-mono/latin-500.css';
	import '#lib/styles/global.css';
	import favicon from '#lib/assets/favicon.svg';
	import { site } from '#lib/site.ts';
	import { page } from '$app/state';
	import SprayDefs from '#lib/components/SprayDefs.svelte';
	import SprayMark from '#lib/components/SprayMark.svelte';
	import type { LayoutProps } from './$types';

	let { children }: LayoutProps = $props();

	const year = new Date().getFullYear();

	const isCurrent = (href: string) =>
		page.url.pathname === href || page.url.pathname.startsWith(href + '/');
</script>

<svelte:head>
	<link rel="icon" href={favicon} type="image/svg+xml" />
	<meta name="description" content={site.description} />
</svelte:head>

<a class="skip btn btn-primary" href="#main">Skip to content</a>
<SprayDefs />

<div class="site">
	<header class="container site-header">
		<a class="wordmark" href="/" aria-label="neuros.is, home">neuros<span class="tld">.is</span></a>
		<nav aria-label="Primary">
			<ul>
				{#each site.nav as item (item.href)}
					<li>
						<a href={item.href} aria-current={isCurrent(item.href) ? 'page' : undefined}>
							{item.label}{#if isCurrent(item.href)}<SprayMark variant="underline" still />{/if}
						</a>
					</li>
				{/each}
			</ul>
		</nav>
	</header>

	<main id="main" tabindex="-1" class="container">
		{@render children()}
	</main>

	<footer class="container site-footer">
		<p class="label">© {year} {site.name}</p>
		<ul class="footer-links">
			<li><a href="mailto:{site.email}">{site.email}</a></li>
			<li><a href={site.github}>GitHub</a></li>
			<li><a href={site.vcard} download rel="external">Save contact (.vcf)</a></li>
		</ul>
		<p class="label">{site.tagline}</p>
	</footer>
</div>

<style>
	.skip {
		position: absolute;
		left: 1rem;
		top: -100px;
		z-index: 10;
	}

	.skip:focus {
		top: 1rem;
	}

	.site-header {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: space-between;
		gap: 0.5rem 1.5rem;
		padding-block: 1.25rem;
		border-bottom: 1px dashed var(--border);
	}

	.wordmark {
		font-weight: 800;
		font-size: 1.375rem;
		letter-spacing: -0.02em;
		color: var(--text);
		text-decoration: none;
		min-height: 44px;
		display: inline-flex;
		align-items: center;
	}

	.tld {
		color: var(--accent-ink);
		position: relative;
	}

	/* graffiti-pink spray dot sitting on the "i", covering its tittle.
	   Centred on the i's tittle (measured at ~0.44em / 0.5em into ".is"); tune here if the font changes. */
	.tld::after {
		content: '';
		position: absolute;
		top: calc(0.5em - 3.5px);
		left: calc(0.44em - 3.5px);
		width: 7px;
		height: 7px;
		border-radius: 50%;
		background: var(--accent-3);
	}

	nav ul {
		display: flex;
		gap: 1rem;
		list-style: none;
		margin: 0;
		padding: 0;
	}

	nav a {
		font-weight: 600;
		color: var(--muted);
		text-decoration: none;
		min-height: 44px;
		display: inline-flex;
		align-items: center;
		position: relative;
	}

	nav a:hover {
		color: var(--text);
	}

	nav a[aria-current='page'] {
		color: var(--text);
	}

	/* Forced colors hides the spray underline, so mark the current page another way. */
	@media (forced-colors: active) {
		/* the dot would be painted Canvas and erase the real tittle */
		.tld::after {
			display: none;
		}
		nav a[aria-current='page'] {
			text-decoration: underline;
			text-decoration-thickness: 3px;
			text-underline-offset: 0.3em;
		}
	}

	nav a :global(.spray) {
		position: absolute;
		left: 0;
		bottom: 4px;
		width: 100%;
		height: 6px;
	}

	@media (max-width: 400px) {
		nav {
			flex-basis: 100%;
		}
		nav ul {
			gap: 1.5rem;
		}
	}

	main {
		padding-block: clamp(2rem, 6vw, 5rem);
	}

	main:focus {
		outline: none;
	}

	.site-footer {
		border-top: 1px dashed var(--border);
		margin-top: auto;
		padding-block: 2rem 2.5rem;
		display: grid;
		gap: 0.75rem;
		color: var(--muted);
		font-size: var(--step--1);
	}

	.footer-links {
		display: flex;
		flex-wrap: wrap;
		gap: 0.25rem 1rem;
		list-style: none;
		margin: 0;
		padding: 0;
	}

	.footer-links a {
		display: inline-flex;
		align-items: center;
		min-height: 44px;
	}
</style>
