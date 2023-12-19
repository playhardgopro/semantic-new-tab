import * as React from 'react';
import { List } from 'semantic-ui-react';

import { BookmarkLink } from './bookmark-link';
import { Bookmark } from './main-container';

interface ListViewProps {
	bookmarks: Bookmark[];
}

export const ListView: React.FC<ListViewProps> = ({ bookmarks }) => {
	const items = bookmarks.map((b) => (
		<BookmarkLink
			title={b.title}
			url={b.url}
			key={b.id}
			faviconURL={b.faviconURL}
		/>
	));
	return (
		<List
			items={items}
			className="bookmarks-position"
		/>
	);
};
