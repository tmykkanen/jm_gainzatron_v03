import type { Actions } from '@sveltejs/kit'

export const actions: Actions = {
	default: async ({ request }) => {
		const data = await request.formData()
		const email = data.get('email')

		// await new Promise((resolve) => setTimeout(resolve, 3000))

		console.log('TODO: Create a contact for this user', email)
	},
}
