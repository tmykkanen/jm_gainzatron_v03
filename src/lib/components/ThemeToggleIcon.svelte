<script lang="ts">
	import type { SVGAttributes } from 'svelte/elements'
	let props: SVGAttributes<EventTarget> = $props()
</script>

<svg aria-hidden="true" viewBox="0 0 24 24" {...props}>
	<mask class="moon" id="moon-mask">
		<rect x="0" y="0" width="100%" height="100%" fill="white" />
		<circle cx="24" cy="10" r="6" fill="black" />
	</mask>
	<circle class="sun" cx="12" cy="12" r="6" mask="url(#moon-mask)" fill="currentColor" />
	<g class="sun-beams" stroke="currentColor" stroke-width="2px">
		<line x1="12" y1="1" x2="12" y2="3" />
		<line x1="12" y1="21" x2="12" y2="23" />
		<line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
		<line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
		<line x1="1" y1="12" x2="3" y2="12" />
		<line x1="21" y1="12" x2="23" y2="12" />
		<line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
		<line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
	</g>
</svg>

<style>
	/* Based on https://web.dev/shows/gui-challenges/kZiS1QStIWc */
	svg {
		--duration: 500ms;
	}

	svg .moon,
	svg .sun,
	svg .sun-beams {
		transform-origin: center center;
	}

	:global([data-theme='dark']) svg .sun {
		transform: scale(1.75);
	}

	:global([data-theme='dark']) svg .sun-beams {
		opacity: 0;
	}

	:global([data-theme='dark']) svg .moon > circle {
		transform: translateX(-7px);

		@supports (cx: 1) {
			transform: translateX(0);
			cx: 17;
		}
	}

	@media (prefers-reduced-motion: no-preference) {
		svg .sun {
			transition: transform var(--duration) var(--ease-elastic-out-3);
		}
		svg .sun-beams {
			transition:
				transform var(--duration) var(--ease-elastic-out-4),
				opacity var(--duration) var(--ease-3);
		}
		svg .moon > circle {
			transition: transform calc(var(--duration) / 2) var(--ease-out-5);
		}
		@supports (cx: 1) {
			svg .moon > circle {
				transition: cx calc(var(--duration) / 2) var(--ease-elastic);
			}
		}
		:global([data-theme='dark']) svg .sun {
			transform: scale(1.75);
			transition-timing-function: var(--ease-3);
			transition-duration: calc(var(--duration) / 2);
		}
		:global([data-theme='dark']) svg .sun-beams {
			transform: rotateZ(-25deg);
			transition-duration: calc(var(--duration) / 3);
		}
		:global([data-theme='dark']) svg .moon > circle {
			transition-delay: calc(var(--duration) / 2);
			transition-duration: var(--duration);
		}
	}
</style>
