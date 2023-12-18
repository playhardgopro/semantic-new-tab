import React from 'react';
import {
  Header, Icon, Modal, Divider, Container,
} from 'semantic-ui-react';
import SettingsModalFormStyle from './SettingsModalFormStyle';
import SettingsModalFormServer from './SettingsModalFormServer';
import SettingsModalThemes from './SettingsModalThemes';

export default function SettingsModal() {
  return (
    <Modal size="small" trigger={<Icon link name="edit" className="settings-button" size="big" />} scrolling closeIcon>
      <Header as="h2" icon="edit" content="Settings" />
      <Modal.Content>
        <div id="bookmark-folder" />
        <SettingsModalThemes />
        <SettingsModalFormStyle />
        <SettingsModalFormServer />
        <Divider />
        <Container textAlign="center">
          <Modal.Description as="a" href="https://addons.mozilla.org/ru/firefox/addon/semantic-new-tab/" content="Click here to visit addons.mozilla.org"></Modal.Description>
        </Container>
      </Modal.Content>
    </Modal>
  );
}
