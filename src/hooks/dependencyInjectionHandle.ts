import { ResendNewsLetterRepo } from '$lib/repos/newsletter/ResendNewsletterRepo.js'
import { HardcodedProgramsRepo } from '$lib/repos/program/HardcodedProgramsRepo.js'
import type { Handle } from '@sveltejs/kit'

export const dependencyInjectionHandle: Handle = async ({ event, resolve }) => {
	event.locals.newsletterRepo = new ResendNewsLetterRepo()
	event.locals.programsRepo = new HardcodedProgramsRepo()

	const response = await resolve(event)
	return response
}
