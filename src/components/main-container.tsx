import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import { Container } from 'semantic-ui-react'

import { ListView } from './list-view'
import { SettingsModal } from './SettingsModal/settings-modal'

async function createBookmarks() {
	const prefs = await browser.storage.local.get()
	let {
		faviconServerURL,
	} = prefs
	if (typeof faviconServerURL === 'undefined') {
		browser.storage.local.set({
			faviconServerURL: 'https://icon-fetcher-go.herokuapp.com',
		})
		faviconServerURL = 'https://icon-fetcher-go.herokuapp.com'
	}
	const allBookmarks = await browser.bookmarks.search({}) as Bookmark[]
	let currentFolderBookmarks = allBookmarks.filter(({
		type, parentId,
	}) => type === 'bookmark' && (parentId === (prefs.shownFolderId || 'toolbar_____')))
	currentFolderBookmarks = currentFolderBookmarks.map((el) => {
		const bookmark = el
		if (bookmark.url?.startsWith('http')) {
			bookmark.faviconURL = `${faviconServerURL}/icon?size=180&url=${el.url}`
		} else bookmark.faviconURL = 'https://icon-fetcher-go.herokuapp.com/icon?size=180&url=https://www.mozilla.org/ru/firefox/central/'
		return bookmark
	})
	return currentFolderBookmarks
}

async function setCustomCss() {
	const prefs = await browser.storage.local.get()
	if (typeof prefs.style !== 'undefined') {
		ReactDOM.render(prefs.style, document.getElementById('style'))
	}
}

export type Bookmark = browser.bookmarks.BookmarkTreeNode & {faviconURL: string}

export const MainContainer: React.FC = () => {
	const [bookmarks, setBookmarks] = useState<Bookmark[]>([])
	useEffect(() => {
		const loadBookmarks = async () => {
			const createdBookmarks = await createBookmarks()
			setBookmarks(prevState => ([
				...prevState,
				...createdBookmarks,
			]
			))
		}
		loadBookmarks()
		setCustomCss()
	}, [])

	return (
		<Container fluid>
			<div className="settings-position">
				<SettingsModal />
			</div>
			<ListView bookmarks={bookmarks} />
		</Container>
	)
}