import { defineConfig } from 'sanity'
import { projectId, dataset } from './lib/env'
import { structure, icon } from './structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemaTypes'

const singletonTypes = ['site']

export default defineConfig({
	title: 'nuotsu',
	icon,

	projectId,
	dataset,
	basePath: '/admin',

	plugins: [structure, visionTool()],

	schema: {
		types: schemaTypes,
		templates: (templates) =>
			templates.filter(({ schemaType }) => !singletonTypes.includes(schemaType)),
	},

	document: {
		actions: (input, { schemaType }) =>
			singletonTypes.includes(schemaType)
				? input.filter(
						({ action }) => action && ['publish', 'discardChanges', 'restore'].includes(action),
					)
				: input,
	},

	tasks: { enabled: false },
	scheduledPublishing: { enabled: false },
})
