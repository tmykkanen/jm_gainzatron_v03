<script lang="ts">
	import '../app.css'
	import '@fontsource-variable/source-sans-3'
	import { onNavigate } from '$app/navigation'
	import Header from '$lib/components/Header.svelte'
	import { page } from '$app/stores'

	const hardcodedMeta = {
		title: 'Gainzatron',
		description: 'The fitness app for the rest of us',
		og: '/og.png',
	}

	let { children } = $props()

	let title = $derived(
		$page.data.meta?.title ? `${$page.data.meta?.title} | Gainzatron` : hardcodedMeta.title,
	)
	let description = $derived(
		$page.data.meta?.description ? $page.data.meta?.description : hardcodedMeta.description,
	)

  let ogImageUrl = $derived(
		`${$page.url.origin}${$page.data.meta?.og ? $page.data.meta?.og : hardcodedMeta.og}`,
	)

	onNavigate((navigation) => {
		if (
			typeof document.startViewTransition !== 'undefined' &&
			// Check if we're clicking on a link for the current page
			navigation.from?.url.href !== navigation.to?.url.href
		) {
			// Check for user navigation back
			if (navigation.delta && navigation.delta < 0) {
				document.documentElement.dataset.back = 'true'
			} else {
				document.documentElement.removeAttribute('data-back')
			}

			return new Promise((resolve) => {
				document.startViewTransition(async () => {
					resolve()
					await navigation.complete
				})
			})
		}
	})

	$effect(() => {
		// add data-testid now that our app is hydrated
		// have playwright wait for this before starting any text-sm
		document.documentElement.dataset.testid = 'hydrated'
	})
</script>

<svelte:head>
	<title>{title}</title>
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:type" content="website" />
	<meta property="og:site_name" content="Gainzatron" />
	<meta property="og:url" content={$page.url.href} />
	<meta property="og:image" content={ogImageUrl} />
	<meta property="twitter:card" content="summary_large_image" />
</svelte:head>

<Header />

{@render children()}
