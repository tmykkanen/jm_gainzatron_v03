import { defineField, defineType } from 'sanity'

export default defineType({
	name: 'exercise',
	title: 'Exercise',
	type: 'document',
	fields: [
		defineField({
			name: 'name',
			title: 'Name',
			type: 'string',
		}),
		defineField({
			name: 'slug',
			title: 'Slug',
			type: 'slug',
			options: {
				source: 'name',
				maxLength: 96,
			},
		}),
		defineField({
			name: 'isUnilateral',
			title: 'Unilateral',
			type: 'boolean',
		}),
		defineField({
			name: 'equipment',
			title: 'Equipment',
			type: 'array',
			options: {
				list: ['barbell', 'dubmbell', 'kettlebell'],
			},
			of: [{ type: 'string' }],
		}),
		defineField({
			name: 'tutorial',
			title: 'Tutorial',
			type: 'document',
			fields: [
				defineField({
					name: 'author',
					title: 'Author',
					type: 'string',
				}),
				defineField({
					name: 'href',
					title: 'Link',
					type: 'url',
				}),
			],
		}),
		defineField({
			name: 'image',
			title: 'Image',
			type: 'image',
			options: {
				hotspot: true,
			},
		}),
	],
	preview: {
		select: {
			title: 'name',
		},
	},
})
