import { error, type Actions } from '@sveltejs/kit'

export const actions: Actions = {
	default: async ({ request }) => {
		const data = await request.formData()
		const email = data.get('email')
		await new Promise((resolve) => setTimeout(resolve, 500))

		if (typeof email === 'string' && email.includes('error')) {
			error(400, 'Bad request')
		}
		// console.log('TODO: Create a contact for this user', email)
	},
}
