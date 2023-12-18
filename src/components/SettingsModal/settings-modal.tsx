import * as  React from 'react'
import {
	Header, Icon, Modal, Container,
} from 'semantic-ui-react'

import { SettingsModalFormStyle } from './settings-modal-form-style'
import { SettingsModalFormServer } from './settings-modal-form-server'
import { SettingsModalThemes } from './settings-modal-themes'

export const SettingsModal: React.FC = () => {
	return (
		<Modal
			size="small" trigger={(
				<Icon
					link name="edit"
					className="settings-button" size="big"
				/>
			)}
			scrolling closeIcon
		>
			<Header
				as="h2" icon="edit"
				content="Settings"
			/>
			<Modal.Content>
				<div id="bookmark-folder" />
				<SettingsModalThemes />
				<SettingsModalFormStyle />
				<SettingsModalFormServer />
				<Container textAlign="center">
					<Modal.Description
						as="a" href="https://addons.mozilla.org/ru/firefox/addon/semantic-new-tab/"
						content="Click here to visit addons.mozilla.org"
					>
					</Modal.Description>
				</Container>
			</Modal.Content>
		</Modal>
	)
}
