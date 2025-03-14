<script lang="ts">
	import type { WorkoutBlock } from '$lib/repos/program/ProgramsRepoInterface.js'

	type Props = {
		blocks: WorkoutBlock[]
	}

	let { blocks }: Props = $props()
</script>

<div class="overflow-x-auto">
	<table class="table">
		<!-- head -->
		<thead>
			<tr>
				<th>Exercise</th>
				<th>Sets</th>
				<th>Reps</th>
				<th>RIR</th>
				<th>Featured</th>
				<th>Tutorial</th>
				<th>Notes</th>
			</tr>
		</thead>
		<tbody>
			{#each blocks as { exercises }}
				{#each exercises as { name, sets, reps, rir, featuredValue, tutorial, notes, isUnilateral }}
					<tr>
						<th>{name}</th>
						<td>{sets}</td>
						<td>
							{#if typeof reps === 'number'}
								{reps}
							{:else}
								{reps.min} - {reps.max}{isUnilateral ? '/side' : ''}
							{/if}
						</td>
						<td>{rir}</td>
						<td>{featuredValue.value}{featuredValue.unit}</td>
						<td><a href={tutorial.href}>@{tutorial.author}</a></td>
						<td>{notes}</td>
					</tr>
				{/each}
			{/each}
			<!-- row 1 -->
		</tbody>
	</table>
</div>
