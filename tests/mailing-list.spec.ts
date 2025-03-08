import { test, expect } from '@playwright/test'

test('can sign up for the mailing list', async ({ page }) => {
	await page.goto('/')

	// wait for hydration
	await expect(page.getByTestId('hydrated')).toBeVisible()

	// Expect an h2 title
	await expect(page.getByRole('heading', { level: 2, name: 'Sign up for updates' })).toBeVisible()

	await page.getByLabel('email').fill('playwright@gainzatron.com')
	await page.getByRole('button', { name: 'Sign-up' }).click()

	const toastElement = page.getByRole('status')
	await expect(toastElement.getByText('Thanks for signing up!')).toBeVisible()
})
