import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import {
	Form, Label, Header, Divider,
} from 'semantic-ui-react'

import { Bookmark } from '../main-container'

import { SettingsModalFormFolder } from './settings-modal-form-folder'

async function updateStyle() {
	const customCss = (document.getElementById('reactCss') as HTMLTextAreaElement).value
	await browser.storage.local.set({
		style: customCss,
	})
	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	//@ts-ignore
	ReactDOM.render(customCss, document.getElementById('style'))
}
// TODO: move this function to it's component
async function renderBookmarkFolder() {
	const prefs = await browser.storage.local.get()
	const serverDomain = document.getElementById('serverDomain') as HTMLTextAreaElement
	serverDomain.value = prefs.faviconServerURL || 'https://icon-fetcher-go.herokuapp.com'
	const bookmarksFolder = await browser.bookmarks.get(prefs.shownFolderId || 'toolbar_____') as Bookmark[]
	ReactDOM.render(<SettingsModalFormFolder bookmarksFolder={bookmarksFolder[0]} />, document.getElementById('bookmark-folder'))
}

export const SettingsModalFormStyle: React.FC = () => {

	useEffect(() => {
		renderBookmarkFolder()
		browser.storage.local.get('style').then((css) => {
			if (typeof css.style !== 'undefined') {
				(document.getElementById('reactCss') as HTMLTextAreaElement).value = css.style
			}
		})
	}, [])

	return (
		<Form id="styleForm">
			<Divider />
			<Header as="h4" content="Custom CSS" />
			<Label pointing="below" content="This CSS will be added as a style tag in the head section of the document." />
			<Form.TextArea
				style={{
					minHeight: 300,
				}}
				placeholder="Enter CSS here."
				name="reactCss"
				id="reactCss"
			/>
			<Form.Button
				inverted onClick={updateStyle}
				color="green" content="Update"
			/>
		</Form>
	)

}
