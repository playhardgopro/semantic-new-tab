import React, { PureComponent } from 'react';
import {
  Header, Icon, Modal, Divider, Container,
} from 'semantic-ui-react';
import SettingsModalFormStyle from './SettingsModalFormStyle';
import SettingsModalFormServer from './SettingsModalFormServer';
import SettingsModalThemes from './SettingsModalThemes';

export default class SettingsModal extends PureComponent {
  render() {
    return (
      <Modal size="small" trigger={<Icon link name="edit" className="settings-button" size="big" />} scrolling closeIcon>
        <Header as="h2" icon="edit" content="Settings" />
        <Modal.Content>
          <Divider horizontal>
            <Header as="h3">
              <Icon name="folder open" size="small" />
Bookmarks
            </Header>
          </Divider>
          <Header as="h4" content="Select a new bookmark folder" />
          <div id="bookmark-folder" />
          <Divider horizontal>
            <Header as="h3">
              <Icon name="theme" size="small" />
Themes
            </Header>
          </Divider>
          <SettingsModalThemes />
          <Header as="h4" content="Custom CSS" />
          <SettingsModalFormStyle />
          <Divider horizontal>
            <Header as="h3">
              <Icon name="warning circle" size="small" />
Advanced
            </Header>
          </Divider>
          <Header as="h4" content="Icon Server" />
          <SettingsModalFormServer />
          <Divider />
          <Container textAlign="center">
            <Modal.Description as="a" href="https://addons.mozilla.org/ru/firefox/addon/semantic-new-tab/" content="Click here to visit addons.mozilla.org"></Modal.Description>
          </Container>
        </Modal.Content>
      </Modal>
    );
  }
}
