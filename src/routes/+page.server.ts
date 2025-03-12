import type { Actions, PageServerLoad } from './$types.js'
import { fail, message, superValidate } from 'sveltekit-superforms'
import { zod } from 'sveltekit-superforms/adapters'
import { newsletterSchema } from './schema.js'
import { RESEND_API_KEY, RESEND_AUDIENCE_ID } from '$env/static/private'
import { Resend } from 'resend'

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

		const resend = new Resend(RESEND_API_KEY)

		const { data, error } = await resend.contacts.create({
			email,
			unsubscribed: false,
			audienceId: RESEND_AUDIENCE_ID,
		})

		if (error) {
			return message(form, { type: 'error', text: 'There was a problem, please try again.' })
		}
		console.log(data)
		return message(form, { type: 'success', text: 'Thanks for signing up!' })
	},
}
