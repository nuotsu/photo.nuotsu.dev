import { defineField, defineType } from 'sanity'
import { IoIosImages } from 'react-icons/io'

export default defineType({
	name: 'roll',
	title: 'Roll',
	icon: IoIosImages,
	type: 'document',
	liveEdit: true,
	fields: [
		defineField({
			name: 'developDate',
			type: 'date',
		}),
		defineField({
			name: 'camera',
			title: 'Camera',
			type: 'reference',
			to: [{ type: 'camera' }],
		}),
		defineField({
			name: 'film',
			title: 'Film',
			type: 'reference',
			to: [{ type: 'film' }],
		}),
		defineField({
			name: 'photos',
			title: 'Photos',
			type: 'array',
			of: [{ type: 'image' }],
			options: {
				layout: 'grid',
			},
		}),
	],
	preview: {
		select: {
			developDate: 'developDate',
			camera: 'camera.model',
			filmBrand: 'film.brand',
			filmModel: 'film.model',
			media: 'photos.0.asset',
		},
		prepare: ({ developDate, camera, filmBrand, filmModel, media }) => ({
			title: developDate,
			subtitle: [camera, filmBrand && `${filmBrand} ${filmModel}`].filter(Boolean).join(' @ '),
			media,
		}),
	},
})
