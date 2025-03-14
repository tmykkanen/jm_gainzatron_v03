export type Tutorial = {
	author: string
	href: string
}

export const equipment = ['barbell', 'dumbell', 'kettlebell', 'machine']
export type Equipment = (typeof equipment)[number]

export type Exercise = {
	name: string
	tutorial: Tutorial
	equipment: Equipment[]
	isUnilateral?: boolean
}

export const blockTypes = ['focus', 'backoff', 'general', 'superset', 'circuit']
export type BlockType = (typeof blockTypes)[number]

export type WorkoutExercise = Exercise & {
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

export type WorkoutDay = {
	name: string
	description: string
	blocks: WorkoutBlock[]
}

export type WorkoutWeek = {
	name: string
	description: string
	days: WorkoutDay[]
}

export interface ProgramsRepoInterface {
	getCurrent(): Promise<WorkoutWeek>
}
