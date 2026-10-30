<script lang="ts">
	import { site } from '#lib/site.ts';
	import PageHeader from '#lib/components/PageHeader.svelte';
	import CallingCard from '#lib/components/CallingCard.svelte';
</script>

<svelte:head>
	<title>Contact · neuros.is</title>
</svelte:head>

<PageHeader kicker={site.contact.kicker} title={site.contact.title} lead={site.contact.lead} />

<CallingCard />
<p class="note vcard-note">{site.contact.vcardNote}</p>

<style>
	.vcard-note {
		margin-top: 1rem;
		max-width: 30rem;
	}
</style>
