import type { Handle } from '@sveltejs/kit'
import { sequence } from '@sveltejs/kit/hooks'

import { MSW_ENABLED } from '$env/static/private'
import { dependencyInjectionHandle } from './hooks/dependencyInjectionHandle.js'

// Hijack server-side requests with Mock Service Worker
// useful for locak development and testing edge cases
if (MSW_ENABLED === 'true') {
	import('./mocks/mswNodeServer').then(({ mswNodeServer }) => {
		mswNodeServer.listen()
		console.log('MSW Server Started')
	})
}

export const handle: Handle = sequence(dependencyInjectionHandle)
