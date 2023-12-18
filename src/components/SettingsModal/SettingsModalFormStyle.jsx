import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom';
import {
  Form, Label, Header, Divider,
} from 'semantic-ui-react';
import SettingsModalFormFolder from './SettingsModalFormFolder';

async function updateStyle() {
  const customCss = document.getElementById('reactCss').value;
  await browser.storage.local.set({ style: customCss });
  ReactDOM.render(customCss, document.getElementById('style'));
}
// TODO: move this function to it's component
async function renderBookmarkFolder() {
  const prefs = await browser.storage.local.get();
  document.getElementById('serverDomain').value = prefs.faviconServerURL || 'https://icon-fetcher-go.herokuapp.com';
  const bookmark = await browser.bookmarks.get(prefs.shownFolderId || 'toolbar_____');
  ReactDOM.render(<SettingsModalFormFolder bookmark={bookmark[0]} />, document.getElementById('bookmark-folder'));
}

export default class SettingsModalFormStyle extends PureComponent {
  componentDidMount() {
    renderBookmarkFolder();
    browser.storage.local.get('style').then((css) => {
      if (typeof css.style !== 'undefined') {
        document.getElementById('reactCss').value = css.style;
      }
    });
  }

  render() {
    return (
      <Form id="styleForm">
        <Divider />
        <Header as="h4" content="Custom CSS" />
        <Label pointing="below" content="This CSS will be added as a style tag in the head section of the document." />
        <Form.TextArea
          style={{ minHeight: 300 }}
          placeholder="Enter CSS here."
          name="reactCss"
          id="reactCss"
        />
        <Form.Button inverted onClick={updateStyle} color="green" content="Update" />
      </Form>
    );
  }
}
