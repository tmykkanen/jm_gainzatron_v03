<script>
	// https://svelte.dev/playground/modal?version=5.23.0
	let { showModal = $bindable(), header, children } = $props()

	let dialog = $state()

	$effect(() => {
		if (showModal) dialog.showModal()
	})
</script>

<dialog
	bind:this={dialog}
	onclose={() => (showModal = false)}
	onclick={(e) => {
		if (e.target === dialog) dialog.close()
	}}
	class="modal"
>
	<div class="modal-box max-w-2/3">
		{@render header?.()}
		<hr />
		{@render children?.()}
		<div class="modal-action">
			<button class="btn">Track</button>
			<button onclick={() => dialog.close()} class="btn">Close</button>
		</div>
	</div>
</dialog>

<style>
	dialog[open] {
		animation: zoom 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
	}
	@keyframes zoom {
		from {
			transform: scale(0.95);
		}
		to {
			transform: scale(1);
		}
	}
	dialog[open]::backdrop {
		animation: fade 0.2s ease-out;
	}
	@keyframes fade {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
</style>
