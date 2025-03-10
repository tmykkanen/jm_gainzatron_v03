import { error } from '@sveltejs/kit'
import type { Actions, PageServerLoad } from './$types.js'
import { fail, superValidate } from 'sveltekit-superforms'
import { zod } from 'sveltekit-superforms/adapters'
import { newsletterSchema } from './schema.js'

export const load: PageServerLoad = async () => {
	return {
		feedbackForm: await superValidate(zod(newsletterSchema)),
	}
}

export const actions: Actions = {
	default: async ({ request }) => {
		const form = await superValidate(request, zod(newsletterSchema))
		if (!form.valid) {
			return fail(400, {
				form,
			})
		}

		await new Promise((resolve) => setTimeout(resolve, 1000))

		const { email } = form.data
		if (email.includes('error')) {
			error(500, 'The server is on fire')
		}

		console.log('TODO: Create a contact for this user', email)

		return {
			form,
		}

		// const data = await request.formData()
		// const email = data.get('email')
		// await new Promise((resolve) => setTimeout(resolve, 500))

		// if (typeof email === 'string' && email.includes('error')) {
		// 	error(400, 'Bad request')
		// }
		// console.log('TODO: Create a contact for this user', email)
	},
}
