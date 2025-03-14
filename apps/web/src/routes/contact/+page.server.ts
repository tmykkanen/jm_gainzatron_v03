import type { PageServerLoad } from './$types.js'

export const load: PageServerLoad = () => {
	return {
		meta: {
			title: 'Contact',
			description: 'Find out where to contact us.',
		},
	}
}
