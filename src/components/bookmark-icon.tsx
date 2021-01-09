import React, { useState } from 'react'
import { Header, Image, Dimmer } from 'semantic-ui-react'

import { Bookmark } from './main-container'

interface BookmarkProps {
	faviconURL: Bookmark['faviconURL']
	title: Bookmark['title']
}

export const BookmarkIcon: React.FC<BookmarkProps> = ({
	faviconURL, title,
}) => {

	const [active, setActive] = useState(false)
	const handleShow = () => { setActive(true) }

	const handleHide = () => { setActive(false) }

	const content = (
		<Header
			as="h4" className="bookmark-title"
			inverted
		>
			{title}
		</Header>
	)
	return (
		<Dimmer.Dimmable
			as={Image}
			dimmed={active}
			dimmer={{
				active,
				content,
			}}
			onMouseEnter={handleShow}
			onMouseLeave={handleHide}
			size="medium"
			src={faviconURL}
		/>
	)
}
