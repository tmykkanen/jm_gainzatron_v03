type Tutorial = {
	author: string
	href: string
}

export const equipment = ['barbell', 'dumbell', 'kettlebell', 'machine']
type Equipment = (typeof equipment)[number]

type Exercise = {
	name: string
	tutorial: Tutorial
	equipment: Equipment[]
	unilateral?: boolean
}

export const blockTypes = ['focus', 'backoff', 'general', 'superset', 'circuit']
type BlockType = (typeof blockTypes)[number]

type WorkoutExercise = Exercise & {
	sets: number
	reps: number | { min: number; max: number }
	rir: number
	notes: string
	featuredValue: { value: number; unit: string }
}

export type WorkoutBlock = {
	exercises: WorkoutExercise[]
	type: BlockType
}

type WorkoutDay = {
	name: string
	description: string
	blocks: WorkoutBlock[]
}

type WorkoutWeek = {
	name: string
	description: string
	days: WorkoutDay[]
}

const lowerOne: WorkoutDay = {
	name: 'Lower 1',
	description: '**Squat** focus lift with **lower body** accessories',
	blocks: [
		{
			type: 'focus',
			exercises: [
				{
					name: 'Squat',
					tutorial: { author: 'Alan Thrall', href: 'https://www.youtube.com/watch?v=zoZWgTrZLd8' },
					equipment: ['barbell'],
					sets: 4,
					reps: 6,
					rir: 2,
					notes: 'Warm up with 2x10, 1x5, 1x3 reps',
					featuredValue: { value: 100, unit: 'kg' },
				},
			],
		},
		{
			type: 'backoff',
			exercises: [
				{
					name: 'Romanian Deadlift',
					tutorial: { author: 'Alan Thrall', href: 'https://www.youtube.com/watch?v=jEy_czb3RKA' },
					equipment: ['barbell'],
					sets: 3,
					reps: 8,
					rir: 2,
					notes: 'Warm up with 2x10, 1x5, 1x3 reps',
					featuredValue: { value: 80, unit: 'kg' },
				},
			],
		},
		{
			type: 'general',
			exercises: [
				{
					name: 'Step-back Lunge',
					tutorial: { author: 'Alan Thrall', href: 'https://www.youtube.com/watch?v=QOVaHwm-Q6U' },
					equipment: ['dumbell'],
					sets: 3,
					reps: {
						min: 7,
						max: 10,
					},
					rir: 2,
					notes: 'Warm up with 2x10, 1x5, 1x3 reps',
					featuredValue: { value: 20, unit: 'kg' },
				},
			],
		},
	],
}

const upperOne: WorkoutDay = {
	name: 'Upper 1',
	description: '**Squat** focus lift with **lower body** accessories',
	blocks: [
		{
			type: 'general',
			exercises: [
				{
					name: 'Step-back Lunge',
					tutorial: { author: 'Alan Thrall', href: 'https://www.youtube.com/watch?v=QOVaHwm-Q6U' },
					equipment: ['dumbell'],
					sets: 3,
					reps: 10,
					rir: 2,
					notes: 'Warm up with 2x10, 1x5, 1x3 reps',
					featuredValue: { value: 20, unit: 'kg' },
				},
			],
		},
		{
			type: 'focus',
			exercises: [
				{
					name: 'Squat',
					tutorial: { author: 'Alan Thrall', href: 'https://www.youtube.com/watch?v=zoZWgTrZLd8' },
					equipment: ['barbell'],
					sets: 4,
					reps: 6,
					rir: 2,
					notes: 'Warm up with 2x10, 1x5, 1x3 reps',
					featuredValue: { value: 100, unit: 'kg' },
				},
			],
		},
		{
			type: 'backoff',
			exercises: [
				{
					name: 'Romanian Deadlift',
					tutorial: { author: 'Alan Thrall', href: 'https://www.youtube.com/watch?v=jEy_czb3RKA' },
					equipment: ['barbell'],
					sets: 3,
					reps: 8,
					rir: 2,
					notes: 'Warm up with 2x10, 1x5, 1x3 reps',
					featuredValue: { value: 80, unit: 'kg' },
				},
			],
		},
	],
}

const lowerTwo = { ...lowerOne, name: 'Lower 2' }
const upperTwo = { ...upperOne, name: 'Upper 2' }
const bro = { ...upperOne, name: 'Bro Day' }

export const program: WorkoutWeek = {
	name: 'Powerbuilding Phase 1: Week 1/6',
	description: 'Focused on hypertrophy, with moderate volume',
	days: [lowerOne, upperOne, lowerTwo, upperTwo, bro],
}
