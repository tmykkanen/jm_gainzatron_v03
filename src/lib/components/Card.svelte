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
				const id = toast.loading('Submitting...')

				return ({ result }) => {
					if (result.type === 'success') {
						toast.success('Thanks for signing up!', {
							id,
						})
					} else {
						toast.error('Something went wrong...', {
							id,
						})
					}
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
