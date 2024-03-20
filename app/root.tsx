import {
	Links,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
} from '@remix-run/react'

import { useNonce } from './utils/nonce-provider.ts'

export default function Root() {
	const nonce = useNonce()
	return (
		<html lang="en">
			<head>
				<Links />
				<Meta />
			</head>
			<body>
				<Outlet />
				<script
					nonce={nonce}
					dangerouslySetInnerHTML={{
						__html: `window.ENV = ${JSON.stringify({})}`,
					}}
				/>
				<ScrollRestoration nonce={nonce} />
				<Scripts nonce={nonce} />
			</body>
		</html>
	)
}
