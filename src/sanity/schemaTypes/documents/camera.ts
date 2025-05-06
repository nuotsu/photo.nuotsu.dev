import { defineField, defineType } from 'sanity'
import { VscDeviceCamera } from 'react-icons/vsc'

export default defineType({
	name: 'camera',
	title: 'Camera',
	icon: VscDeviceCamera,
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
