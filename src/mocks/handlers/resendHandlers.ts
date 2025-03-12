import { RESEND_AUDIENCE_ID } from '$env/static/private'
import { http, HttpResponse } from 'msw'

export const resendHandlers = [
	http.post(
		'https://api.resend.com/audiences/ca22ca2f-8219-41e0-b72f-c005fdb867e7/contacts',
		async ({ request, params }) => {
			if (params.audienceId === RESEND_AUDIENCE_ID) {
				new HttpResponse('Invalid Audience', { status: 400 })
			}

			const formData = await request.formData()

			const email = formData.get('email')

			if (!email || typeof email !== 'string') {
				return new HttpResponse('No email', { status: 400 })
			}

			if (email.toLowerCase().includes('error')) {
				return HttpResponse.error()
			}

			return HttpResponse.json({ object: 'contact', id: crypto.randomUUID() })
		},
	),
]
