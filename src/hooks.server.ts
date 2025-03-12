import type { Handle } from '@sveltejs/kit'
import { server } from './mocks/node.js'
import { MSW_ENABLED } from '$env/static/private'

if (MSW_ENABLED === 'true') {
	server.listen()
}

export const handle: Handle = async ({ event, resolve }) => {
	const response = await resolve(event)
	return response
}
