<script lang="ts">
</script>

<div class="stackSmol from-primary to-secondary h-[50svh] bg-gradient-to-br">
	<div class="from-base-100 to-base-200 m-4 rounded-xl bg-gradient-to-br lg:m-8"></div>
	<div class="place-self-center">
		<h1
			class="from-primary to-secondary place-self-center bg-gradient-to-br bg-clip-text text-7xl text-transparent lg:text-8xl"
		>
			Gainzatron
		</h1>
		<a href="/program" class="btn btn-primary">See this week's program</a>
	</div>
</div>

<style>
	/* Inspired by smolcss by Stephanie
 https://smolcss.dev/#smol-stack-layout */
	.stackSmol {
		display: grid;
		grid-template-areas: 'stack';
	}

	.stackSmol > * {
		grid-area: stack;
	}
</style>
