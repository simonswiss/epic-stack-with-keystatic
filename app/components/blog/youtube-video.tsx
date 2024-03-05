type YoutubeVideoProps = {
	videoId: string
	caption?: string
}

export function YouTubeVideo({ videoId, caption }: YoutubeVideoProps) {
	return (
		<figure>
			<iframe
				className="not-prose aspect-video w-full rounded shadow-xl ring-4 ring-black/20"
				src={`https://www.youtube.com/embed/${videoId}?si=5DR3hAQWKGXOCR89`}
				title="YouTube video player"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				allowFullScreen
			></iframe>
			{caption && (
				<figcaption className="mt-8 border-l-4 border-black/20 pl-4 text-sm">
					{caption}
				</figcaption>
			)}
		</figure>
	)
}
