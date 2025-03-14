<script lang="ts">
	import WorkoutDayDialog from '$lib/components/WorkoutDayDialog.svelte'

	let { data } = $props()
</script>

<h1 class="text-6xl">Program</h1>

<p>Week starting 4/11/25</p>

<ul class="flex gap-4">
	{#each data.program.days as { name, description, blocks }}
		<li class="card bg-base-100 card-md w-96 shadow-sm">
			<div class="card-body">
				<h2 class="card-title">{name}</h2>
				<p>{@html description}</p>
				<div class="card-actions justify-end">
					<WorkoutDayDialog {name} {description} {blocks} />
				</div>
			</div>
		</li>
	{/each}
</ul>

<button onclick={() => console.log('someone wanted to download!')} class="btn btn-primary"
	>Download</button
>

<p>Additionally, follow us on social:</p>
<ul>
	<li><a href="/">Facebook</a></li>
	<li><a href="/">Youtube</a></li>
	<li><a href="/">Twitter</a></li>
</ul>
