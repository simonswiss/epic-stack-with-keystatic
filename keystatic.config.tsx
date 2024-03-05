import { collection, config, fields } from '@keystatic/core'
import { block } from '@keystatic/core/content-components'

import { YouTubeVideo } from '#/app/components/blog/youtube-video'

export default config({
	storage: { kind: 'local' },
	ui: {
		brand: {
			name: 'The Epic Stack',
			mark: () => (
				<svg
					height={16}
					width={16}
					xmlns="http://www.w3.org/2000/svg"
					fill="currentColor"
					viewBox="0 0 65 65"
				>
					<path
						fill="currentColor"
						d="M39.445 25.555 37 17.163 65 0 47.821 28l-8.376-2.445Zm-13.89 0L28 17.163 0 0l17.179 28 8.376-2.445Zm13.89 13.89L37 47.837 65 65 47.821 37l-8.376 2.445Zm-13.89 0L28 47.837 0 65l17.179-28 8.376 2.445Z"
					></path>
				</svg>
			),
		},
	},
	collections: {
		posts: collection({
			label: 'Posts',
			path: 'content/posts/*',
			slugField: 'title',
			format: {
				contentField: 'body',
			},
			schema: {
				title: fields.slug({ name: { label: 'Title' } }),
				publishedOn: fields.date({
					label: 'Published On',
					validation: { isRequired: true },
				}),
				body: fields.mdx({
					label: 'Post Body',
					components: {
						YouTubeVideo: block({
							label: 'YouTube Video',
							schema: {
								videoId: fields.text({
									label: 'Video ID',
									description:
										'The ID of the YouTube video (not the full URL!)',
								}),
								caption: fields.text({ label: 'Caption', multiline: true }),
							},
							ContentView: props => (
								<YouTubeVideo
									videoId={props.value.videoId}
									caption={props.value.caption}
								/>
							),
						}),
					},
				}),
			},
		}),
	},
})
