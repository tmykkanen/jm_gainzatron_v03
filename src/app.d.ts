// See https://svelte.dev/docs/kit/types#app.d.ts

import type { ResendNewsLetterRepo } from '$lib/repos/newsletter/ResendNewsletterRepo.js'

// for information about these interfaces
declare global {
	interface Window {
		toggleTheme?(): void
	}
	namespace App {
		// interface Error {}
		interface Locals {
			newsletterRepo: ResendNewsLetterRepo
		}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
		namespace Superforms {
			type Message = {
				type: 'error' | 'success'
				text: string
			}
		}
	}
}

export {}
