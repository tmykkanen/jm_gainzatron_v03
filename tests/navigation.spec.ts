import { test, expect } from '@playwright/test'

test('navigation smoke test', async ({ page }) => {
	await page.goto('/')

	// wait for hydration
	await expect(page.getByTestId('hydrated')).toBeVisible()

	// Expect an h1 title
	await expect(page.getByRole('heading', { level: 1, name: 'Gainzatron' })).toBeVisible()

	// Expect a title "to contain" a substring.
	await expect(page).toHaveTitle(/Gainzatron/)

	// Use the header for navigation
	const headerElement = page.getByRole('banner')
	// Navigate to contact page
	await headerElement.getByRole('link', { name: 'Contact' }).click()
	await expect(page.getByRole('heading', { level: 1, name: 'Contact' })).toBeVisible()
	// await expect(page).toHaveTitle(/Contact/)
})
