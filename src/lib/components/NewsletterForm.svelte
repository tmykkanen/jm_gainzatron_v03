<script lang="ts">
	import { toast } from 'svelte-sonner'
	import SuperDebug, { superForm, type Infer, type SuperValidated } from 'sveltekit-superforms'
	import { newsletterSchema, type NewsletterSchema } from '../../routes/schema.js'
	import { zodClient } from 'sveltekit-superforms/adapters'
	import Page from '../../routes/+page.svelte'

	type Props = {
		data: SuperValidated<Infer<NewsletterSchema>>
		title: string
	}

	const { title, data }: Props = $props()

	const form = superForm(data, {
		resetForm: false,
		validators: zodClient(newsletterSchema),
		onUpdated({ form: { message } }) {
			switch (message?.type) {
				case 'success':
					toast.success(message?.text)
					form.reset()
					break
				case 'error':
					toast.error(message?.text)
					break
			}
		},
	})

	const { form: formData, enhance, constraints, delayed } = form
</script>

<div class="card bg-base-200 mx-auto max-w-prose self-center shadow-sm">
	<div class="card-body gap-4">
		<h2 class="card-title">{title}</h2>
		<form method="POST" use:enhance>
			<label class="floating-label">
				<span>Email</span>
				<input
					name="email"
					placeholder="mail@site.com"
					class="input input-md mb-4 w-full"
					required
					bind:value={$formData.email}
				/>
			</label>
			<button class="btn btn-primary" onclick={() => console.log('clicky')}>Sign-up</button>
		</form>
	</div>
</div>
