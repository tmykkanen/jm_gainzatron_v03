<script lang="ts">
	import Icon from '@iconify/svelte'
	import Modal from './Modal.svelte'
	import type { WorkoutBlock } from '../../routes/program/program.js'
	import WorkoutDayTable from './WorkoutDayTable.svelte'

	let showModal = $state(false)

	type Props = {
		name: string
		description: string
		blocks: WorkoutBlock[]
	}

	let { name, description, blocks }: Props = $props()
</script>

<button class="btn btn-primary w-full" onclick={() => (showModal = true)}>
	<Icon icon="lets-icons:view-light" />
	View</button
>

<Modal bind:showModal>
	{#snippet header()}
		<h3 class="text-lg font-bold">{name}</h3>
	{/snippet}
	<p class="py-4">{description}</p>
	<WorkoutDayTable {blocks} />
</Modal>
