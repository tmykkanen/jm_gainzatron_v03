<script lang="ts">
	import ThemeToggleIcon from './ThemeToggleIcon.svelte'
</script>

<header class="my-2 flex items-center justify-between">
	<a href="/" class="btn btn-ghost text-3xl font-bold">Gainzatron</a>
	<div class="flex items-center">
		<nav>
			<a href="/contact" class="btn btn-ghost text-3xl">Contact</a>
		</nav>
		<button aria-label="toggle theme" onclick={() => window?.toggleTheme && window.toggleTheme()}>
			<ThemeToggleIcon class="btn btn-square btn-ghost p-2" />
		</button>
	</div>
</header>

<style>
	header {
		view-transition-name: header;
	}
</style>
