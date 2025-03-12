export interface NewsletterRepoInterface {
	subcribe(email: string): Promise<void>
}
