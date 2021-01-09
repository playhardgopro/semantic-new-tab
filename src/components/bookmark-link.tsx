import * as React from 'react'

import { BookmarkIcon } from './bookmark-icon'
import { Bookmark } from './main-container'

export type BookmarkLinkProps = {
	url: Bookmark['url']
	title: Bookmark['title']
	faviconURL: Bookmark['faviconURL']
}

export const BookmarkLink: React.FC<BookmarkLinkProps> = ({
	url, title, faviconURL,
}) => {
	return (
		<a
			href={url} className="bookmark"
			rel="noopener noreferrer" target="_self"
		>
			<BookmarkIcon faviconURL={faviconURL} title={title} />
		</a>
	)
}
