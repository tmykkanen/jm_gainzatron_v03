# JM Gainzatron App Tutorial

SvelteKit 2025 🚀 Johnny Magrippis
https://www.youtube.com/watch?v=Mizs9PKTPk8&list=PLD9qSm-W5DLoTa5jr33nTCkszADwzX7K-

## Video 1 (https://www.youtube.com/live/Mizs9PKTPk8?si=8bH7ObZMdQGVLCNn)

- [x] 00:00 - What are we doing today? A brand new code-along REAL APP?
- [x] 14:54 - What should I know already 🤔 Node? Package Managers? Typescript? The Svelte tutorial?
- [x] 30:13 - Getting started with the SvelteKit wizard 🧙‍♂️ explaining our many choices
- [x] 45:49 - What did the wizard give us?
- [x] 1:25:57 - What would the “kitchen-sink” project have given us?
- [x] 1:34:32 - Who am I anyway?!
- [x] 1:53:58 - CSS Styling… 💅 with global & scoped CSS!
- [x] 2:14:40 - Let’s set up a classic hero section!
- [x] 2:38:47 - CSS Styling… ⛵️ with Tailwind! How can it teach you CSS?!
- [x] 2:57:20 - Thoughts on the Svelte CLI adder 🧙‍♂️ having a wizard do stuff for you!
- [x] 3:00:17 - Mixing and matching global, scoped & Tailwind CSS!
- [x] 3:04:46 - Recap, series overview ⏱️ BREAK
- [x] 3:15:12 - Thinking in components: Creating a re-usable Anchor component!
- [x] 3:34:00 - Let’s add a dedicated “Contact” route!
- [x] 3:41:03 - Working with SvelteKit layouts!
- [x] 3:59:55 - Working with libraries: Bringing in `bits-ui` and its “cleverer” button that’s sometimes an anchor! https://next.bits-ui.com/docs/compone...
- [x] 4:08:28 - Dark mode 🌘 with a light-weight script!
- [x] 4:29:09 - Setting up our component library: Shadcn for Svelte 5!
- [x] 5:02:11 - Shadcn themes CSS Variables / Custom Properties!
- [x] 5:29:58 - My “Additional Custom CSS Reset” & additions, relevant article by Josh:
- [x] 5:41:08 - Setting up Playwright and writing a smoke test!
- [x] 6:02:15 - Version control with Git & Github!
- [x] 6:06:03 - View 💫 Transitions!
- [x] 6:27:22 - Less flakey tests by waiting for app hydration!
- [x] 6:38:00 - FINAL ⏱️ BREAK
- [x] 6:41:15 - All about fonts & bringing in a custom one with fontsource
- [x] 6:58:02 - Setting up a Github project 🚀 deploying to Cloudflare
- [x] 7:21:15 - Adding page metadata, including Opengraph Images!
- [x] 7:51:17 - Final 🥳 DEMO + LIKE 💜 SUBSCRIBE

## Video 2 (https://www.youtube.com/live/ZtBQY6YCsbE?si=DEQc1gQgW7Q0OPE5)

- [x] 00:00 - What are we doing today? Our REAL APP goes from static to dynamic?
- [x] 6:18 - What have we done so far? What did I do offline?
- [x] 16:01 - Who needs Dependabot? ⬆️ Updating dependencies with npm-check-updates!
- [x] 33:19 - BDD Form with 🎭 Playwright!
- [x] 46:39 - Using a shadcn Card!
- [x] 59:48 - What do I think about Svelte 5 anyway?!
- [x] 1:06:22 - shadcn Label & Input components
- [x] 1:12:47 - Send the user’s email to our backend, with SvelteKit Form Actions!
- [x] 1:29:31 - How do we know this worked?! Toast notifications with shadcn & sonner
- [x] 1:38:03 - The Toast disappears for Playwright, due to full browser navigation!
- [x] 1:41:07 - Checking Playwright’s video to figure out what went wrong!
- [x] 1:43:50 - Adding `use:enhance` to switch to client-side form submission and keep our toast!
- [x] 2:09:19 - Standardised enhanced forms SvelteKit Superforms, validated with Zod
- [x] 3:07:36 - Standardised & type-safe Superform messages!
- [x] 3:25:35 - Emails 💌 Newsletter Audiences with Resend
- [x] 3:30:54 - Buying & setting up a domain with the Cloudflare Registrar:
- [x] 3:34:22 - Email Routing to sign-up for Free Resend as our client / ops account!
- [x] 3:38:28 - API Keys and working with secret & public environment variables
- [x] 3:53:16 - Prove to Resend that we own our domain!
- [x] 4:01:10 - DEMO 🥳 Add contact to resend audience
- [x] 4:05:19 - Setting up MSW: Mock Service Worker
- [x] 4:12:35 - Where should we start our MSW server? Creating a `hooks.server.ts`!
- [x] 4:29:10 - Resend MSW Handler, to test happy paths & error cases!
- [x] 4:31:38 - Watch me think how we should be conditionally importing MSW instead!
- [x] 4:35:03 - Cool Cloudflare features, but also alternatives such as ImprovMX
- [x] 4:42:53 - Set yourself up for success with my flavour of dependency injection!
- [x] 5:12:11 - IMPORTANT! Conditionally import MSW!
- [x] 5:23:37 - Final 🥳 DEMO + LIKE 💜 SUBSCRIBE

## Video 3 (https://www.youtube.com/live/v2QMZYRF3W0?si=QQ5DyqcwSsjaOAKl)

- [ ] 00:00 - What are we doing today? Our REAL APP goes from static to dynamic?
- [ ] 4:01 - What have we done so far? What did I do offline?
- [ ] 6:35 - Looping in Svelte & interactive Tutorials!
- [ ] 19:38 - Looping 🔁 in our real project
- [ ] 33:58 - Svelte 5 Snippets
- [ ] 45:48 - Extracting components (like in most frontend frameworks)
- [ ] 53:00 - Practically working with hardcoded data & dependency injection
- [ ] 1:28:12 - Working with markdown
- [ ] 1:48:48 - Switching to a monorepo setup with pnpm workspaces:
- [ ] 2:14:20 - Using Turborepo
- [ ] 2:32:00 - Cloudflare deployment 🚀 BREAK
- [ ] 2:35:25 - Have Playwright work out of a different directory
- [ ] 2:41:13 - Discussing persisted data options: Postgres, SQLite… somewhere else in the cloud?
- [ ] 2:46:45 - Setting up Sanity Studio in our monorepo
- [ ] 3:00:55 - Defining our Sanity content schemas
- [ ] 4:09:05 - Loading Sanity CMS data in SvelteKit!
- [ ] 4:54:26 - DevEx & type-safety with sanity-typegen
- [ ] 5:14:20 - Q&A & Deploying a CMS!
- [ ] 5:15:57 - Puppy cameo 🧸 Final 🥳 DEMO + LIKE 💜 SUBSCRIBE
