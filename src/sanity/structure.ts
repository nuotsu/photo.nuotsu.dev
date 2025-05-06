import { structureTool, type ListItemBuilder, type StructureBuilder } from 'sanity/structure'

export const structure = structureTool({
	structure: (S) =>
		S.list()
			.title('Structure')
			.items([S.documentTypeListItem('camera')]),
})

const singleton = (S: StructureBuilder, id: string): ListItemBuilder =>
	S.listItem().id(id).child(S.editor().id(id).schemaType(id).documentId(id))
