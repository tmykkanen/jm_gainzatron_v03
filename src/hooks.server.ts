import type { Handle } from '@sveltejs/kit'
import { server } from './mocks/node.js'
import { MSW_ENABLED } from '$env/static/private'
import { sequence } from '@sveltejs/kit/hooks'
import { dependencyInjectionHandle } from './hooks/dependencyInjectionHandle.js'

if (MSW_ENABLED === 'true') {
	server.listen()
	console.log('MSW Server Started')
}

export const handle: Handle = sequence(dependencyInjectionHandle)
