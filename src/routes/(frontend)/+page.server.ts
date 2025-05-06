import { client } from '@/lib/server/sanity/client'
import groq from 'groq'
import type { PageServerLoad } from './$types'

export const load: PageServerLoad = async () => {
	const CAMERAS_QUERY = groq`*[_type == 'camera']|order(model)`

	return {
		cameras: await client.fetch(CAMERAS_QUERY),
	}
}
