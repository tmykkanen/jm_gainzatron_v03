// See https://svelte.dev/docs/kit/types#app.d.ts

import type { ResendNewsLetterRepo } from '$lib/repos/newsletter/ResendNewsletterRepo.js'
import type { HardcodedProgramsRepo } from '$lib/repos/program/HardcodedProgramsRepo.js'

// for information about these interfaces
declare global {
	interface Window {
		toggleTheme?(): void
	}
	namespace App {
		// interface Error {}
		interface Locals {
			newsletterRepo: ResendNewsLetterRepo
			programsRepo: HardcodedProgramsRepo
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
