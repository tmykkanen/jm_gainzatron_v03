<script lang="ts">
	import Icon from '@iconify/svelte'
	import ThemeToggleIcon from './ThemeToggleIcon.svelte'
</script>

<header class="flex">
	<a href="/" class="btn btn-ghost">Gainzatron</a>
	<div>
		<nav>
			<a href="/contact" class="btn btn-ghost">Contact</a>
		</nav>
	</div>
	<button onclick={() => window?.toggleTheme && window.toggleTheme()}>
		<!-- <Icon icon="solar:sun-linear" />
		<Icon icon="hugeicons:moon-01" /> -->
		<ThemeToggleIcon class="btn btn-square btn-ghost p-2 text-sm" />
	</button>
</header>
