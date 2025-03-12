import type { Actions, PageServerLoad } from './$types.js'
import { fail, message, superValidate } from 'sveltekit-superforms'
import { zod } from 'sveltekit-superforms/adapters'
import { newsletterSchema } from './schema.js'

export const load: PageServerLoad = async () => {
	const form = await superValidate(zod(newsletterSchema))

	// Always return {form} in load functions
	return { form }
}

export const actions: Actions = {
	default: async ({ request }) => {
		const form = await superValidate(request, zod(newsletterSchema))

		if (!form.valid) {
			return fail(400, { form })
		}

		await new Promise((resolve) => setTimeout(resolve, 300))
		const { email } = form.data
		console.log('email:', email)

		if (email.includes('error')) {
			return message(form, { type: 'error', text: 'There was a problem, please try again.' })
		}

		// TODO: Do something with the validated form.data

		return message(form, { type: 'success', text: 'Thanks for signing up!' })
	},
}
