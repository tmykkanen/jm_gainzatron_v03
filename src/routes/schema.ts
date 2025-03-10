import { z } from 'zod'

export const newsletterSchema = z.object({
	email: z.string().email(),
})

export type NewsletterSchema = typeof newsletterSchema
