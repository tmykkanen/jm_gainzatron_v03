import { RESEND_AUDIENCE_ID } from '$env/static/private'
import { http, HttpResponse } from 'msw'

export const resendHandlers = [
	http.post<{ audienceId: string }, { email: string }>(
		'https://api.resend.com/audiences/:audienceId/contacts',
		async ({ request, params }) => {
			if (params.audienceId !== RESEND_AUDIENCE_ID) {
				new HttpResponse('Invalid Audience', { status: 400 })
			}

			const { email } = await request.json()

			if (!email) {
				return new HttpResponse('No email', { status: 400 })
			}

			if (email.toLowerCase().includes('error')) {
				return HttpResponse.error()
			}

			return HttpResponse.json({ object: 'contact', id: crypto.randomUUID() })
		},
	),
]
