<script lang="ts">
	import Icon from '@iconify/svelte'
	import ThemeToggleIcon from './ThemeToggleIcon.svelte'
</script>

<header class="flex items-center justify-between">
	<a href="/" class="btn btn-ghost font-bold">Gainzatron</a>
	<div class="flex items-center">
		<nav>
			<a href="/contact" class="btn btn-ghost">Contact</a>
		</nav>
		<button aria-label="toggle theme" onclick={() => window?.toggleTheme && window.toggleTheme()}>
			<!-- <Icon icon="solar:sun-linear" />
      <Icon icon="hugeicons:moon-01" /> -->
			<ThemeToggleIcon class="btn btn-square btn-ghost p-2 text-sm" />
		</button>
	</div>
</header>
