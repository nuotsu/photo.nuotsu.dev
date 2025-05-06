import { defineField, defineType } from 'sanity'
import { MdOutlineCameraRoll } from 'react-icons/md'

export default defineType({
	name: 'film',
	title: 'Film',
	icon: MdOutlineCameraRoll,
	type: 'document',
	liveEdit: true,
	fields: [
		defineField({
			name: 'brand',
			type: 'string',
		}),
		defineField({
			name: 'model',
			type: 'string',
		}),
	],
	preview: {
		select: {
			title: 'model',
			subtitle: 'brand',
		},
	},
})
