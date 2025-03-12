<script lang="ts">
	import NewsletterForm from '$lib/components/NewsletterForm.svelte'
	import Hero from '$lib/components/Hero.svelte'
	import { superForm } from 'sveltekit-superforms'
	import { zodClient } from 'sveltekit-superforms/adapters'
	import { newsletterSchema } from './schema.js'

	let { data } = $props()
</script>

<Hero />

<section class="my-4 flex justify-center gap-4">
	<a href="/contact" class="btn btn-primary">Contact Us</a>
	<a href="/personal" class="btn btn-primary">Generate a program</a>
	<a href="/discord" class="btn btn-primary">Join the community</a>
</section>

<section>
	<NewsletterForm data={data.form} title="Sign up for updates" />
</section>
