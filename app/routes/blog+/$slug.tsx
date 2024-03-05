import { type LoaderFunctionArgs, json } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import { bundleMDX } from 'mdx-bundler'
import { getMDXComponent } from 'mdx-bundler/client'
import * as React from 'react'

import { reader } from '#/app/utils/keystatic-reader.server'

export async function loader({ params }: LoaderFunctionArgs) {
	const { slug } = params
	if (!slug) throw new Response('Slug param missing', { status: 404 })
	const post = await reader.collections.posts.read(slug, {
		resolveLinkedFiles: true,
	})
	if (!post)
		throw new Response(`No post matching slug: ${slug}`, { status: 404 })

	const { code } = await bundleMDX({
		source: post.body,
	})

	return json({ post, code })
}

export default function Post() {
	const { post, code } = useLoaderData<typeof loader>()
	const Component = React.useMemo(() => getMDXComponent(code), [code])
	return (
		<div className="container py-16">
			<h1 className="text-3xl font-semibold">{post.title}</h1>
			<div className="prose prose-p:text-black mt-6">
				<Component />
			</div>
		</div>
	)
}
