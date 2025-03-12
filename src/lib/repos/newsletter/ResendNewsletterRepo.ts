import { Resend } from 'resend'
import type { NewsletterRepoInterface } from './NewsletterRepoInterface.js'
import { RESEND_API_KEY, RESEND_AUDIENCE_ID } from '$env/static/private'

export class ResendNewsLetterRepo implements NewsletterRepoInterface {
	#resend = new Resend(RESEND_API_KEY)

	async subcribe(email: string): Promise<void> {
		const { error } = await this.#resend.contacts.create({
			email,
			unsubscribed: false,
			audienceId: RESEND_AUDIENCE_ID,
		})

		if (error) {
			console.error('Resend error trying to create contact', email)
			throw error
		}
	}
}
