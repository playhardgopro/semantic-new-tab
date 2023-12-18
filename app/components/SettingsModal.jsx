import React, { PureComponent } from 'react';
import { Header, Icon, Modal } from 'semantic-ui-react';
import SettingsModalFormStyle from './SettingsModalFormStyle';
import SettingsModalFormServer from './SettingsModalFormServer';


export default class SettingsModal extends PureComponent {
  render() {
    return (
      <Modal trigger={<Icon link name="edit" size="big" />} closeIcon>
        <Header as="h1" icon="edit" content="Settings" />
        <Modal.Content>
          <Header as="h2" content="Bookmark folder" />
          <Header as="h3" content="Select a new Bookmark Folder" />
          <div id="bookmark-folder" />
          <Header as="h2" content="Appearance" />
          <SettingsModalFormStyle />
          <Header as="h2" content="Advanced" />
          <Header as="h3" content="Icon Server" />
          <SettingsModalFormServer />
        </Modal.Content>
      </Modal>
    );
  }
}
