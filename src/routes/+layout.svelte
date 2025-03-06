<script lang="ts">
	import '../app.css'
	import '@fontsource-variable/source-sans-3'
	import { onNavigate } from '$app/navigation'
	import Header from '$lib/components/Header.svelte'
	let { children } = $props()

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

<Header />

<svelte:head>
	<title>Gainzatron</title>
</svelte:head>

{@render children()}
