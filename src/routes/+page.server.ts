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
	default: async ({ request, locals: { newsletterRepo } }) => {
		const form = await superValidate(request, zod(newsletterSchema))

		// console.log(request.headers)
		if (!form.valid) {
			return fail(400, { form })
		}

		const { email } = form.data

		try {
			await newsletterRepo.subcribe(email)
		} catch {
			return message(form, { type: 'error', text: 'There was a problem, please try again.' })
		}

		// const resend = new Resend(RESEND_API_KEY)

		// const { data, error } = await resend.contacts.create({
		// 	email,
		// 	unsubscribed: false,
		// 	audienceId: RESEND_AUDIENCE_ID,
		// })

		// console.log('data:', data)
		// console.log('error:', error)

		return message(form, { type: 'success', text: 'Thanks for signing up!' })
	},
}
