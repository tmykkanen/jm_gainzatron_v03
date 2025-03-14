import type { PageServerLoad } from './$types.js'

export const load: PageServerLoad = async ({ locals }) => {
	const program = await locals.programsRepo.getCurrent()

	return {
		program,
		meta: {
			title: 'Program',
			description: 'See the program of the week.',
		},
	}
}
