import { invariant } from '@epic-web/invariant'
import { useRouteLoaderData } from '@remix-run/react'
import { type loader as rootLoader } from '#app/routes/_app+/_layout.tsx'

/**
 * @returns the request info from the root loader
 */
export function useRequestInfo() {
	const data = useRouteLoaderData<typeof rootLoader>('routes/_app+/_layout')
	invariant(
		data?.requestInfo,
		'No requestInfo found in routes/_app+/_layout loader',
	)

	return data.requestInfo
}
