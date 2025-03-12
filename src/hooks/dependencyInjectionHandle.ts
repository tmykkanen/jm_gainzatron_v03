import { ResendNewsLetterRepo } from '$lib/repos/newsletter/ResendNewsletterRepo.js'
import type { Handle } from '@sveltejs/kit'

export const dependencyInjectionHandle: Handle = async ({ event, resolve }) => {
	event.locals.newsletterRepo = new ResendNewsLetterRepo()
	const response = await resolve(event)
	return response
}
