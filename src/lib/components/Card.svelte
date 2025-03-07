<script lang="ts">
	import { enhance } from '$app/forms'
	import { toast } from 'svelte-sonner'

	const { title } = $props()
</script>

<div class="card bg-base-200 mx-auto max-w-prose self-center shadow-sm">
	<div class="card-body gap-4">
		<h2 class="card-title">{title}</h2>
		<form
			method="POST"
			use:enhance={() => {
				// toast.loading('Submitting...')
        // TODO: Resume at 1:51:30
				toast.promise(() => new Promise((resolve) => setTimeout(resolve, 2000)), {
					loading: 'Loading',
					success: 'Thanks for signing up!',
					error: 'Error',
				})
				return () => {
					// toast.success('Thanks for signing up!')
				}
			}}
		>
			<label class="floating-label">
				<span>Email</span>
				<input
					name="email"
					type="email"
					placeholder="mail@site.com"
					class="input input-md mb-4 w-full"
					required
				/>
			</label>
			<button class="btn btn-primary">Sign-up</button>
		</form>
	</div>
</div>
