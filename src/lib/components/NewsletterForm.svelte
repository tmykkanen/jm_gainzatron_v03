<script lang="ts">
	import { toast } from 'svelte-sonner'
	import { superForm, type Infer, type SuperValidated } from 'sveltekit-superforms'
	import { newsletterSchema, type NewsletterSchema } from '../../routes/schema.js'
	import { zodClient } from 'sveltekit-superforms/adapters'

	type Props = {
		data: SuperValidated<Infer<NewsletterSchema>>
		title: string
	}

	const { title, data }: Props = $props()

	const { form, enhance } = superForm(data, {
		validators: zodClient(newsletterSchema),
	})
</script>

<div class="card bg-base-200 mx-auto max-w-prose self-center shadow-sm">
	<div class="card-body gap-4">
		<h2 class="card-title">{title}</h2>
		<form method="POST" use:enhance>
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
